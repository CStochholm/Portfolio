import project1 from "../assets/project1.png";
import intersportImage from "../assets/Intersport (1).jpg";
import cardTrackerImage from "../assets/Intersport (2).jpg";
import instagramImage from "../assets/Intersport (3).jpg";
import intersportImage1 from "../assets/Intersport (4).jpg";
import intersportImage2 from "../assets/Intersport (5).jpg";
import intersportImage3 from "../assets/Intersport (6).jpg";

export interface ProjectData {
  image: string;
  title: string;
  description: string;
  details: string;
  technologies: string[];
  github: string;
  demo: string;
  extraImages?: string[];
  reverse?: boolean;
}


export const webProjects: ProjectData[] = [

  {
    image: intersportImage,
    title: "Intersport Campaign Games",
    description:
      "Interactive marketing games developed for an Intersport campaign.",

    details:
      "Created interactive game experiences designed to increase customer engagement during a B2B marketing campaign. The solutions focused on accessibility, gameplay and delivering value for the client.",

    technologies: [
      "JavaScript",
      "Phaser",
      "HTML",
      "CSS",
      "Game Development"
    ],

    github: "...",
    demo: "...",

    extraImages: [
      intersportImage1,
      intersportImage2,
      intersportImage3,
    ]
  },


  {
    image: cardTrackerImage,
    title: "Card Collection Tracker",
    description:
      "A modern application for managing and tracking personal card collections.",

    details:
      "Built with React and TypeScript, using Supabase and PostgreSQL for data management. The application focuses on creating a scalable structure for storing, searching and organizing collections.",

    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind"
    ],

    github: "...",
    demo: "...",

    extraImages: [
      intersportImage1,
      intersportImage2,
      intersportImage3,
    ]
  },


  {
    image: instagramImage,
    title: "Instagram MVC Clone",
    description:
      "A full-stack social media platform built using MVC architecture.",

    details:
      "A web application focused on authentication, user management, image uploads and database relationships. The project was built to strengthen understanding of backend architecture and full-stack development.",

    technologies: [
      "PHP",
      "MVC",
      "MySQL",
      "Bootstrap",
      "HTML",
      "CSS"
    ],

    github: "...",
    demo: "...",

    extraImages: [
      intersportImage1,
      intersportImage2,
      intersportImage3,
    ]
  }

];