# Adithya Ashok Menashinakai — Professional Portfolio Website

A recruiter-focused, minimalist, production-ready personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for high-density readability by technical recruiters, hiring managers, and senior software engineers.

---

## 🚀 Key Features & Highlights

- **Single Source of Truth**: All information (skills, experience, education, projects, contact details) strictly reflects Adithya Ashok Menashinakai's verified resume.
- **GitHub Pages Ready**: Native zero-config relative path routing (`base: './'`) for effortless deployment to GitHub Pages or any static CDN.
- **Interactive Resume Preview & Instant Download**: Inline PDF modal preview powered by browser-native rendering alongside direct PDF download buttons.
- **Verified Skill Matrix**: Clear categorization of Python, SQL, Oracle, MySQL, PostgreSQL, Pandas, NumPy, Power BI, Tableau, and enterprise database tools.
- **Accessibility & Performance**: Built to WCAG 2.1 AA guidelines with keyboard navigation, focus-visible outlines, skip-to-content link, ARIA landmarks, and 60fps lightweight animations.
- **SEO & Social Optimization**: Built-in OpenGraph cards, Twitter cards, meta descriptions, SVG favicon, `robots.txt`, `sitemap.xml`, and JSON-LD `Person` structured data for search engines.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment & Tooling**: Static Export (`dist`), `gh-pages` deployment script, GitHub Actions CI/CD workflow.

---

## 💻 Local Development Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ or v20+
- [npm](https://www.npmjs.com/) v9+ or v10+

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/adithyam1432/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Preview production build locally**:
   ```bash
   npm run build
   npm run preview
   ```

---

## 📦 Production Build Instructions

To build a minified, production-ready static bundle:

```bash
npm run build
```

This creates an optimized `dist/` directory containing:
- `index.html` (with bundled CSS/JS references)
- `assets/` (minified scripts, styles, profile photo, and resume PDF)
- `favicon.svg`, `robots.txt`, and `sitemap.xml`

---

## 🌐 Deployment Instructions

### 1. GitHub Pages Deployment (Recommended)

#### Option A: Automated via GitHub Actions (Included)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Deploy portfolio website"
   git push origin main
   ```
2. On GitHub, navigate to **Settings > Pages**.
3. Under **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site to `https://<username>.github.io/<repo>/`.

#### Option B: Automated via `gh-pages` script
Run the following command locally:
```bash
npm run deploy
```
*(This builds the project and pushes the `dist/` folder directly to your `gh-pages` branch).*

### 2. Vercel Deployment
1. Import your GitHub repository into [Vercel](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

### 3. Netlify Deployment
1. Connect your repository to [Netlify](https://netlify.com).
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Click **Deploy Site**.

### 4. Cloudflare Pages Deployment
1. In Cloudflare Dashboard, go to **Workers & Pages > Create Application**.
2. Select **Pages** and connect your git repository.
3. Build Command: `npm run build`
4. Output Directory: `dist`

---

## 📝 Customization Guide

### How to Replace Profile Photo
1. Place your new image file in `public/assets/profile.jpg`.
2. Recommended dimensions: **800x1000px** (4:5 aspect ratio), JPG format.
3. If changing the filename, update `profilePhoto` in `src/data/portfolioData.js`:
   ```javascript
   profilePhoto: "./assets/your_new_photo.jpg"
   ```

### How to Replace Resume PDF
1. Place your updated resume PDF in `public/assets/Adithya_Menashinakai_Resume.pdf`.
2. Ensure the filename matches `Adithya_Menashinakai_Resume.pdf` or update `resumePdf` in `src/data/portfolioData.js`:
   ```javascript
   resumePdf: "./assets/your_updated_resume.pdf"
   ```

### How to Update Projects
Open `src/data/portfolioData.js` and modify the `projects` array:
```javascript
{
  id: "project-id",
  title: "Project Title",
  subtitle: "Short Subtitle",
  category: "Analytics / Development",
  tech: ["Python", "SQL", "React"],
  description: "Detailed description...",
  problem: "Problem statement...",
  contribution: "Your specific contribution...",
  liveUrl: "https://your-live-demo.com", // Set to null if unavailable
  githubUrl: "https://github.com/username/repo",
  featured: true,
  metrics: "Key impact metric..."
}
```

### How to Update Contact & Social Links
Open `src/data/portfolioData.js` and update the `personal` object:
```javascript
personal: {
  email: "adithyam.mca@gmail.com",
  phone: "+91-9731572531",
  linkedIn: "https://linkedin.com/in/adithya-menashinakai-2656b7302/",
  github: "https://github.com/adithyam1432",
  location: "Dharwad, Karnataka - 580007"
}
```

---

## 🔍 Quality Assurance Audit

Reviewed against three key perspectives:
1. **Senior UI/UX Designer**: Editorial whitespace, restrained color palette (`#FAF9F6`, `#0F172A`, `#0F766E`), clear visual hierarchy, and 0 flashy distracting elements.
2. **Technical Recruiter**: First 5-second clarity of name, role, location, MCA status, verified skills, quick resume download/preview, and one-click contact shortcuts.
3. **Senior Frontend Architect**: Zero console errors, clean static bundle size, semantic HTML5, WCAG 2.1 AA keyboard support, and relative path zero-config static hosting.

---

## 📜 License

Created for **Adithya Ashok Menashinakai**. Free to customize and distribute.
