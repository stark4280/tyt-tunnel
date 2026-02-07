import React, { useState, useEffect } from 'react';

// --- EKSİKSİZ VE TAM TYT MÜFREDATI (75+ KONU) ---
const FULL_DB = [
    // TÜRKÇE
    { c: "TÜRKÇE", n: "Sözcükte Anlam", q: 3, target: 60, s: false, yt: "TYT+Turkce+Sozcukte+Anlam" },
    { c: "TÜRKÇE", n: "Cümlede Anlam", q: 4, target: 60, s: false, yt: "TYT+Turkce+Cumlede+Anlam" },
    { c: "TÜRKÇE", n: "Paragrafta Anlatım Teknikleri", q: 4, target: 100, s: true, yt: "TYT+Turkce+Paragraf+Anlatim+Teknikleri" },
    { c: "TÜRKÇE", n: "Paragrafta Ana Düşünce", q: 22, target: 150, s: true, yt: "TYT+Turkce+Paragraf+Ana+Dusunce" },
    { c: "TÜRKÇE", n: "Ses Bilgisi", q: 1, target: 40, s: false, yt: "TYT+Turkce+Ses+Bilgisi" },
    { c: "TÜRKÇE", n: "Yazım Kuralları", q: 2, target: 60, s: true, yt: "TYT+Turkce+Yazim+Kurallari" },
    { c: "TÜRKÇE", n: "Noktalama İşaretleri", q: 2, target: 60, s: true, yt: "TYT+Turkce+Noktalama+Isaretleri" },
    { c: "TÜRKÇE", n: "Sözcük Yapısı ve Ekler", q: 1, target: 50, s: false, yt: "TYT+Turkce+Sozcuk+Yapisi" },
    { c: "TÜRKÇE", n: "İsimler, Sıfatlar, Zamirler", q: 1, target: 60, s: false, yt: "TYT+Turkce+Sozcuk+Turleri" },
    { c: "TÜRKÇE", n: "Zarflar, Edatlar, Bağlaçlar", q: 1, target: 60, s: false, yt: "TYT+Turkce+Zarf+Edat+Baglac" },
    { c: "TÜRKÇE", n: "Fiiller ve Fiilimsiler", q: 1, target: 60, s: false, yt: "TYT+Turkce+Fiiller" },
    { c: "TÜRKÇE", n: "Cümlenin Ögeleri", q: 1, target: 50, s: true, yt: "TYT+Turkce+Cumlenin+Ogeleri" },

    // MATEMATİK
    { c: "MATEMATİK", n: "Temel Kavramlar", q: 3, target: 100, s: true, yt: "TYT+Matematik+Temel+Kavramlar" },
    { c: "MATEMATİK", n: "Sayı Basamakları", q: 2, target: 60, s: false, yt: "TYT+Matematik+Sayi+Basamaklari" },
    { c: "MATEMATİK", n: "Bölme ve Bölünebilme", q: 2, target: 60, s: false, yt: "TYT+Matematik+Bolme+Bolunebilme" },
    { c: "MATEMATİK", n: "EBOB - EKOK", q: 1, target: 50, s: false, yt: "TYT+Matematik+Ebob+Ekok" },
    { c: "MATEMATİK", n: "Rasyonel Sayılar", q: 1, target: 40, s: true, yt: "TYT+Matematik+Rasyonel+Sayilar" },
    { c: "MATEMATİK", n: "Basit Eşitsizlikler", q: 1, target: 50, s: false, yt: "TYT+Matematik+Basit+Esitsizlikler" },
    { c: "MATEMATİK", n: "Mutlak Değer", q: 1, target: 60, s: true, yt: "TYT+Matematik+Mutlak+Deger" },
    { c: "MATEMATİK", n: "Üslü Sayılar", q: 1, target: 80, s: true, yt: "TYT+Matematik+Uslu+Sayilar" },
    { c: "MATEMATİK", n: "Köklü Sayılar", q: 1, target: 80, s: true, yt: "TYT+Matematik+Koklu+Sayilar" },
    { c: "MATEMATİK", n: "Çarpanlara Ayırma", q: 1, target: 60, s: false, yt: "TYT+Matematik+Carpanlara+Ayirma" },
    { c: "MATEMATİK", n: "Oran - Orantı", q: 1, target: 50, s: false, yt: "TYT+Matematik+Oran+Oranti" },
    { c: "MATEMATİK", n: "Denklem Çözme", q: 1, target: 40, s: false, yt: "TYT+Matematik+Denklem+Cozme" },
    { c: "MATEMATİK", n: "Sayı ve Kesir Problemleri", q: 5, target: 200, s: true, yt: "TYT+Matematik+Sayi+Kesir+Problemleri" },
    { c: "MATEMATİK", n: "Yaş Problemleri", q: 1, target: 50, s: false, yt: "TYT+Matematik+Yas+Problemleri" },
    { c: "MATEMATİK", n: "Hız ve Hareket Problemleri", q: 1, target: 60, s: true, yt: "TYT+Matematik+Hiz+Problemleri" },
    { c: "MATEMATİK", n: "Yüzde, Kar-Zarar Problemleri", q: 2, target: 100, s: true, yt: "TYT+Matematik+Yuzde+Problemleri" },
    { c: "MATEMATİK", n: "Karışım ve Grafik Problemleri", q: 1, target: 50, s: false, yt: "TYT+Matematik+Grafik+Problemleri" },
    { c: "MATEMATİK", n: "Kümeler", q: 2, target: 80, s: true, yt: "TYT+Matematik+Kumeler" },
    { c: "MATEMATİK", n: "Fonksiyonlar", q: 2, target: 100, s: true, yt: "TYT+Matematik+Fonksiyonlar" },
    { c: "MATEMATİK", n: "Permütasyon ve Kombinasyon", q: 1, target: 60, s: false, yt: "TYT+Matematik+Permutasyon+Kombinasyon" },
    { c: "MATEMATİK", n: "Olasılık", q: 1, target: 60, s: true, yt: "TYT+Matematik+Olasilik" },
    { c: "MATEMATİK", n: "Veri ve İstatistik", q: 1, target: 40, s: false, yt: "TYT+Matematik+Veri+Istatistik" },
    { c: "MATEMATİK", n: "Mantık", q: 1, target: 40, s: false, yt: "TYT+Matematik+Mantik" },

    // GEOMETRİ
    { c: "GEOMETRİ", n: "Doğruda ve Üçgende Açılar", q: 1, target: 80, s: true, yt: "TYT+Geometri+Ucgende+Acilar" },
    { c: "GEOMETRİ", n: "Dik ve Özel Üçgenler", q: 2, target: 100, s: true, yt: "TYT+Geometri+Ozel+Ucgenler" },
    { c: "GEOMETRİ", n: "Üçgende Alan ve Benzerlik", q: 2, target: 100, s: true, yt: "TYT+Geometri+Ucgende+Benzerlik" },
    { c: "GEOMETRİ", n: "Çokgenler ve Dörtgenler", q: 2, target: 80, s: false, yt: "TYT+Geometri+Dortgenler" },
    { c: "GEOMETRİ", n: "Çember ve Daire", q: 1, target: 60, s: false, yt: "TYT+Geometri+Cember+Daire" },
    { c: "GEOMETRİ", n: "Katı Cisimler", q: 2, target: 80, s: true, yt: "TYT+Geometri+Kati+Cisimler" },

    // FİZİK
    { c: "FİZİK", n: "Fizik Bilimine Giriş", q: 1, target: 30, s: false, yt: "TYT+Fizik+Bilimine+Giris" },
    { c: "FİZİK", n: "Madde ve Özellikleri", q: 1, target: 40, s: false, yt: "TYT+Fizik+Madde+ve+Ozellikleri" },
    { c: "FİZİK", n: "Hareket ve Kuvvet", q: 1, target: 60, s: true, yt: "TYT+Fizik+Hareket+ve+Kuvvet" },
    { c: "FİZİK", n: "Enerji", q: 1, target: 40, s: false, yt: "TYT+Fizik+Enerji" },
    { c: "FİZİK", n: "Isı, Sıcaklık ve Genleşme", q: 1, target: 50, s: true, yt: "TYT+Fizik+Isi+Sicaklik" },
    { c: "FİZİK", n: "Elektrik ve Manyetizma", q: 1, target: 60, s: false, yt: "TYT+Fizik+Elektrik" },
    { c: "FİZİK", n: "Basınç ve Kaldırma Kuvveti", q: 1, target: 50, s: false, yt: "TYT+Fizik+Basinc" },
    { c: "FİZİK", n: "Dalgalar", q: 1, target: 40, s: false, yt: "TYT+Fizik+Dalgalar" },
    { c: "FİZİK", n: "Optik", q: 2, target: 100, s: true, yt: "TYT+Fizik+Optik" },

    // KİMYA
    { c: "KİMYA", n: "Kimya Bilimi", q: 1, target: 30, s: false, yt: "TYT+Kimya+Bilimi" },
    { c: "KİMYA", n: "Atomun Yapısı", q: 1, target: 40, s: true, yt: "TYT+Kimya+Atomun+Yapisi" },
    { c: "KİMYA", n: "Periyodik Sistem", q: 1, target: 40, s: true, yt: "TYT+Kimya+Periyodik+Sistem" },
    { c: "KİMYA", n: "Kimyasal Türler Arası Etkileşimler", q: 1, target: 60, s: true, yt: "TYT+Kimya+Etkilesimler" },
    { c: "KİMYA", n: "Maddenin Halleri", q: 1, target: 40, s: false, yt: "TYT+Kimya+Maddenin+Halleri" },
    { c: "KİMYA", n: "Kimyanın Temel Kanunları", q: 1, target: 50, s: true, yt: "TYT+Kimya+Kanunlar" },
    { c: "KİMYA", n: "Karışımlar", q: 1, target: 40, s: false, yt: "TYT+Kimya+Karisimlar" },
    { c: "KİMYA", n: "Asitler, Bazlar ve Tuzlar", q: 1, target: 50, s: true, yt: "TYT+Kimya+Asitler+Bazlar" },

    // BİYOLOJİ
    { c: "BİYOLOJİ", n: "Canlıların Ortak Özellikleri", q: 1, target: 30, s: false, yt: "TYT+Biyoloji+Ortak+Ozellikler" },
    { c: "BİYOLOJİ", n: "Hücre ve Yapısı", q: 1, target: 50, s: true, yt: "TYT+Biyoloji+Hucre" },
    { c: "BİYOLOJİ", n: "Canlıların Sınıflandırılması", q: 1, target: 40, s: false, yt: "TYT+Biyoloji+Siniflandirma" },
    { c: "BİYOLOJİ", n: "Hücre Bölünmeleri", q: 1, target: 50, s: true, yt: "TYT+Biyoloji+Hucre+Bolunmeleri" },
    { c: "BİYOLOJİ", n: "Kalıtım", q: 1, target: 80, s: true, yt: "TYT+Biyoloji+Kalitim" },
    { c: "BİYOLOJİ", n: "Ekosistem Ekolojisi", q: 1, target: 40, s: false, yt: "TYT+Biyoloji+Ekoloji" },

    // SOSYAL (Özetlenmiş Kritikler)
    { c: "TARİH", n: "Tarih ve Zaman - İlk Türk Devletleri", q: 1, target: 40, s: true, yt: "TYT+Tarih+Ilk+Turk+Devletleri" },
    { c: "TARİH", n: "Osmanlı Devleti Kuruluş ve Yükselme", q: 1, target: 40, s: false, yt: "TYT+Tarih+Osmanli+Siyasi" },
    { c: "TARİH", n: "Milli Mücadele Hazırlık", q: 1, target: 50, s: true, yt: "TYT+Tarih+Milli+Mucadele" },
    { c: "TARİH", n: "Atatürk İlkeleri ve İnkılaplar", q: 2, target: 50, s: true, yt: "TYT+Tarih+Inkilaplar" },
    { c: "COĞRAFYA", n: "Harita Bilgisi", q: 1, target: 30, s: true, yt: "TYT+Cografya+Harita+Bilgisi" },
    { c: "COĞRAFYA", n: "İklim Bilgisi", q: 1, target: 40, s: true, yt: "TYT+Cografya+Iklim+Bilgisi" },
    { c: "COĞRAFYA", n: "Nüfus ve Yerleşme", q: 1, target: 30, s: true, yt: "TYT+Cografya+Nufus" },
    { c: "FELSEFE", n: "Felsefenin Temel Konuları", q: 5, target: 50, s: false, yt: "TYT+Felsefe+Konu+Anlatimi" },
    { c: "DİN", n: "Din Kültürü Temel Kavramlar", q: 5, target: 50, s: true, yt: "TYT+Din+Kulturu+Kavramlar" }
];

export default function App() {
    const [p, setP] = useState(() => {
        const saved = localStorage.getItem('tyt_final_v1');
        return saved ? JSON.parse(saved) : { sIdx: 0, stepIdx: 0, showVideo: false };
    });

    const [inputVal, setInputVal] = useState("");

    useEffect(() => {
        localStorage.setItem('tyt_final_v1', JSON.stringify(p));
    }, [p]);

    const current = FULL_DB[p.sIdx];
    const examDate = new Date("2026-06-20");
    const daysLeft = Math.ceil((examDate - new Date()) / (1000 * 60 * 60 * 24));

    const handleNext = () => {
        if (p.stepIdx === 0) setP({ ...p, stepIdx: 1, showVideo: true });
        else if (p.stepIdx === 1) {
            if (!inputVal || inputVal < 10) return alert("En az 10 soru girişi yapmalısın!");
            setP({ ...p, stepIdx: 2, showVideo: false });
        }
        else {
            if (p.sIdx < FULL_DB.length - 1) {
                setP({ ...p, sIdx: p.sIdx + 1, stepIdx: 0 });
                setInputVal("");
            } else {
                alert("TEBRİKLER! TÜM MÜFREDATI BİTİRDİN.");
            }
        }
    };

    return (
        <div style={style.body}>
            {/* Üst Bilgi Paneli */}
            <div style={style.statusBar}>
                <span>TYT 2026: {daysLeft} GÜN</span>
                <span>MOD: {current.c}</span>
                <span>{p.sIdx + 1}/{FULL_DB.length}</span>
            </div>

            {/* Video Penceresi (In-App) */}
            {p.showVideo && (
                <div style={style.videoOverlay}>
                    <div style={style.videoHeader}>
                        <span>Oynatılıyor: {current.n}</span>
                        <button onClick={() => setP({ ...p, showVideo: false })} style={style.closeBtn}>✕ KAPAT</button>
                    </div>
                    <iframe
                        style={style.iframe}
                        src={`https://www.youtube.com/embed?listType=search&list=${current.yt}`}
                        allowFullScreen
                    />
                </div>
            )}

            {/* Ana Ekran */}
            <div style={style.content}>
                <div style={style.progress}>{Math.round((p.sIdx / FULL_DB.length) * 100)}% TAMAMLANDI</div>
                <div style={style.subjectCard}>
                    <span style={style.tag}>{current.s ? "★ YÜKSEK PUAN" : "TEMEL KONU"}</span>
                    <h1 style={style.title}>{current.n}</h1>
                    <p style={style.subtitle}>Sınavdaki tahmini ağırlığı: ~{current.q} Soru</p>
                </div>

                <div style={style.stepNav}>
                    <div style={{ ...style.step, color: p.stepIdx >= 0 ? '#00FF00' : '#444' }}>İZLE</div>
                    <div style={{ ...style.step, color: p.stepIdx >= 1 ? '#00FF00' : '#444' }}>ÇÖZ</div>
                    <div style={{ ...style.step, color: p.stepIdx >= 2 ? '#00FF00' : '#444' }}>BİTİR</div>
                </div>

                <div style={style.actionSection}>
                    {p.stepIdx === 0 && <button onClick={handleNext} style={style.mainBtn}>KONU VİDEOSUNU AÇ</button>}
                    {p.stepIdx === 1 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <p style={{ fontSize: '14px', color: '#888' }}>Hedef: {current.target} Soru</p>
                            <input
                                type="number"
                                placeholder="Kaç soru çözdün?"
                                value={inputVal}
                                onChange={(e) => setInputVal(e.target.value)}
                                style={style.input}
                            />
                            <button onClick={handleNext} style={style.mainBtn}>VERİYİ KAYDET</button>
                        </div>
                    )}
                    {p.stepIdx === 2 && <button onClick={handleNext} style={style.finishBtn}>SIRADAKİ KONUYA ATLA</button>}
                </div>
            </div>
        </div>
    );
}

const style = {
    body: { height: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
    statusBar: { padding: '50px 20px 15px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#666', borderBottom: '1px solid #111' },
    videoOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#000', zIndex: 1000, display: 'flex', flexDirection: 'column' },
    videoHeader: { padding: '50px 20px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' },
    closeBtn: { background: '#222', border: 'none', color: '#fff', padding: '8px 15px', borderRadius: '5px' },
    iframe: { flex: 1, border: 'none' },
    content: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px' },
    progress: { fontSize: '10px', color: '#00FF00', marginBottom: '20px', letterSpacing: '2px' },
    subjectCard: { textAlign: 'center', marginBottom: '40px' },
    tag: { fontSize: '10px', backgroundColor: '#111', padding: '5px 10px', borderRadius: '4px', color: '#00FF00' },
    title: { fontSize: '28px', fontWeight: 'bold', margin: '15px 0' },
    subtitle: { fontSize: '13px', color: '#555' },
    stepNav: { display: 'flex', gap: '30px', marginBottom: '40px', fontWeight: 'bold', fontSize: '12px' },
    actionSection: { width: '100%', maxWidth: '300px' },
    mainBtn: { width: '100%', padding: '20px', backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '15px', fontWeight: 'bold', fontSize: '16px' },
    finishBtn: { width: '100%', padding: '20px', backgroundColor: '#00FF00', color: '#000', border: 'none', borderRadius: '15px', fontWeight: 'bold', fontSize: '16px' },
    input: { width: '100%', padding: '15px', backgroundColor: '#111', border: '1px solid #222', color: '#fff', borderRadius: '10px', textAlign: 'center', fontSize: '18px' }
};
