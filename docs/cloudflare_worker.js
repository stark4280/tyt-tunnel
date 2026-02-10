// Cloudflare Worker - Google Drive PDF Proxy (V3 - Large File Fix)
// Bu kodu Cloudflare Workers dashboard'a yapıştır

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // OPTIONS request (preflight)
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // File ID kontrolü
    const fileId = url.searchParams.get('id');
    if (!fileId) {
      return new Response('Missing file ID parameter', { 
        status: 400, 
        headers: corsHeaders 
      });
    }

    try {
      // Google Drive usercontent URL (direkt download)
      // Bu URL virus scan warning'i bypass eder
      const driveUrl = `https://drive.usercontent.google.com/download?id=${fileId}&export=download&confirm=t`;
      
      console.log('Fetching from:', driveUrl);
      
      // Google Drive'dan fetch
      const response = await fetch(driveUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
        redirect: 'follow', // Redirect'leri takip et
      });

      // Hata kontrolü
      if (!response.ok) {
        console.error('Google Drive error:', response.status, response.statusText);
        return new Response(`Google Drive error: ${response.status}`, {
          status: response.status,
          headers: corsHeaders
        });
      }

      // Content-Type kontrolü
      const contentType = response.headers.get('content-type') || '';
      console.log('Content-Type:', contentType);

      // Eğer HTML dönerse (hala virus warning varsa)
      if (contentType.includes('text/html')) {
        const html = await response.text();
        
        // HTML içeriğinde download link var mı bak
        if (html.includes('uc-download-link')) {
          // Fallback: drive.google.com/uc URL'ini dene
          const fallbackUrl = `https://drive.google.com/uc?export=download&id=${fileId}&confirm=t`;
          console.log('Trying fallback URL:', fallbackUrl);
          
          const fallbackResponse = await fetch(fallbackUrl, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
            redirect: 'follow',
          });
          
          return new Response(fallbackResponse.body, {
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/pdf',
              'Cache-Control': 'public, max-age=3600',
            }
          });
        }
        
        // HTML döndü ama download link yok - hata
        return new Response('Google Drive returned HTML instead of PDF', {
          status: 500,
          headers: corsHeaders
        });
      }

      // Başarılı - PDF stream'i döndür
      return new Response(response.body, {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/pdf',
          'Cache-Control': 'public, max-age=3600',
        }
      });

    } catch (error) {
      console.error('Worker error:', error);
      return new Response(`Worker error: ${error.message}`, {
        status: 500,
        headers: corsHeaders
      });
    }
  },
};
