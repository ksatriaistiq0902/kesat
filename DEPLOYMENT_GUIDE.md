# Panduan Deployment WatuTech ke Vercel

## 📋 Prasyarat
- Akun GitHub (untuk menyimpan repository)
- Akun Vercel (gratis di https://vercel.com)
- Node.js 18+ (untuk testing lokal)

## 🚀 Langkah-langkah Deployment

### 1. Persiapan Repository GitHub

```bash
# Inisialisasi git jika belum ada
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit: WatuTech landing page with SEO optimization"

# Tambahkan remote repository (ganti YOUR_USERNAME dan YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

### 2. Deploy ke Vercel

#### Opsi A: Via Dashboard Vercel (Paling Mudah)
1. Buka https://vercel.com
2. Login dengan GitHub account
3. Klik "Add New" → "Project"
4. Pilih repository yang sudah dibuat
5. Vercel akan auto-detect Next.js
6. Klik "Deploy"

#### Opsi B: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy project
vercel

# Untuk production
vercel --prod
```

### 3. Custom Domain

1. Di dashboard Vercel, buka project
2. Go to "Settings" → "Domains"
3. Tambahkan domain (misal: watutech.com)
4. Update DNS records sesuai instruksi Vercel
5. Tunggu propagasi DNS (biasanya 24-48 jam)

### 4. Environment Variables (Jika Diperlukan)

1. Di dashboard Vercel → Settings → Environment Variables
2. Tambahkan variabel sesuai kebutuhan:
   ```
   NEXT_PUBLIC_APP_URL = https://watutech.com
   ```

### 5. Verifikasi SEO & Performance

#### Google Search Console
1. Buka https://search.google.com/search-console
2. Tambahkan property domain
3. Verify ownership
4. Submit sitemap.xml

#### Google Analytics (Opsional)
1. Setup di https://analytics.google.com
2. Tambahkan tracking ID
3. Update `.env.example` dengan ID

#### Page Speed Insights
1. Cek di https://pagespeed.web.dev
2. Berikan URL Vercel Anda
3. Monitor Core Web Vitals

## ✅ Checklist Setelah Deploy

- [ ] Site accessible di domain
- [ ] HTTPS enabled (otomatis)
- [ ] sitemap.xml accessible (/sitemap.xml)
- [ ] robots.txt accessible (/robots.txt)
- [ ] Google Search Console verified
- [ ] Structured data validation passed
- [ ] Mobile-friendly tested
- [ ] Performance score > 90

## 🔄 Continuous Deployment

Vercel otomatis akan:
- Build saat ada push ke main
- Deploy preview untuk pull requests
- Deploy production untuk merge

## 📞 Support & Troubleshooting

### Build Error?
```bash
# Rebuild locally
npm run build

# Check logs di Vercel dashboard
```

### Domain DNS Issues?
- Tunggu 24-48 jam
- Verify di https://dnschecker.org

### SEO tidak terindex?
- Submit sitemap di Google Search Console
- Tunggu ~7 hari untuk indexing

## 📊 Monitor Performance

Dashboard Vercel menampilkan:
- Build time
- Page responses
- Edge requests
- Function executions

## Troubleshooting Umum

| Masalah | Solusi |
|---------|--------|
| "Deployment failed" | Cek build logs, pastikan npm install berhasil |
| "Domain not working" | Verifikasi DNS records, tunggu propagasi |
| "Sitemap not found" | Pastikan file sitemap.js di app/ folder |
| "404 on routes" | Check next.config.mjs redirects config |

---
Selamat, website Anda sudah live! 🎉
