import Identico1 from '../assets/identico.jpg';
import Identico2 from '../assets/Dashboard-Identico-dark.png';
import Idf1 from "../assets/idf-1-10.png";
import Idf2 from "../assets/Ijesha-land-Development-fund-Dashboard.png";
import Raystore1 from "../assets/img2.jpg";
import Raystore2 from "../assets/img1.jpg";
import Chatter1 from "../assets/chatter.jpg";
import Chatter2 from "../assets/chatter2.jpg";
import Talents1 from "../assets/talents1.jpg";
import Talents2 from "../assets/talents-hero.jpg";

const projectData = [
    {
        title: "Talents",
        description: "A modern job and talent discovery platform that connects job seekers with employers. It offers intuitive navigation, responsive design, and features that streamline hiring and applications.",
        features: [
            "User authentication and profile management",
            "Job listings with filters and search",
            "Talent showcase with user skills and experience",
            "Responsive and mobile-first UI",
        ],
        tech: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node Js"],
        image: Talents1,
        hoverImage: Talents2,
        demo: "https://talents-eta.vercel.app/"
    },
    {
        title: "Chatter",
        description: "A dynamic and interactive social media platform for text and image-based content sharing.",
        features: [
            "User registration and authentication",
            "Personalized feed for tailored content discovery",
            "Engagement features: commenting, liking, and bookmarking",
            "Fully responsive design for seamless user experience"
        ],
        tech: ["HTML5", "CSS3", "React (TypeScript)", "Bootstrap", "Firebase"],
        image: Chatter1,
        hoverImage: Chatter2,
        demo: "https://chatter-project-seven.vercel.app/",

    },
    {
        title: "Raystore",
        description: "A sleek and modern skincare shopping platform with an intuitive UI and smooth shopping experience.",
        features: [
            "Fully responsive and mobile-friendly design",
            "Engaging animations for an immersive experience",
            "Add-to-cart functionality with easy checkout",
            "Product details, favorites, and wishlist support",
            "Seamless user experience with intuitive navigation"
        ],
        tech: ["HTML5", "CSS3", "React.js", "Bootstrap"],
        image: Raystore1,
        hoverImage: Raystore2,
        demo: "https://raystore-mu.vercel.app/"
    },
    {
        title: "Identico",
        description: "A comprehensive identity and card production system with real-time inventory tracking, secure authentication, and online registration capabilities.",
        features: [
            "Fully responsive and optimized for all devices",
            "User authentication with role-based access (User, Admin, Super Admin)",
            "Real-time inventory stats and smart notifications",
            "Advanced product search and customer management",
            "Secure payment gateway for seamless card ordering",
            "Intuitive navigation structure for enhanced usability"
        ],
        tech: ["HTML5", "CSS3", "JavaScript", "Vue.js", "ApexCharts", "Bootstrap", "Tailwind CSS"],
        image: Identico1,
        hoverImage: Identico2,
        demo: "https://cards.identico.ng/"
    },
    {
        title: "Ijesa Development Fund",
        description: "A crowdfunding platform for Ijesa indigenes to contribute towards sustainable development initiatives in Ijesaland.",
        features: [
            "Fully responsive and mobile-friendly interface",
            "User authentication with different access levels (User, LGA-Admin, Super Admin)",
            "Real-time transaction tracking and notifications",
            "Secure contribution system for donations and funding",
            "Detailed reporting and analytics for transparency"
        ],
        tech: ["HTML5", "CSS3", "JavaScript", "Vue.js", "ApexCharts", "Tailwind CSS"],
        image: Idf1,
        hoverImage: Idf2,
        demo: "https://idf.identico.ng/"
    },


];

export default projectData;
