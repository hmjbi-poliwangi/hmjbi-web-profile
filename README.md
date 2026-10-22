# HMJBI Web Profile

<p align="center">
  🌐 Official Website of HMJBI Organization  
</p>

<p align="center">
  <a href="README.md"><b>🇬🇧 English</b></a> |
  <a href="README.id.md"><b>🇮🇩 Bahasa Indonesia</b></a>
</p>

---

## 📌 About The Project

HMJBI Web Profile is the official website of the HMJBI organization.
It serves as an information hub, branding platform, and publication media for organizational activities.

This project is built to be modern, responsive, and easy to maintain by future HMJBI members.

---

## ✨ Features

- Organization landing page
- Profile & vision mission section
- Management structure display
- Divisions & work programs
- Activities & documentation gallery
- Event information
- Contact & social media integration
- Fully responsive design

---

## 🛠️ Tech Stack

### Core

- Next.js
- TypeScript
- Tailwind CSS

### Tools & Quality

- GitHub
- Figma
- ESLint
- Prettier
- Husky
- Commitlint

### Libraries

- Zod (validation)
- Lucide React (icons)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/hmjbi-poliwangi/hmjbi-web-profile.git
cd hmjbi-web-profile
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Copy the example file:

```bash
cp .env.example .env
```

Or create a `.env` file manually.

---

### 4. Run Development Server

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:3000
```

---

## 🔐 Admin & JSON Storage

The admin page is available at `/admin/login`.

- Username: `admin`
- Password: `admin123`
- The editor updates `data/division.json`, `data/events.json`, `data/divisions-list.json`, and `data/proker.json` directly on the server; no database is used.
- Production requires a Next.js/Node.js server and a writable persistent filesystem. Static-only hosting/export cannot run the API or persist edits.
- The GitHub Actions workflow uploads the standalone package to cPanel over FTP. Configure a cPanel Node.js application with its app root set to the uploaded folder, Node.js 20+, and startup file `server.js`; restart the application after deployment. Keep the `data` directory persistent. The workflow excludes active JSON files from sync so admin edits are not overwritten by later deployments.
- Set `ADMIN_SESSION_SECRET` to a strong random secret in the production environment. `HMJBI_DATA_DIR` can point to a persistent directory outside the release folder; if that directory is empty, initial data is copied from `data-seed`.
- If saving data returns "Origin is not allowed" behind a reverse proxy, set `HMJBI_PUBLIC_ORIGIN` in the cPanel app environment to the exact public URL used to access the site, such as `https://subdomain.example.id`, then restart the app.
- The hardcoded credentials are demo credentials as requested and are not safe for a public production deployment. Replace the login mechanism before exposing the dashboard publicly.

---

## 📂 Project Structure

```bash
app/            → pages & routing
components/     → reusable UI components
public/         → assets (images, logos)
docs/           → documentation files
lib/            → utilities
types/          → TypeScript types
```

---

## 📚 Documentation

Detailed documentation is available here:

- 📘 **Project Guideline** → [View Document](docs/PROJECT_GUIDELINE.md)
- 🤝 **Contributing Guide** → [View Document](docs/CONTRIBUTING.md)

---

## 🌿 Git Workflow

### Branching Strategy

```bash
main      → production
develop   → development
feature/* → new features
fix/*     → bug fixes
```

---

### Commit Message Format

```bash
feat: add new feature
fix: fix bug issue
docs: update documentation
style: improve UI styling
chore: add or update dependencies
```

---

## 🤝 Contributing

Contributions are welcome!

Please read the contributing guide before submitting changes:

👉 `docs/CONTRIBUTING.md`

---

## 🎯 Project Goals

- Clean and modern UI
- Fully responsive layout
- Maintainable code structure
- Easy for future teams to continue development

---

## 📄 License

This project is for educational and organizational purposes.

---

## 👥 Maintained By

HMJBI Development Team

---

END OF FILE
