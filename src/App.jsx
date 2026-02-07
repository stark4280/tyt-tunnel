import React, { useState, useEffect } from 'react';

// TÜM TYT KONULARI VE KRİTİK ANALİZLER (Yıldızlılar en yüksek soru potansiyellilerdir)
const TYT_DATABASE = [
    { c: "TÜRKÇE", n: "Paragrafta Anlam", q: 26, s: true },
    { c: "TÜRKÇE", n: "Yazım Kuralları", q: 2, s: true },
    { c: "TÜRKÇE", n: "Noktalama İşaretleri", q: 2, s: true },
    { c: "TÜRKÇE", n: "Sözcükte ve Cümlede Anlam", q: 7, s: false },
    { c: "MATEMATİK", n: "Temel Kavramlar", q: 4, s: false },
    { c: "MATEMATİK", n: "Sayı Basamakları / Bölünebilme", q: 3, s: false },
    { c: "MATEMATİK", n: "Rasyonel Sayılar", q: 2, s: false },
    { c: "MATEMATİK", n: "Problemler (Sayı-Kesir-Yaş-Hız)", q: 12, s: true },
    { c: "MATEMATİK", n: "Üçgenler", q: 6, s: true },
    { c: "MATEMATİK", n: "Fonksiyonlar", q: 2, s: false },
    { c: "MATEMATİK", n: "Veri ve İstatistik", q: 1, s: false },
    { c: "COĞRAFYA", n: "Harita Bilgisi", q: 1, s: true },
    { c: "COĞRAFYA", n: "İklim Bilgisi", q: 1, s: true },
    { c: "COĞRAFYA", n: "Nüfus ve Yerleşme", q: 1, s: false },
    { c: "TARİH", n: "Milli Mücadele Dönemi", q: 2, s: true },
    { c: "TARİH", n: "Osmanlı Devleti Kuruluş/Yükseliş", q: 1, s: false },
    { c: "FELSEFE", n: "Bilgi ve Ahlak Felsefesi", q: 2, s: false },
    { c: "FİZİK", n: "Optik", q: 2, s: true },
    { c: "FİZİK", n: "Isı, Sıcaklık ve Genleşme", q: 1, s: false },
    { c: "FİZİK", n: "Elektrik ve Manyetizma", q: 1, s: false },
    { c: "KİMYA", n: "Kimyasal Türler Arası Etkileşimler", q: 1, s: true },
    { c: "KİMYA", n: "Maddenin Halleri", q: 1, s: false },
    { c: "KİMYA", n: "Asitler, Bazlar ve Tuzlar", q: 1, s: false },
    { c: "BİYOLOJİ", n: "Kalıtım", q: 1, s: true },
    { c: "BİYOLOJİ", n: "Hücre Bölünmeleri", q: 1, s: true },
    { c: "BİYOLOJİ", n: "Canlıların Temel Bileşenleri", q: 1, s: false }
];

const STEPS = [
    { id: 0, label: "ADIM 1: VİDEO İZLE", action: "video" },
    { id: 1, label: "ADIM 2: SORU ÇÖZ", action: "coz" },
    { id: 2, label: "ADIM 3: KONUYU KAPAT", action: "bitir" }
];

export default function App() {
    const [p, setP] = useState(() => {
        const saved = localStorage.getItem('tyt_v01_tunnel');
        return saved ? JSON.parse(saved) : { sIdx: 0, stepIdx: 0, completed: false };
    });

    useEffect(() => {
        localStorage.setItem('tyt_v01_tunnel', JSON.stringify(p));
    }, [p]);

    const current = TYT_DATABASE[p.sIdx];
    const step = STEPS[p.stepIdx];

    const handleNext = () => {
        if (p.stepIdx < 2) {
            if (p.stepIdx === 0) {
                const query = encodeURIComponent(`TYT ${current.c} ${current.n} konu anlatımı`);
                window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
            }
            setP({ ...p, stepIdx: p.stepIdx + 1 });
        } else {
            if (p.sIdx < TYT_DATABASE.length - 1) {
                setP({ sIdx: p.sIdx + 1, stepIdx: 0, completed: false });
            } else {
                setP({ ...p, completed: true });
            }
        }
    };

    if (p.completed) {
        return (
            <div style={styles.base}>
                <h1 style={styles.finishText}>TÜM MÜFREDAT BİTTİ. BAŞARILAR.</h1>
                <button onClick={() => { localStorage.clear(); window.location.reload(); }} style={styles.resetBtn}>SIFIRLA</button>
            </div>
        );
    }

    return (
        <div style={styles.base}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <span style={styles.courseTag}>{current.c}</span>
                    {current.s && <span style={styles.starTag}>★ KRİTİK KONU</span>}
                </div>

                <h1 style={styles.subjectTitle}>{current.n.toUpperCase()}</h1>
                <p style={styles.info}>Bu konudan beklenen soru: ~{current.q}</p>

                <div style={styles.stepIndicator}>
                    {STEPS.map((_, i) => (
                        <div key={i} style={{ ...styles.dot, backgroundColor: i <= p.stepIdx ? '#00FF00' : '#222' }} />
                    ))}
                </div>

                <div style={styles.actionArea}>
                    <h2 style={styles.stepLabel}>{step.label}</h2>
                    <button onClick={handleNext} style={styles.mainBtn}>
                        {p.stepIdx === 0 ? "VİDEOYU AÇ VE İLERLE" : "TAMAMLADIM"}
                    </button>
                </div>

                <div style={styles.progressText}>
                    TOPLAM İLERLEME: %{Math.round((p.sIdx / TYT_DATABASE.length) * 100)}
                </div>
            </div>
        </div>
    );
}

const styles = {
    base: {
        minHeight: '100vh', backgroundColor: '#050505', color: '#FFFFFF',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        fontFamily: '"Courier New", Courier, monospace', padding: '20px'
    },
    container: {
        width: '100%', maxWidth: '800px', border: '1px solid #1a1a1a',
        padding: '40px', textAlign: 'center', borderRadius: '4px',
        backgroundColor: '#0a0a0a', boxShadow: '0 0 20px rgba(0,0,0,0.5)'
    },
    header: { display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px' },
    courseTag: { fontSize: '14px', color: '#888', border: '1px solid #333', padding: '4px 12px' },
    starTag: { fontSize: '14px', color: '#00FF00', fontWeight: 'bold', padding: '4px 0' },
    subjectTitle: { fontSize: 'clamp(28px, 5vw, 42px)', margin: '20px 0', letterSpacing: '2px', lineHeight: '1.2' },
    info: { fontSize: '16px', color: '#555', marginBottom: '40px' },
    stepIndicator: { display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '50px' },
    dot: { width: '30%', height: '6px', transition: '0.3s' },
    stepLabel: { fontSize: '24px', color: '#00FF00', marginBottom: '30px' },
    mainBtn: {
        width: '100%', maxWidth: '400px', padding: '20px', fontSize: '18px', fontWeight: 'bold',
        backgroundColor: '#FFFFFF', color: '#000000', border: 'none', cursor: 'pointer',
        transition: 'transform 0.1s', borderRadius: '2px'
    },
    progressText: { marginTop: '40px', fontSize: '14px', color: '#333' },
    finishText: { color: '#00FF00', fontSize: '32px' },
    resetBtn: { marginTop: '30px', background: 'none', border: '1px solid #333', color: '#888', cursor: 'pointer', padding: '10px 20px' }
};
