# Sonny Tapara – Personal Portfolio Website

A modern, responsive portfolio site built with **React** and **Vite**. Showcases my full-stack development, AI, and engineering experience, with interactive credentials, project galleries, and direct contact options.

## 🚀 Features

- **Hero Section**: Animated intro with video background and interactive badge modals for credentials.
- **About Section**: My story, technical expertise, values, and contact/social links.
- **Project Gallery**: Filterable, searchable cards for projects, work experience, and personal achievements.
- **Credential Viewer**: Pop-up modals for certificates and qualifications.
- **Contact Modal**: Email form (powered by EmailJS) and direct phone copy/call.
- **Responsive Design**: Mobile-friendly layouts and touch support.
- **Custom Animations**: Smooth transitions, scroll effects, and cursor glows.
- **Tech Stack Filter**: Quickly filter projects by technology.
- **Footer**: Copyright, privacy, and scroll-to-top.

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite, CSS Modules
- **UI/UX**: FontAwesome, custom CSS, responsive layouts
- **Email**: EmailJS integration
- **Media**: Video, image carousels, modals
- **Other**: Node.js, Express.js, MongoDB, Azure, Google Cloud (in projects)

## 📁 Folder Structure

```
vite-project/
├── public/
│   ├── docs/           # CV and documents
│   ├── images/         # Project, badge, and profile images
│   └── videos/         # Demo and background videos
├── src/
│   ├── common/         # TopNav, Footer components
│   ├── pages/
│   │   ├── components/ # Hero, AboutSection, ProjectCard, Carousel, Modals
│   │   └── home/       # Home page
│   ├── styles/         # CSS files
│   ├── App.jsx         # Main app entry
│   ├── data.jsx        # Project and credential data
│   └── main.jsx        # React root
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🖥️ Local Development

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the dev server:**
   ```sh
   npm run dev
   ```
3. **Open** [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build & Deploy

- **Build for production:**
  ```sh
  npm run build
  ```
- **Preview production build:**
  ```sh
  npm run preview
  ```
- **Deploy:**  
  Automated GitHub Pages deployment via `.github/workflows/static.yml`.

## 📜 Credentials & Certificates

- Click the badges in the Hero section or use the "Qualifications & Certificates" card to view official credentials.
- All certificates are displayed in pop-up modals for easy viewing.

## 📬 Contact

- Use the "Contact Me" button in the navigation bar for direct email or phone.
- Social links: [LinkedIn](https://www.linkedin.com/in/sonny-tapara-245481170/), [GitHub](https://github.com/Realist2022), [YouTube](https://www.youtube.com/@ProjectManic)

## 👤 Author

**Sonny Tapara**  
Full-Stack Developer & Software Engineer  
[LinkedIn](https://www.linkedin.com/in/sonny-tapara-245481170/) | [GitHub](https://github.com/Realist2022)

## 📄 License

This project is open source and available under the MIT License.
