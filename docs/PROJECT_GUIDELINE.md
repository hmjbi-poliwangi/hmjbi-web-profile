# 📘 PROJECT GUIDELINE

## HMJBI — Web Profile

---

## 1. Project Overview

**Project Name:** HMJBI Web Profile

**Purpose:**
To build an official HMJBI website that serves as an information hub, organizational branding platform, and activity publication media.

**Target Users:**

* Students within the department
* Lecturers
* Prospective students
* General public

---

## 2. Project Scope

### ✅ Included

* Organization landing page
* Profile & vision mission section
* Management structure display
* Divisions & work programs
* Activities & documentation gallery
* Contact information & social media links

### ❌ Not Included

* Complex authentication systems
* Financial management systems
* Internal member management systems
* Advanced backend systems

---

## 3. Tech Stack

### Core Technologies

* Next.js
* TypeScript
* Tailwind CSS

### Tools & Development Quality

* GitHub
* Figma
* ESLint
* Prettier
* Husky
* Commitlint

### Supporting Libraries

* Zod (data validation)
* Lucide React (icons)

---

## 4. Main Project Structure

```
app/            → pages & routing
components/     → reusable UI components
public/         → assets (images, logos)
docs/           → project documentation
lib/            → utilities
types/          → TypeScript types
```

---

## 5. Coding Standards

* Use **TypeScript** for type safety
* Use **Tailwind CSS** for styling
* Prioritize reusable components
* Use **PascalCase** for component filenames
* Keep code clean, readable, and maintainable

---

## 6. Git Workflow

### Branch Strategy

* `main` → production branch
* `develop` → development branch
* `feature/*` → new features
* `fix/*` → bug fixes

---

### Commit Message Format

```bash
feat: add new feature  
fix: resolve bug issue  
docs: update documentation  
style: improve UI styling  
chore: add or update dependencies
```

---

## 7. Team Workflow

1. UI/UX design is created in Figma
2. Tasks are created using GitHub Issues
3. Developers work on feature branches
4. Pull Request is submitted for review
5. Code is reviewed and merged into develop → main

---

## 8. Expected Outcome

* Fully responsive website
* Clean and well-structured codebase
* Consistent UI based on design system
* Easy to maintain and extend by future teams

---

END OF DOCUMENT
