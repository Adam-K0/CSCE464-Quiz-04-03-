# Adam Khattak — Portfolio

A single-page portfolio website built with **React** and **Tailwind CSS** (v4) using the **Vite** build tool.

## ✨ Features

- Mobile-first responsive design
- Interactive cards (lift on hover)
- Dark theme with indigo / purple accents
- Sections: Hero, About, Projects, Contact / Footer

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18 (recommend the LTS release)
- **npm** ≥ 9 (bundled with Node)

#### Install Node on macOS (Homebrew)

```bash
brew install node
```

#### Install Node on Linux (Ubuntu / Debian)

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Adam-K0/CSCE464-Quiz-04-03-.git
cd CSCE464-Quiz-04-03-

# 2. Install dependencies
npm install
```

### Development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
The page hot-reloads as you edit source files.

### Production build

```bash
npm run build        # outputs to dist/
npm run preview      # serve the production build locally
```

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css        # Tailwind entry-point
```

---

## 🛠️ Tech Stack

| Tool | Version |
|------|---------|
| React | 19 |
| Tailwind CSS | 4 (Vite plugin) |
| Vite | 8 |
