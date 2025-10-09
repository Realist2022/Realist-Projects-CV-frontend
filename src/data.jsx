const data = {
  cardData: [
    {
      id: 1,
      title: "Hobbies & Projects",
      description:
        "A rotating gallery of personal interests and side projects — from web experiments to tech explorations that keep skills sharp and creativity flowing.",
      carouselImages: [
        "images/BBQ.JPG",
        "images/Aquaponics.PNG",
        "images/Greenhouse.PNG",
        "images/LaserCutter.JPG",
        "images/Art.PNG",
        "images/Solar.JPG",
      ],
      links: [
        {
          label: "HTML/CSS Portfolio",
          url: "https://realist2022.github.io/html-CSS-personal-portfolio/",
        },
        {
          label: "Vanilla JS Projects",
          url: "https://realist2022.github.io/html-personal-portfolio/",
        },
      ],
      techStack: [
        "Experience & Projects",
        "Electronic Repairs",
        "Problem Solving",
        "Creative",
        "Side Projects",
      ],
    },

    {
      id: 2,
      title: "Qualifications/Certificates",
      description:
        "Curated set of credentials across full-stack development, AI enablement, and foundational programming. Use the red buttons below to view each credential.",

      iframeControlledByLinks: true,
      defaultIframeIndex: 0,
      links: [
        {
          label: "Full Stack Developer Credential",
          url: "https://www.credential.net/embed/6df45471-b9c8-44ec-adfe-e82f8b6a1929",
        },
        {
          label: "AI-Powered Advanced Full Stack Developer",
          url: "https://www.credential.net/embed/c8f3f305-6593-4c34-b92b-75e416436ec3",
        },
        {
          label: "Tech Career Launchpad Credential",
          url: "https://www.credential.net/embed/d00b707e-be23-4410-9876-b94540e7e645",
        },
        {
          label: "Python Basics Portfolio",
          image: "images/basic_python_cert.jpeg",
        },
      ],
      techStack: ["Qualifications", "Certificates", "Skills"],
    },
    {
      id: 3,
      title: "Foodstuffs Work Experience (10 weeks)",
      description:
        "10-week data-focused experience: integrated REST APIs and cloud storage with Node.js, and prototyped Power BI dashboards on BigQuery datasets.",
      video: "videos/Metric_Man_Poses_and_Salutes.mp4",
      poster: "images/Foodstuffs_project.png",
      website: "https://youtu.be/mesa6q1y6Oo",
      links: [
        {
          label: "YouTube Work Experience Video",
          url: "https://youtu.be/mesa6q1y6Oo",
        },
      ],
      techStack: [
        "Power BI",
        "Work Experience",
        "REST APIs",
        "Google Cloud Storage",
        "Big Query",
        "Node.js",
        "SonarQube",
        "Cortex",
        "Bamboo",
        "Big Data Sets",
        "Agile Methodologies"
      ],
    },

    {
      id: 4,
      title: "Electronic Repairs",
      description:
        "Console-focused repairs and custom mods: HDMI/USB‑C port replacements, power/overheating fixes, controller stick‑drift repairs, SSD and cooling upgrades, firmware/config tweaks, and cosmetic/LED mods for PlayStation and Xbox.",
      carouselImages: [
        "images/E1.JPG",
        "images/E2.JPG",
        "images/E3.JPG",
        "images/E4.JPG",
      ],
      links: [
        {
          label: "YouTube Ps5 Repair Video",
          url: "https://youtu.be/j_oQK9LvAjQ",
        },
        {
          label: "HDMI Repair Video",
          url: "https://www.facebook.com/watch/?v=713565409324728&ref=sharing",
        },
      ],
      techStack: [
        "Work Experience",
        "Electronic Repairs",
        "Problem Solving",
        "Debugging",
        "Creative",
      ],
    },

    {
      id: 5,
      title: "Personal Websites (HTML/CSS/JS)",
      description:
        "At the start of my web development journey, I built these websites using HTML, CSS, and JavaScript. One was for our Touch team ahead of Nationals, giving teammates a quick way to review set plays and strategies on the go. Each project was a chance to experiment, learn, and see how code could bring ideas — and even team spirit — to life.",
      video: "videos/Ball_Toss_and_Return_Video.mp4",
      website: "https://realist2022.github.io/Touch-Moves-Webpage/",
      links: [
        {
          label: "Touch Moves Website",
          url: "https://realist2022.github.io/Touch-Moves-Webpage/",
        },
        {
          label: "HTML/CSS Portfolio",
          url: "https://realist2022.github.io/html-CSS-personal-portfolio/",
        },
        {
          label: "Vanilla JS Projects",
          url: "https://realist2022.github.io/html-personal-portfolio/",
        },
      ],
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Responsive Design",
      ],
    },

    {
      id: 6,
      title: "AI Chat Bot",
      description:
        "Custom AI chatbot (React, Node.js, Express, Google AI Studio) for interview prep: rehearse answers, get instant feedback, and iterate.",
      video: "videos/AI_Chatbot.mp4",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "Google AI Studio",
        "REST APIs",
      ],
    },
    {
      id: 7,
      title: "Z App Project",
      description:
        "React + Google Maps frontend with Node.js/Express APIs and MongoDB Atlas. Interactive mapping and real-time search with a collaborative workflow.",
      video: "videos/Z_station_map_locater.mp4",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Google Maps API",
        "REST APIs",
        "Jira",
        "GitHub",
        "Agile Methodologies"
      ],
    },
    {
      id: 8,
      title: "AI Image Recognition",
      description:
        "Azure Custom Vision project to classify images in real time. Includes dataset prep, model training/evaluation, and a simple REST integration.",
      image: "images/AI_truck.jpg",
      website: "https://youtu.be/D8pBg92bsQk",
      links: [
        {
          label: "YouTube AI Image Recognition Video",
          url: "https://youtu.be/D8pBg92bsQk",
        },
      ],
      techStack: [
        "Azure",
        "React",
        "Express.js",
        "Multer",
        "Azure Custom Vision",
        "REST APIs",
      ],
    },
  ],
};

export default data;
