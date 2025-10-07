const data = {
  cardData: [
    {
      id: 1,
      title: "Personal Websites (HTML/CSS/JS)",
      description:
        "At the start of my web development journey, I built these websites using HTML, CSS, and JavaScript. One was for our Touch team ahead of Nationals, giving teammates a quick way to review set plays and strategies on the go. Each project was a chance to experiment, learn, and see how code could bring ideas — and even team spirit — to life.",
      video: "videos/Ball_Toss_and_Return_Video.mp4",
      website: "https://realist2022.github.io/Touch-Moves-Webpage/",
      links: [
        { label: "Touch Moves Website", url: "https://realist2022.github.io/Touch-Moves-Webpage/" },
        { label: "HTML/CSS Portfolio", url: "https://realist2022.github.io/html-CSS-personal-portfolio/" },
        { label: "Vanilla JS Projects", url: "https://realist2022.github.io/html-personal-portfolio/" }
      ],
      techStack: [
        "HTML","CSS","JavaScript","Bootstrap","Responsive Design"
      ],
    },
        {
      id: 2,
      title: "Qualifications/Certificates",
      description:
        "Curated set of credentials across full-stack development, AI enablement, and foundational programming.",
      image: "images/basic_python_cert.jpeg",
      carouselImages: [
        "images/Full_Stack_Circle_Badge.png",
        "images/Full_Stack_Circle_Badge2.png",
        "images/basic_python_cert.jpeg",
      ],
      website: "https://www.credential.net/6df45471-b9c8-44ec-adfe-e82f8b6a1929",
      links: [
        { label: "Full Stack Developer Credential", url: "https://www.credential.net/6df45471-b9c8-44ec-adfe-e82f8b6a1929" },
        { label: "AI-Powered Advanced Full Stack Developer", url: "https://www.credential.net/c8f3f305-6593-4c34-b92b-75e416436ec3" },
        { label: "Tech Career Launchpad Credential", url: "https://www.credential.net/d00b707e-be23-4410-9876-b94540e7e645" },
        { label: "Python Basics Portfolio", url: "https://realist2022.github.io/html-personal-portfolio/" }
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
        { label: "YouTube Work Experience Video", url: "https://youtu.be/mesa6q1y6Oo" }
      ],
      techStack: ["Power BI", "REST APIs", "Google Cloud Storage", "Big Query", "Node.js", "SonarQube", "Cortex", "Bamboo", "Big Data Sets"],
    },
    {
      
      id: 4,
      title: "AI Chat Bot",
      description:
        "Custom AI chatbot (React, Node.js, Express, Google AI Studio) for interview prep: rehearse answers, get instant feedback, and iterate.",
      video: "videos/AI_Chatbot.mp4",
      techStack: ["React", "Node.js", "Express.js", "Google AI Studio", "REST APIs"],
    },

    {
      id: 5,
      title: "Snake Game (Browser Edition)",
      description:
        "Canvas-based Snake rebuilt for the browser. Arrow keys to play; simple, responsive, and performant.",
      component: "snake",
      techStack: ["HTML5 Canvas", "JavaScript ES6+"],
    },
    {
      id: 6,
      title: "Z App Project",
      description:
        "React + Google Maps frontend with Node.js/Express APIs and MongoDB Atlas. Interactive mapping and real-time search with a collaborative workflow.",
      video: "videos/Z_station_map_locater.mp4",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Google Maps API"],
    },
    {
      id: 7,
      title: "AI Image Recognition",
      description:
        "Azure Custom Vision project to classify images in real time. Includes dataset prep, model training/evaluation, and a simple REST integration.",
      image: "images/AI_truck.jpg",
      webste: "https://youtu.be/D8pBg92bsQk",
      links: [
        { label: "YouTube AI Image Recognition Video", url: "https://youtu.be/D8pBg92bsQk" }
      ],
      techStack: ["Azure", "React", "Express.js", "Multer", "Azure Custom Vision", "REST APIs"],
    },
  ],
};

export default data;