# TON DUC MINH — Chemistry Portfolio & Editorial Archive
> **Hanoi - Amsterdam High School for the Gifted**  
> *Curated for US College Admissions, Academic Research, and Scientific Leadership*

A modern, high-performance portfolio website presenting the academic honors, chemistry research papers, leadership initiatives, and community service of **Ton Duc Minh** in a prestigious 1-minute editorial magazine format.

---

## 🔬 Key Features

- **Editorial 1-Minute Magazine Reading Experience**: Designed with NYT Magazine / The Atlantic aesthetic, complete with sapo leads, read-time estimates, blockquotes, and high-resolution figure captions.
- **Bilingual Interface**: Full support for both **Tiếng Việt** and **English** with seamless live toggling.
- **Full Portfolio Sections**:
  - 🏛️ **Spotlight / About**: Academic identity, core philosophy, and mission.
  - 🏆 **Honors & Awards**: National & international chemistry olympiads, research awards.
  - 🧪 **Research & Publications**: Macro-photography, heritage dye chemistry, and green nano-materials.
  - 💡 **Products & Inventions**: Applied chemistry projects and educational kits.
  - 👥 **Extracurricular Activities (ECA)**: Science club presidency and STEM symposiums.
  - 🤝 **Community & Volunteer**: Science workshops for underprivileged youth.
  - 💼 **Lab & Internship Experience**: High-level experimental chemistry laboratory training.
- **Interactive 3D Molecule & Interactive Tools**: Interactive 3D molecular structures (Three.js), reaction calculators, and reading metrics.
- **Built-in Post & Image Studio (Modal)**: Dedicated 4-step workflow to compose articles, upload device photos, manage figure notes, and live-preview.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed on your system.

### 1. Clone or Download the Repository
```bash
git clone https://github.com/your-username/ton-duc-minh-portfolio.git
cd ton-duc-minh-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port specified in terminal).

### 4. Build for Production
```bash
npm run build
```
The optimized production build will be generated in the `dist/` directory, ready to be deployed to **Vercel**, **Netlify**, **GitHub Pages**, or **Cloud Run**.

---

## 📁 Project Structure

```text
├── index.html              # Main HTML entry point
├── package.json            # Project dependencies & build scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── public/                 # Static public assets
└── src/
    ├── main.tsx            # React application root mount
    ├── App.tsx             # Main application component & layout
    ├── index.css           # Global Tailwind CSS styles
    ├── types.ts            # TypeScript interfaces & types
    ├── components/
    │   ├── Navbar.tsx              # Top navigation bar
    │   ├── HeroSection.tsx         # Cover hero banner
    │   ├── SectionCard.tsx         # Category post cards
    │   ├── EditorialArticle.tsx    # 1-minute magazine reader
    │   ├── PostManagerModal.tsx    # Post & image creation studio
    │   ├── ChemistryHeroCanvas.tsx # 3D molecular canvas
    │   └── ...
    ├── data/
    │   └── portfolioData.ts        # Seed data for honors, research & projects
    └── utils/
        └── readingTime.ts          # 1-minute read calculation engine
```

---

## 🌐 Deploy to Vercel or GitHub Pages

### Option A: Vercel (Recommended — 1-Click)
1. Push this repository to your GitHub account.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Keep default settings (`Build Command: npm run build`, `Output Directory: dist`).
4. Click **Deploy**.

### Option B: GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"base": "./"` in `vite.config.ts`.
3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.

---

© 2024 - 2026 Ton Duc Minh. All rights reserved.
