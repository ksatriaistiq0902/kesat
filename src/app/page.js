"use client";
import { useState, useEffect, useRef } from "react";

// ─── Animated Counter ────────────────────────────────────────────────────────
function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Fade-in on scroll ────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: "⚡",
    title: "Trainer Elektronik",
    desc: "Pembuatan trainer elektronik custom berbasis komponen berkualitas tinggi. Disertai dokumentasi teknis lengkap — siap untuk tugas akhir maupun training korporat.",
    badge: "Hardware",
    color: "#0066cc",
  },
  {
    icon: "💻",
    title: "Trainer Digital",
    desc: "Aplikasi & software trainer berinterface modern dengan simulasi real-world scenarios. Ideal untuk edukasi digital, lab virtual, dan pelatihan industri.",
    badge: "Software",
    color: "#0099dd",
  },
  {
    icon: "📐",
    title: "Desain PCB & Skematik",
    desc: "Desain PCB profesional dan skematik rangkaian yang rapi dan terstandarisasi, siap produksi massal atau prototipe.",
    badge: "Engineering",
    color: "#00bfff",
  },
  {
    icon: "📚",
    title: "Dokumentasi & Manual",
    desc: "Panduan penggunaan, manual teknis, dan laporan ilmiah yang memudahkan pembelajaran, sidang tugas akhir, dan implementasi trainer.",
    badge: "Dokumen",
    color: "#0066cc",
  },
  {
    icon: "🎓",
    title: "Bimbingan Tugas Akhir",
    desc: "Konsultasi intensif dari konsep hingga sidang. Kami membantu mahasiswa teknik mewujudkan proyek akhir yang inovatif dan layak uji.",
    badge: "Akademik",
    color: "#0099dd",
  },
  {
    icon: "🏭",
    title: "Training Korporat",
    desc: "Paket pelatihan teknis untuk karyawan industri. Modul disesuaikan dengan kebutuhan perusahaan, dari PLC hingga IoT dan Industri 4.0.",
    badge: "Korporat",
    color: "#00bfff",
  },
];

const ADVANTAGES = [
  { emoji: "⏰", title: "Tepat Waktu", desc: "Deadline Anda adalah prioritas kami. Kami selalu menyelesaikan proyek sesuai jadwal yang disepakati — tanpa keterlambatan." },
  { emoji: "💰", title: "Harga Terjangkau", desc: "Harga kompetitif tanpa mengorbankan kualitas. Kami percaya produk berkualitas tinggi seharusnya bisa dijangkau semua orang." },
  { emoji: "🏆", title: "Berkualitas", desc: "Setiap produk ditangani oleh tim berpengalaman dengan standar kualitas ketat dan pengujian menyeluruh sebelum diserahkan." },
  { emoji: "💬", title: "Responsif 24/7", desc: "Pertanyaan dan masalah Anda direspons cepat dan profesional. Kami selalu ada untuk Anda kapanpun dibutuhkan." },
  { emoji: "🔬", title: "Berpengalaman", desc: "Ratusan proyek sukses untuk mahasiswa dan perusahaan dari berbagai bidang teknologi selama lebih dari 5 tahun." },
  { emoji: "🛡️", title: "Support Pasca-Proyek", desc: "Layanan tidak berhenti saat proyek selesai. Kami memberikan dukungan teknis berkelanjutan untuk memastikan kepuasan Anda." },
];

const PORTFOLIO = [
  {
    icon: "🤖",
    title: "Robot Line Follower",
    category: "Robotika",
    desc: "Trainer robotika lengkap dengan sensor infrared, mikrokontroler, dan sistem otomasi. Ideal untuk pembelajaran embedded system dan IoT.",
    price: "1,5 – 3 Juta",
    tags: ["Arduino", "Sensor", "Otomasi"],
  },
  {
    icon: "⚙️",
    title: "PLC Training Module",
    category: "Industri 4.0",
    desc: "Modul training PLC dengan simulasi industri nyata. Dilengkapi HMI touchscreen dan komunikasi Modbus untuk training karyawan manufaktur.",
    price: "4 – 8 Juta",
    tags: ["PLC", "HMI", "Modbus"],
  },
  {
    icon: "📡",
    title: "IoT Smart Home Trainer",
    category: "Internet of Things",
    desc: "Platform trainer smart home dengan wireless communication, sensor lingkungan, dan mobile app control berbasis MQTT.",
    price: "3 – 6 Juta",
    tags: ["ESP32", "MQTT", "Mobile App"],
  },
  {
    icon: "🔋",
    title: "Power Electronics Trainer",
    category: "Elektronika Daya",
    desc: "Trainer konverter daya DC-DC, inverter, dan rectifier. Dilengkapi osiloskop digital dan analisis waveform real-time.",
    price: "5 – 10 Juta",
    tags: ["IGBT", "PWM", "Analisis"],
  },
  {
    icon: "🌐",
    title: "Embedded Linux Board",
    category: "Embedded System",
    desc: "Custom embedded Linux board berbasis Raspberry Pi CM untuk prototyping sistem tertanam skala kecil hingga menengah.",
    price: "2 – 5 Juta",
    tags: ["Linux", "Python", "GPIO"],
  },
  {
    icon: "📊",
    title: "SCADA Monitoring System",
    category: "Sistem Kontrol",
    desc: "Sistem monitoring dan kontrol berbasis SCADA dengan dashboard real-time, alarm, dan logging data historis.",
    price: "6 – 15 Juta",
    tags: ["SCADA", "HMI", "Dashboard"],
  },
];

const STATS = [
  { label: "Proyek Selesai", end: 250, suffix: "+" },
  { label: "Klien Puas", end: 180, suffix: "+" },
  { label: "Tahun Pengalaman", end: 5, suffix: "+" },
  { label: "Kota Terjangkau", end: 20, suffix: "+" },
];

const FAQ = [
  {
    q: "Berapa lama waktu pengerjaan trainer?",
    a: "Tergantung kompleksitas proyek. Untuk trainer sederhana biasanya 1–2 minggu, sedangkan proyek kompleks bisa 3–6 minggu. Kami selalu mendiskusikan timeline bersama klien di awal.",
  },
  {
    q: "Apakah bisa request spesifikasi khusus?",
    a: "Tentu! Semua produk kami dibuat custom sesuai kebutuhan Anda. Cukup konsultasikan kebutuhan Anda dan kami akan merancang solusi terbaik.",
  },
  {
    q: "Bagaimana sistem pembayaran?",
    a: "Kami menggunakan sistem DP 50% di awal dan pelunasan 50% setelah proyek selesai. Tersedia berbagai metode pembayaran.",
  },
  {
    q: "Apakah tersedia garansi produk?",
    a: "Ya, kami memberikan garansi perbaikan selama 3 bulan untuk hardware dan support teknis selama 6 bulan untuk software.",
  },
  {
    q: "Apakah melayani pengiriman ke luar Yogyakarta?",
    a: "Ya, kami melayani pengiriman ke seluruh Indonesia dengan packaging aman. Untuk proyek besar, kami juga menyediakan instalasi on-site.",
  },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderRadius: 12,
        overflow: "hidden",
        border: "1.5px solid",
        borderColor: open ? "#0066cc" : "#e2eaf4",
        marginBottom: 12,
        transition: "border-color 0.3s",
        background: "white",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.1rem 1.5rem",
          background: open ? "#f0f7ff" : "white",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#1a2b4a",
          textAlign: "left",
          transition: "background 0.3s",
          gap: 12,
        }}
      >
        <span style={{ flex: 1 }}>{q}</span>
        <span
          style={{
            fontSize: "1.3rem",
            color: "#0066cc",
            transform: open ? "rotate(45deg)" : "rotate(0)",
            transition: "transform 0.3s",
            flexShrink: 0,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 300 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <p
          style={{
            margin: 0,
            padding: "0 1.5rem 1.2rem",
            color: "#4a5568",
            lineHeight: 1.7,
            fontSize: "0.97rem",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [menuOpen, setMenuOpen] = useState(false);
  const categories = ["Semua", "Robotika", "Industri 4.0", "Internet of Things", "Elektronika Daya", "Embedded System", "Sistem Kontrol"];
  const filtered = activeCategory === "Semua" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === activeCategory);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#1a2b4a", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #f8fafd; }
        .nav-link {
          color: #4a5568;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: #0066cc;
          transition: width 0.3s;
        }
        .nav-link:hover { color: #0066cc; }
        .nav-link:hover::after { width: 100%; }
        .service-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          border: 1.5px solid #e2eaf4;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          cursor: default;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #0066cc, #00bfff);
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,102,204,0.13);
          border-color: #0066cc;
        }
        .service-card:hover::before { transform: scaleX(1); }
        .portfolio-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1.5px solid #e2eaf4;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .portfolio-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,102,204,0.13);
        }
        .adv-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
          border: 1.5px solid rgba(255,255,255,0.2);
        }
        .adv-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.15);
        }
        .cat-btn {
          border: 1.5px solid #d1dde8;
          background: white;
          color: #4a5568;
          border-radius: 999px;
          padding: 0.45rem 1.1rem;
          font-size: 0.87rem;
          font-weight: 500;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .cat-btn:hover { border-color: #0066cc; color: #0066cc; }
        .cat-btn.active { background: #0066cc; color: white; border-color: #0066cc; }
        .whatsapp-btn {
          position: fixed;
          bottom: 28px; right: 28px;
          width: 58px; height: 58px;
          background: #25D366;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.6rem;
          box-shadow: 0 6px 24px rgba(37,211,102,0.45);
          z-index: 999;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          animation: pulse 2.5s infinite;
        }
        .whatsapp-btn:hover { transform: scale(1.12); box-shadow: 0 8px 32px rgba(37,211,102,0.6); }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 6px 24px rgba(37,211,102,0.45); }
          50% { box-shadow: 0 6px 32px rgba(37,211,102,0.7); }
        }
        .hero-bg {
          background: linear-gradient(135deg, #003d7a 0%, #0066cc 45%, #0099dd 100%);
          position: relative;
          overflow: hidden;
        }
        .hero-bg::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(0,191,255,0.12) 0%, transparent 50%);
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .stat-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          flex: 1;
          min-width: 130px;
          transition: background 0.3s;
        }
        .stat-card:hover { background: rgba(255,255,255,0.18); }
        .badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.7rem;
          border-radius: 999px;
          background: #e8f0fc;
          color: #0066cc;
          letter-spacing: 0.5px;
          margin-bottom: 0.8rem;
        }
        .section-label {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #0066cc;
          background: #e8f0fc;
          padding: 0.35rem 1rem;
          border-radius: 999px;
          margin-bottom: 1rem;
        }
        .cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: white; color: #0066cc;
          padding: 0.9rem 2rem; border-radius: 10px;
          font-weight: 700; font-size: 1rem; text-decoration: none;
          font-family: inherit;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
        .cta-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: white;
          padding: 0.9rem 2rem; border-radius: 10px;
          font-weight: 600; font-size: 1rem; text-decoration: none;
          border: 2px solid rgba(255,255,255,0.5);
          font-family: inherit;
          transition: background 0.2s, border-color 0.2s;
        }
        .cta-secondary:hover { background: rgba(255,255,255,0.12); border-color: white; }
        .floating-shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .process-step {
          display: flex; align-items: flex-start; gap: 1.2rem;
          background: white; border-radius: 14px; padding: 1.5rem;
          border: 1.5px solid #e2eaf4;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .process-step:hover { border-color: #0066cc; box-shadow: 0 8px 24px rgba(0,102,204,0.1); }
        .step-num {
          width: 44px; height: 44px; flex-shrink: 0;
          border-radius: 12px; background: linear-gradient(135deg, #0066cc, #00bfff);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem; font-weight: 800; color: white;
          font-family: 'Syne', sans-serif;
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.2rem !important; }
          .desktop-nav { display: none !important; }
          .mobile-menu { display: flex !important; }
        }
        .desktop-nav { display: flex; }
        .mobile-menu { display: none; }
      `}</style>

      {/* ── WhatsApp FAB ──────────────────────────────────────────── */}
      <a href="https://wa.me/6282220963693" target="_blank" rel="noreferrer" className="whatsapp-btn" title="Chat WhatsApp">
        💬
      </a>

      {/* ── NAVBAR ───────────────────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e8eef6", boxShadow: "0 2px 20px rgba(0,0,0,0.04)" }}>
        <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", height: 68, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img src="/icon.png" alt="WatuTech Logo" style={{ width: 38, height: 38, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#1a2b4a", letterSpacing: "-0.5px" }}>
              Watu<span style={{ color: "#0066cc" }}>Tech</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="desktop-nav" style={{ gap: "2rem", listStyle: "none", alignItems: "center" }}>
            {["Layanan", "Keunggulan", "Portfolio", "Proses", "FAQ", "Kontak"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
              </li>
            ))}y
          </ul>

          <div className="desktop-nav" style={{ gap: 12, alignItems: "center" }}>
            <a href="https://wa.me/6282220963693" target="_blank" rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 6, background: "#0066cc", color: "white", padding: "0.6rem 1.3rem", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: "0.9rem", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#0052a3"}
              onMouseLeave={e => e.currentTarget.style.background = "#0066cc"}
            >
              💬 Hubungi Kami
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "#1a2b4a", alignItems: "center" }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ background: "white", borderTop: "1px solid #e8eef6", padding: "1rem 2rem 1.5rem" }}>
            {["Layanan", "Keunggulan", "Portfolio", "Proses", "FAQ", "Kontak"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "0.7rem 0", color: "#4a5568", textDecoration: "none", fontWeight: 500, borderBottom: "1px solid #f0f4f8" }}>
                {item}
              </a>
            ))}
            <a href="https://wa.me/6282220963693" target="_blank" rel="noreferrer"
              style={{ display: "block", marginTop: "1rem", background: "#0066cc", color: "white", padding: "0.8rem 1.5rem", borderRadius: 8, textDecoration: "none", fontWeight: 600, textAlign: "center" }}>
              💬 Hubungi Kami
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero-bg" style={{ padding: "6rem 2rem 4rem", color: "white", position: "relative" }}>
        <div className="hero-grid" />
        {/* Floating shapes */}
        <div className="floating-shape" style={{ width: 300, height: 300, top: -60, right: -60, animationDelay: "0s" }} />
        <div className="floating-shape" style={{ width: 200, height: 200, bottom: -40, left: "10%", animationDelay: "2s" }} />
        <div className="floating-shape" style={{ width: 120, height: 120, top: "30%", left: "5%", animationDelay: "4s" }} />

        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 999, padding: "0.4rem 1.1rem", fontSize: "0.87rem", fontWeight: 500, marginBottom: "1.5rem" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s infinite" }} />
            Layanan Aktif — Siap Terima Proyek Baru
          </div>

          <h1 className="hero-title" style={{ fontFamily: "'Syne', sans-serif", fontSize: "3.2rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.2rem", letterSpacing: "-1px" }}>
            Trainer Elektronik &<br />
            <span style={{ color: "#7dd3fc" }}>Digital Berkualitas</span>
          </h1>

          <p style={{ fontSize: "1.15rem", opacity: 0.88, maxWidth: 620, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Solusi terpercaya untuk <strong>tugas akhir mahasiswa teknik</strong> dan <strong>training perusahaan</strong> — dari konsep hingga produk jadi, kami dampingi setiap langkahnya.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3.5rem" }}>
            <a href="#kontak" className="cta-primary">🚀 Konsultasi Gratis</a>
            <a href="#portfolio" className="cta-secondary">📁 Lihat Portfolio</a>
          </div>

          {/* Stats bar */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            {STATS.map((s, i) => (
              <div key={i} className="stat-card">
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}>
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: "0.82rem", opacity: 0.75, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section id="layanan" style={{ padding: "5rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label">Layanan Kami</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.4rem", fontWeight: 800, color: "#1a2b4a", letterSpacing: "-0.5px" }}>
              Apa yang Kami Kerjakan?
            </h2>
            <p style={{ color: "#64748b", fontSize: "1.05rem", marginTop: "0.8rem", maxWidth: 540, margin: "0.8rem auto 0" }}>
              Dari hardware hingga software, kami menyediakan solusi training teknologi lengkap
            </p>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {SERVICES.map((s, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="service-card">
                <div className="badge">{s.badge}</div>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.8rem" }}>{s.icon}</div>
                <h3 style={{ color: "#1a2b4a", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.6rem" }}>{s.title}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: "0.95rem" }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── ADVANTAGES ───────────────────────────────────────────── */}
      <section id="keunggulan" style={{ background: "linear-gradient(135deg, #003d7a 0%, #0066cc 50%, #0099dd 100%)", padding: "5rem 2rem", color: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", borderRadius: 999, padding: "0.35rem 1rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: "1rem" }}>
                Keunggulan
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-0.5px" }}>
                Mengapa Pilih WatuTech?
              </h2>
              <p style={{ opacity: 0.8, fontSize: "1.05rem", marginTop: "0.8rem" }}>
                Kami berkomitmen memberikan pengalaman terbaik di setiap proyek
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {ADVANTAGES.map((a, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="adv-card">
                  <div style={{ fontSize: "2.4rem", marginBottom: "0.8rem" }}>{a.emoji}</div>
                  <h3 style={{ color: "#0066cc", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{a.title}</h3>
                  <p style={{ color: "#4a5568", lineHeight: 1.7, fontSize: "0.95rem" }}>{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ─────────────────────────────────────────────── */}
      <section id="portfolio" style={{ padding: "5rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div className="section-label">Portfolio</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.4rem", fontWeight: 800, color: "#1a2b4a", letterSpacing: "-0.5px" }}>
              Proyek Unggulan Kami
            </h2>
            <p style={{ color: "#64748b", fontSize: "1.05rem", marginTop: "0.8rem" }}>
              Berbagai project yang telah berhasil kami kerjakan
            </p>
          </div>

          {/* Category Filter */}
          <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {categories.map((cat) => (
              <button key={cat} className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}>
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {filtered.map((p, i) => (
            <FadeIn key={p.title} delay={i * 80}>
              <div className="portfolio-card">
                <div style={{
                  height: 180, background: "linear-gradient(135deg, #003d7a 0%, #0099dd 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "3.5rem", position: "relative", overflow: "hidden"
                }}>
                  <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 999, padding: "0.25rem 0.75rem", fontSize: "0.75rem", fontWeight: 600, color: "white" }}>
                    {p.category}
                  </div>
                  {p.icon}
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ color: "#1a2b4a", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.93rem", lineHeight: 1.7, marginBottom: "1rem" }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: "1rem" }}>
                    {p.tags.map((tag) => (
                      <span key={tag} style={{ background: "#f0f7ff", color: "#0066cc", borderRadius: 6, padding: "0.2rem 0.6rem", fontSize: "0.78rem", fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ background: "linear-gradient(90deg, #0066cc, #00bfff)", color: "white", padding: "0.35rem 1rem", borderRadius: 999, fontSize: "0.87rem", fontWeight: 600 }}>
                      Rp {p.price}
                    </span>
                    <a href="#kontak" style={{ color: "#0066cc", fontWeight: 600, fontSize: "0.87rem", textDecoration: "none" }}>
                      Pesan →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────── */}
      <section id="proses" style={{ padding: "5rem 2rem", background: "#f0f7ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-label">Cara Kerja</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.4rem", fontWeight: 800, color: "#1a2b4a", letterSpacing: "-0.5px" }}>
                Proses yang Mudah & Transparan
              </h2>
              <p style={{ color: "#64748b", fontSize: "1.05rem", marginTop: "0.8rem" }}>
                Dari konsultasi hingga produk jadi hanya dalam beberapa langkah
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "1rem" }}>
            {[
              { n: "01", icon: "💬", title: "Konsultasi Gratis", desc: "Ceritakan kebutuhan proyek Anda. Kami analisis dan berikan rekomendasi solusi terbaik tanpa biaya." },
              { n: "02", icon: "📋", title: "Penawaran & Kesepakatan", desc: "Kami kirimkan detail penawaran — spesifikasi, harga, dan timeline. Negosiasi hingga semua sepakat." },
              { n: "03", icon: "🔧", title: "Desain & Pengembangan", desc: "Tim kami mulai merancang dan mengembangkan produk dengan update progres berkala kepada Anda." },
              { n: "04", icon: "🧪", title: "Pengujian & QC", desc: "Produk diuji secara menyeluruh sesuai standar sebelum diserahkan. Tidak ada kompromi soal kualitas." },
              { n: "05", icon: "📦", title: "Pengiriman & Instalasi", desc: "Produk dikemas aman dan dikirim. Kami siap lakukan instalasi on-site jika diperlukan." },
              { n: "06", icon: "🛡️", title: "Support & Garansi", desc: "Dukungan teknis dan garansi aktif pasca-pengiriman. Kami pastikan Anda puas sampai akhir." },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="process-step">
                  <div className="step-num">{step.n}</div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{ fontSize: "1.2rem" }}>{step.icon}</span>
                      <h3 style={{ color: "#1a2b4a", fontWeight: 700, fontSize: "1rem" }}>{step.title}</h3>
                    </div>
                    <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "5rem 2rem", maxWidth: 800, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label">FAQ</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.4rem", fontWeight: 800, color: "#1a2b4a", letterSpacing: "-0.5px" }}>
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
        </FadeIn>
        {FAQ.map((item, i) => (
          <FadeIn key={i} delay={i * 60}>
            <FAQItem q={item.q} a={item.a} idx={i} />
          </FadeIn>
        ))}
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────── */}
      <section id="kontak" style={{ background: "linear-gradient(135deg, #003d7a 0%, #0066cc 50%, #0099dd 100%)", padding: "5rem 2rem", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", borderRadius: 999, padding: "0.35rem 1rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: "1rem" }}>
                Kontak
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-0.5px" }}>
                Siap Mulai Proyek Anda?
              </h2>
              <p style={{ opacity: 0.85, fontSize: "1.05rem", marginTop: "0.8rem", maxWidth: 500, margin: "0.8rem auto 0" }}>
                Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhan Anda dan kami siap membantu!
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.2rem", marginBottom: "2.5rem" }}>
            {[
              { icon: "📞", label: "WhatsApp / Telepon", value: "+62 822-2096-3693", href: "https://wa.me/6282220963693" },
              { icon: "📧", label: "Email", value: "watutech.id@gmail.com", href: "mailto:watutech.id@gmail.com" },
              { icon: "📍", label: "Lokasi", value: "Condongcatur, Sleman, DIY", href: "https://maps.google.com" },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 80}>
                <a href={c.href} target="_blank" rel="noreferrer"
                  style={{ display: "block", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 16, padding: "1.5rem", textDecoration: "none", color: "white", transition: "background 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.18)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                >
                  <div style={{ fontSize: "2rem", marginBottom: 8 }}>{c.icon}</div>
                  <div style={{ fontSize: "0.82rem", opacity: 0.7, marginBottom: 4, fontWeight: 500 }}>{c.label}</div>
                  <div style={{ fontWeight: 700, fontSize: "0.98rem" }}>{c.value}</div>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div style={{ textAlign: "center" }}>
              <a href="https://wa.me/6282220963693?text=Halo%20WatuTech,%20saya%20ingin%20konsultasi%20proyek" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25D366", color: "white", padding: "1rem 2.5rem", borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: "1.05rem", boxShadow: "0 8px 24px rgba(37,211,102,0.4)", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(37,211,102,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,211,102,0.4)"; }}
              >
                💬 Chat WhatsApp Sekarang
              </a>
              <p style={{ opacity: 0.7, fontSize: "0.87rem", marginTop: "1rem" }}>
                Kami merespons dalam &lt;1 jam di jam kerja (08.00 – 21.00 WIB)
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer style={{ background: "#0d1b2e", color: "#94a3b8", padding: "2.5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: "1rem" }}>
            <img src="/icon.png" alt="WatuTech Logo" style={{ width: 32, height: 32, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "white" }}>
              Watu<span style={{ color: "#0099dd" }}>Tech</span>
            </span>
          </div>
          <p style={{ fontSize: "0.9rem", marginBottom: 6 }}>Trainer Elektronik & Digital untuk Akademik & Korporat</p>
          <p style={{ fontSize: "0.85rem", opacity: 0.6 }}>&copy; 2025 WatuTech – Innovation and Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}