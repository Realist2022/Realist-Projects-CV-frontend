const data = {
  cardData: [
    {
      id: 1,
      title: "AI Chat Bot",
      description:
        "To level up my interview prep, I created a custom AI chatbot using React, Node.js, Express, and Google AI Studio. It let me rehearse answers, get instant feedback, and build confidence — all through a tool I coded myself. It was like having a coach I could tweak and train.",
      video: "videos/AI_Chatbot.mp4",
    },
    {
      id: 2,
      title: "Website projects",
      description:
        "I built this website for our Touch team in the lead-up to Nationals. It served as a quick reference for our set plays and strategies, helping teammates refresh their memory on the go. It was a fun way to combine tech with team spirit — and make sure no one forgot the moves mid-game!",
      video: "videos/Ball_Toss_and_Return_Video.mp4", // <-- use this if file is in public/videos/
      website: "https://realist2022.github.io/Touch-Moves-Webpage/",
      links: [
        { label: "Touch Moves Website", url: "https://realist2022.github.io/Touch-Moves-Webpage/" }
      ],
    },
    {
      id: 3,
      title: "HTML/CSS/JS Projects",
      description:
        "Beginning of my journey with web development. This was some of my projects that I have done using HTML, CSS and JavaScript.",
      image: "images/SonnyPeaceOut.jpg",
      website: "https://realist2022.github.io/html-CSS-personal-portfolio/",
      links: [
        { label: "HTML/CSS Project", url: "https://realist2022.github.io/html-CSS-personal-portfolio/" },
        { label: "HTML Project", url: "https://realist2022.github.io/html-personal-portfolio/" }
      ],
    },
    {
      id: 4,
      title: "10 week work experience.",
      description:
        "This was my 10 week work experience at Metricon. I was in the IT department and I got to learn a lot about how the IT department works.",
      video: "videos/Metric_Man_Poses_and_Salutes.mp4",
      website: "https://youtu.be/mesa6q1y6Oo",
    },
    {
      id: 5,
      title: "Professional Certifications",
      description:
        "A curated collection of certifications earned across full-stack development, AI enablement, and foundational programming skills.",
      image: "images/basic_python_cert.jpeg",
      website: "https://www.credential.net/6df45471-b9c8-44ec-adfe-e82f8b6a1929",
      links: [
        { label: "Full Stack Developer Credential", url: "https://www.credential.net/6df45471-b9c8-44ec-adfe-e82f8b6a1929" },
        { label: "AI-Powered Advanced Full Stack Developer", url: "https://www.credential.net/c8f3f305-6593-4c34-b92b-75e416436ec3" },
        { label: "Tech Career Launchpad Credential", url: "https://www.credential.net/d00b707e-be23-4410-9876-b94540e7e645" },
        { label: "Python Basics Portfolio", url: "https://realist2022.github.io/html-personal-portfolio/" }
      ],
    },
    {
      id: 6,
      title: "Snake Game (Browser Edition)",
      description:
        "Arrow keys control this canvas-based port of my Python Snake — grab food, grow longer, and avoid the walls or yourself.",
      component: "snake",
    },
    {
      id: 7,
      title: "Z App Project",
      description:
        "The Z App uses React for the frontend with Google Maps integration, and Node.js/Express for the backend. Data is stored in MongoDB Atlas, accessed via Mongoose. The stack also includes tools like GitHub for collaboration, and JIRA for workflow management. This setup enables interactive mapping, real-time search, and efficient team development.",
      video: "videos/Z_station_map_locater.mp4",
      // website: "https://realist2022.github.io/html-personal-portfolio/",
    },
    {
      id: 8,
      title: "AI Image recognition",
      description:
        "This project involved building an AI image recognition system using Python and TensorFlow. The system was trained on a diverse dataset to accurately identify and classify images into various categories. Key features included data preprocessing, model training, and evaluation, resulting in a robust application capable of real-time image analysis.",
      image: "images/Insurance_guestimator.png",
      website: "https://youtu.be/D8pBg92bsQk",
    },
  ],
};

export default data;