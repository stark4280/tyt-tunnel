# 🔥 Firebase Kurulum Rehberi

Bu rehber, TYT Tunnel uygulamasında cihazlar arası senkronizasyon için Firebase Realtime Database kurulumunu anlatır.

## 📋 Gereksinimler

- Google hesabı
- İnternet bağlantısı
- 10 dakika

## 🚀 Adım Adım Kurulum

### 1. Firebase Console'a Git

1. [Firebase Console](https://console.firebase.google.com/) adresine git
2. Google hesabınla giriş yap
3. **"Add project"** veya **"Proje ekle"** butonuna tıkla

### 2. Yeni Proje Oluştur

1. **Proje adı:** `tyt-tunnel` (veya istediğin bir isim)
2. **Google Analytics:** İsteğe bağlı (kapatabilirsin)
3. **Create project** butonuna tıkla
4. Proje hazır olana kadar bekle (30 saniye)

### 3. Realtime Database Oluştur

1. Sol menüden **"Build"** → **"Realtime Database"** seç
2. **"Create Database"** butonuna tıkla
3. **Location:** `europe-west1` (Avrupa - Amsterdam) seç
4. **Security rules:** **"Start in test mode"** seç
   - ⚠️ Test mode 30 gün sonra kapanır, production'da güvenlik kuralları eklemen gerekir
5. **Enable** butonuna tıkla

### 4. Güvenlik Kurallarını Ayarla (ÖNEMLİ!)

1. **"Rules"** sekmesine git
2. Aşağıdaki kuralları yapıştır:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

3. **Publish** butonuna tıkla
4. Bu kurallar sadece kullanıcının kendi verilerine erişmesini sağlar

### 5. Authentication'ı Aktifleştir

1. Sol menüden **"Build"** → **"Authentication"** seç
2. **"Get started"** butonuna tıkla
3. **"Sign-in method"** sekmesine git
4. **"Anonymous"** seçeneğini bul ve tıkla
5. **Enable** toggle'ını aç
6. **Save** butonuna tıkla

### 6. Firebase Config Bilgilerini Al

1. Sol üstteki ⚙️ (ayarlar) ikonuna tıkla
2. **"Project settings"** seç
3. Aşağı kaydır, **"Your apps"** bölümünü bul
4. **Web** ikonu (`</>`) tıkla
5. **App nickname:** `tyt-tunnel-web` yaz
6. **"Register app"** butonuna tıkla
7. **firebaseConfig** objesini kopyala (aşağıdaki gibi görünecek):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "tyt-tunnel.firebaseapp.com",
  databaseURL: "https://tyt-tunnel-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tyt-tunnel",
  storageBucket: "tyt-tunnel.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef"
};
```

### 7. Config Dosyasını Güncelle

1. Projedeki `src/firebase/config.js` dosyasını aç
2. `firebaseConfig` objesindeki **BURAYA_..._GELECEK** yazan yerleri Firebase Console'dan kopyaladığın değerlerle değiştir:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "tyt-tunnel.firebaseapp.com",
    databaseURL: "https://tyt-tunnel-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tyt-tunnel",
    storageBucket: "tyt-tunnel.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890abcdef"
};
```

3. Dosyayı kaydet

### 8. Uygulamayı Test Et

1. Uygulamayı başlat: `npm run dev`
2. Dashboard'a git
3. **"Bulut Senkronizasyonu"** panelini bul
4. **"Senkronizasyonu Başlat"** butonuna tıkla
5. Yeşil ✓ işareti görürsen başarılı!

## 🔄 Kullanım

### İlk Cihazda (Örn: Masaüstü)

1. Dashboard'da **"Yükle"** butonuna tıkla
2. Tüm veriler buluta yüklenir

### İkinci Cihazda (Örn: Tablet)

1. Aynı Firebase config'i kullan
2. Dashboard'da **"Senkronizasyonu Başlat"** butonuna tıkla
3. **"İndir"** butonuna tıkla
4. Tüm veriler indirilir ve sayfa yenilenir

### Otomatik Senkronizasyon

- Her optik işaretleme otomatik kaydedilir
- Her gün tamamlama otomatik kaydedilir
- Çizimler otomatik kaydedilir

## 🔒 Güvenlik

- **Anonymous Auth:** Her cihaz benzersiz bir ID alır
- **Güvenlik Kuralları:** Sadece kendi verilerine erişebilirsin
- **HTTPS:** Tüm iletişim şifreli
- **Config Dosyası:** `.gitignore`'da, GitHub'a yüklenmez

## ⚠️ Önemli Notlar

1. **Test Mode:** 30 gün sonra güvenlik kurallarını güncellemelisin
2. **Ücretsiz Kota:** 1GB depolama, 10GB/ay transfer (tek kullanıcı için fazlasıyla yeterli)
3. **Veri Kaybı:** Manuel "İndir" butonu yerel verilerin üzerine yazar, dikkatli ol!
4. **Config Güvenliği:** `config.js` dosyasını kimseyle paylaşma

## 🐛 Sorun Giderme

### "Firebase bağlantısı başarısız"

- Config dosyasındaki değerleri kontrol et
- İnternet bağlantını kontrol et
- Browser console'da hata mesajlarına bak (F12)

### "Permission denied"

- Güvenlik kurallarını kontrol et
- Authentication'ın aktif olduğundan emin ol

### "Veriler indirilmiyor"

- Önce "Yükle" butonuna tıklayıp veri yüklediğinden emin ol
- Firebase Console'da Database sekmesinden verileri kontrol et

## 📊 Firebase Console'da Verileri Görüntüleme

1. Firebase Console → Realtime Database
2. **Data** sekmesi
3. `users/[USER_ID]/` altında verilerini görebilirsin:
   - `progress`: İlerleme verileri
   - `settings`: Ayarlar
   - `optiks`: Optik kayıtları

## 🎉 Tamamlandı!

Artık tüm cihazlarında verilerini senkronize edebilirsin. Tablet'te çalış, masaüstünde devam et!
