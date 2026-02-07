# 🎯 THE CITADEL V11.0 - Cloud Edition
## TYT 2026 Digital Study System

**105 günlük çaprazlanmış öğrenme tüneli. Sınavdan 105 gün önce girilir, sınavdan 1 gün önce çıkılır.**

---

## 🚀 Özellikler

### ☁️ Google Drive Integration
- **19 PDF kütüphane** merkezi Drive klasöründe saklanır
- File ID mapping sistemi ile otomatik PDF çekme
- Token veya API key gerektirmez

### 📖 In-App PDF Viewer + Digital Ink
- Google Drive Viewer embed
- HTML5 Canvas üzerinde tablet kalem desteği
- Pen/Eraser/Clear tools
- PDF üzerine direkt not alma

### 🔒 Video Lock Protocol
- YouTube algoritmasından izolasyon
- `youtube-nocookie.com` embed
- Video izlenmeden PDF açılmaz

### 📊 105 Günlük İnterleaved Curriculum
- Tüm TYT konuları çaprazlanmış (Mat-Türk-Fen-Geo...)
- Her 7. gün sistem analizi
- Kritik konular işaretli (★)
- Hedef: 100k-150k sıralama

### 🎮 Antigravity Disiplin
- Geri butonu yok
- Konu atlama yok
- Sadece ileri
- Tünel kapandıktan sonra 20 Haziran 2026'da açılır

---

## 📦 Google Drive Kurulumu

### 1. Drive Klasörü
Tüm PDF'lerin bulunduğu klasör:
```
https://drive.google.com/drive/folders/1A05kx1ewqSajhDP9pnI4LDSgZmFsjC2V
```

### 2. File ID Bulma
Her PDF için:
1. PDF'e sağ tık → **Paylaş**
2. Linki kopyala: `https://drive.google.com/file/d/1AbC...XyZ/view`
3. **File ID:** `1AbC...XyZ` (ortadaki kısım)

### 3. Kategori Eşleştirme
Uygulamada her kategori için File ID gir:
- MAT_345
- MAT_BS
- MAT_PROB
- TURKCE_345
- PARAGRAF_LIMIT
- PARAGRAF_PARAF
- GEO_3D_VDD
- GEO_BS
- FIZIK_345
- FIZIK_AYDIN
- KIMYA_345
- KIMYA_PALME
- BIYO_345
- BIYO_BIYOTIK
- SOSYAL_345
- COG_BS
- FEL_LIMIT_EL
- DIN_LIMIT_EL
- TARIH_345

---

## 🛠️ Teknik Detaylar

### Stack
- **React** (Vite)
- **HTML5 Canvas** (Digital Ink)
- **Google Drive Viewer API**
- **LocalStorage** (Progress persistence)

### Deployment
```bash
npm install
npm run build
npm run deploy
```

### Live Demo
🔗 [https://stark4280.github.io/tyt-tunnel/](https://stark4280.github.io/tyt-tunnel/)

---

## 📖 Kullanım

1. **Uygulamayı aç**
2. **Her PDF için File ID'yi gir**
3. **"Bağlantıyı Tamamla" tıkla**
4. **GÜN 1 başlar:**
   - YouTube'da video bul
   - Linki yapıştır ve kilitle
   - PDF'i aç ve tablet kalemiyle çalış
   - Günü tamamla

---

## 🎓 Pedagojik Yaklaşım

### Interleaving (Çaprazlama)
Konular arka arkaya değil, karışık sırada çalışılır. Bu monotonluğu kırar ve hafızayı güçlendirir.

### Active Recall
Her 7. gün yeni konu yok. Sadece geçen haftanın analizi.

### Video Lock
Dikkat dağıtıcı öneriler/yorumlar kapalı. Sadece içerik.

### Digital Ink
Kalem desteği ile PDF üzerine direkt çalışma. Kağıt-kalem hissi.

---

## 📊 İlerleme Takibi

- Tamamlanan günler
- Kalan günler
- Her günün konusu ve hedef soru sayısı
- Progress bar (0-105)

---

## 🔐 Veri Güvenliği

- PDF'ler Google Drive'da saklanır (private)
- Progress localStorage'da saklanır (cihaz bazlı)
- Hiçbir veri sunucuya gönderilmez

---

## 📝 License

MIT

---

## 🎯 Hedef

**20 Haziran 2026 TYT Sınavı**  
**100k-150k Sıralama**

> "Tünelde geriye dönüş yoktur. Sadece ileri."

**KOMUTUNUZU BEKLİYORUM: BAŞLA**
