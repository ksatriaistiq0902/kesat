import Image from "next/image";

export default function Home() {
  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', lineHeight: '1.6', color: '#333' }}>
      {/* Header */}
      {/* Only header changed: use white background and rectangular logo (logo.png). Nav links and CTA adjusted for contrast. */}
      <header style={{ background: 'white', color: '#333', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <nav style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', fontWeight: '600', textDecoration: 'none', color: '#333', letterSpacing: '0.5px' }}>
            {/* Rectangular logo includes text; path: /logo.png */}
            <Image src="/logo.png" alt="WatuTech logo" width={140} height={40} style={{ flexShrink: 0 }} />
          </a>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            <li><a href="#layanan" style={{ color: '#0066cc', textDecoration: 'none', cursor: 'pointer' }}>Layanan</a></li>
            <li><a href="#keunggulan" style={{ color: '#0066cc', textDecoration: 'none', cursor: 'pointer' }}>Keunggulan</a></li>
            <li><a href="#portfolio" style={{ color: '#0066cc', textDecoration: 'none', cursor: 'pointer' }}>Portfolio</a></li>
            <li><a href="#kontak" style={{ color: '#0066cc', textDecoration: 'none', cursor: 'pointer' }}>Kontak</a></li>
          </ul>
          <a href="#kontak" style={{ background: '#0066cc', color: 'white', padding: '0.7rem 1.5rem', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}>Hubungi Kami</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0066cc 0%, #00a8e8 100%)', color: 'white', padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>Trainer Elektronik & Digital Berkualitas</h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem', opacity: '0.95' }}>Solusi terpercaya untuk tugas akhir kuliah dan kebutuhan training perusahaan Anda</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#kontak" style={{ padding: '1rem 2rem', borderRadius: '5px', fontSize: '1rem', fontWeight: 'bold', textDecoration: 'none', background: 'white', color: '#0066cc', cursor: 'pointer' }}>Mulai Sekarang</a>
            <a href="#portfolio" style={{ padding: '1rem 2rem', borderRadius: '5px', fontSize: '1rem', fontWeight: 'bold', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', cursor: 'pointer' }}>Lihat Portfolio</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#0066cc' }}>Layanan Kami</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid #00a8e8' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
            <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>Trainer Elektronik</h3>
            <p>Pembuatan trainer elektronik custom sesuai kebutuhan dengan komponen berkualitas dan dokumentasi lengkap untuk keperluan tugas akhir atau training korporat.</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid #00a8e8' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💻</div>
            <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>Trainer Digital</h3>
            <p>Aplikasi dan software trainer dengan interface yang user-friendly, cocok untuk edukasi digital dan simulasi real-world scenarios di industri.</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid #00a8e8' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📚</div>
            <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>Dokumentasi & Manual</h3>
            <p>Dokumentasi lengkap, panduan penggunaan, dan manual teknis yang memudahkan pembelajaran dan implementasi trainer Anda.</p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="keunggulan" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', background: 'linear-gradient(135deg, #f0f7ff 0%, #e0f4ff 100%)' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#0066cc' }}>Keunggulan WatuTech</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'Tepat Waktu', desc: 'Kami selalu mengupayakan pengerjaan tidak pernah melewati deadline yang diberikan klien.' },
            { title: 'Harga Terjangkau', desc: 'Tidak perlu mengkhawatirkan tentang harga, karena kami memastikan biaya Anda cukup terjangkau dan kompetitif.' },
            { title: 'Berkualitas', desc: 'Produk kami dijamin berkualitas karena ditangani oleh tim yang berpengalaman di bidang elektronik dan digital.' },
            { title: 'Responsif', desc: 'Tim kami siap membantu dan merespons setiap pertanyaan atau masalah dengan cepat dan profesional.' },
            { title: 'Berpengalaman', desc: 'Kami telah mengerjakan berbagai project untuk mahasiswa dan perusahaan dengan hasil yang memuaskan.' },
            { title: 'Support Berkelanjutan', desc: 'Kami memberikan dukungan teknis dan konsultasi setelah project selesai untuk memastikan kepuasan Anda.' }
          ].map((item, idx) => (
            <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <strong style={{ color: '#0066cc', display: 'block', marginTop: '1rem', fontSize: '1.1rem' }}>{item.title}</strong>
              <p style={{ marginTop: '0.5rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#0066cc' }}>Portfolio Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            { icon: '🤖', title: 'Robot Line Follower', desc: 'Trainer robotika dengan sensor dan sistem otomatis. Cocok untuk pembelajaran embedded system dan aplikasi IoT.', price: '1.5 - 3 Juta' },
            { icon: '⚙️', title: 'PLC Training Module', desc: 'Modul training PLC dengan simulasi industri 4.0. Sempurna untuk training karyawan di sektor manufaktur.', price: '4 - 8 Juta' },
            { icon: '📡', title: 'IoT Smart Home Trainer', desc: 'Platform trainer untuk smart home dengan wireless communication dan mobile app control interface.', price: '3 - 6 Juta' }
          ].map((item, idx) => (
            <div key={idx} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '100%', height: '200px', background: 'linear-gradient(135deg, #0066cc 0%, #00a8e8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '3rem' }}>{item.icon}</div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#0066cc', marginTop: '0', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p>{item.desc}</p>
                <span style={{ display: 'inline-block', background: '#00a8e8', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.9rem', marginTop: '1rem' }}>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" style={{ background: 'linear-gradient(135deg, #0066cc 0%, #00a8e8 100%)', color: 'white', textAlign: 'center', padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: 'white', textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Hubungi Kami</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Siap membantu mewujudkan project trainer Anda. Konsultasi gratis untuk mengetahui solusi terbaik!</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px' }}>
            <strong style={{ display: 'block', marginTop: '0.5rem' }}>📞 WhatsApp/Telepon</strong>
            <p style={{ marginTop: '0.5rem' }}>+62 822-2096-3693</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px' }}>
            <strong style={{ display: 'block', marginTop: '0.5rem' }}>📧 Email</strong>
            <p style={{ marginTop: '0.5rem' }}>watutech.id@gmail.com</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px' }}>
            <strong style={{ display: 'block', marginTop: '0.5rem' }}>📍 Lokasi</strong>
            <p style={{ marginTop: '0.5rem' }}>Jl. Sawojajar No.2, Dabag, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283<br/>Indonesia</p>
          </div>
        </div>

        <a href="#" style={{ background: 'white', color: '#0066cc', padding: '1rem 2rem', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginTop: '2rem', cursor: 'pointer' }}>Konsultasi Gratis Sekarang</a>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a1a1a', color: 'white', textAlign: 'center', padding: '2rem' }}>
        <p style={{ margin: '0.5rem 0' }}>&copy; 2025 WatuTech - Innovation and Solutions. All rights reserved.</p>
        <p style={{ margin: '0.5rem 0' }}>Trainer Elektronik & Digital untuk Akademik & Korporat</p>
      </footer>
    </div>
  );
}
