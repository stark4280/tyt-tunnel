# Cloudflare Worker Deployment Guide

## 📦 Worker Kodu

Cloudflare Worker'ı deploy etmek için aşağıdaki kodu kullanın:

// worker.js (V2 - Large File Support)
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // CORS configuration
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const fileId = url.searchParams.get('id');
    if (!fileId) return new Response('Missing ID', { status: 400, headers: corsHeaders });

    const driveUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // 1. İlk isteği at
    let response = await fetch(driveUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    // 2. Eğer "Virus scan warning" dönerse (genelde HTML döner)
    // Google Drive bazen 200 OK ile HTML döndürür, bu yüzden content-type kontrolü şart
    const contentType = response.headers.get('content-type') || '';
    
    if (contentType.includes('text/html')) {
        // HTML içeriğini oku
        const html = await response.text();
        
        // "Virus scan warning" veya "Download anyway" var mı bak
        if (html.includes('confirm=') || html.includes('download-form')) {
            // Confirm token'ı yakala (basit regex)
            // Genelde: name="confirm" value="xxxx"
            const match = html.match(/name="confirm" value="([^"]+)"/);
            const confirmToken = match ? match[1] : 't'; // Bulamazsa 't' dene
            
            // Yeni URL oluştur
            const confirmUrl = `${driveUrl}&confirm=${confirmToken}`;
            
            // Tekrar fetch et
            response = await fetch(confirmUrl, {
                 headers: { 
                     'User-Agent': 'Mozilla/5.0',
                     // Cookie'leri taşı (önemli)
                     'Cookie': response.headers.get('Set-Cookie') || ''
                 }
            });
        }
    }
    
    // 3. Yanıtı stream olarak döndür
    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/pdf', // Zorla PDF de
        'Cache-Control': 'public, max-age=604800',
      }
    });
  },
};

---

## 🚀 Deployment Adımları

### 1. Cloudflare Hesabı Oluştur
- https://dash.cloudflare.com/sign-up adresinden ücretsiz hesap aç
- Email doğrulama yap

### 2. Workers & Pages'e Git
- Dashboard → Sol menü → **Workers & Pages**
- **Create Application** butonuna tıkla
- **Create Worker** seç

### 3. Worker'ı Oluştur
- İsim ver: `citadel-proxy` (istediğin bir isim)
- **Deploy** butonuna tıkla

### 4. Kodu Yapıştır
- Deploy edildikten sonra **Quick Edit** butonuna tıkla
- Sol paneldeki varsayılan kodu sil
- Yukarıdaki `worker.js` kodunu yapıştır
- **Save and Deploy** butonuna tıkla

### 5. Worker URL'ini Kopyala
- Deployment sonrası gösterilen URL'i kopyala
- Format: `https://citadel-proxy.YOUR_USERNAME.workers.dev`

### 6. Projeye Ekle
- `src/data/constants.js` dosyasını aç
- `PROXY_URL` değişkenine Worker URL'ini yapıştır:

```javascript
export const PROXY_URL = 'https://citadel-proxy.YOUR_USERNAME.workers.dev';
```

---

## ✅ Test Et

Terminal'de curl ile test et:

```bash
curl "https://citadel-proxy.YOUR_USERNAME.workers.dev?id=1Nuh2j1gVonFs-k6iHV2hlT-wTIetvH_V" -I
```

Başarılı yanıt:
```
HTTP/2 200
content-type: application/pdf
access-control-allow-origin: *
```

---

## 💡 Önemli Notlar

- **Ücretsiz Tier Limitleri:**
  - 100,000 istek/gün
  - The Citadel için yeterli (günde ~20 PDF × 2-3 yükleme = ~60 istek)
  
- **Cache:**
  - IndexedDB'ye kaydettiğin için Worker'a sadece ilk açılışta istek gider
  - Sonraki yüklemeler offline çalışır

- **Güvenlik:**
  - CORS açık (`Access-Control-Allow-Origin: *`)
  - Sadece Google Drive File ID'lerine erişim var
  - Kötüye kullanım riski minimum (sadece senin File ID'lerin geçerli)

---

## 🐛 Sorun Giderme

### "PDF fetch failed" hatası
- Google Drive dosyası public yapıldı mı kontrol et:
  - Google Drive'da dosyaya sağ tıkla → **Paylaş** → **Bağlantısı olan herkes görüntüleyebilir**

### CORS hatası
- Worker kodunun `Access-Control-Allow-Origin: *` header'ını döndürdüğünden emin ol
- Browser DevTools → Network sekmesinden response header'ları kontrol et

### "Missing file ID parameter"
- Fetch URL'inin doğru olduğundan emin ol: `${PROXY_URL}?id=${fileId}`
- `constants.js` dosyasında File ID'lerin doğru olduğunu kontrol et
