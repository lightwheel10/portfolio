import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Paras Tiwari",
  initials: "PT",
  url: "https://paras.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Entrepreneur passionate about building things and helping people.",
  summary:"At the begining of 2024, I quit my job as the Customer Success Head to go fulltime into building and scaling my own businesses.I am a self-taught developer and I love building things and helping people.",
  avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "Python",
    "CRM",
    "Customer Success",
    "Sales",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "tiwariparas1096@gmail.com",
    tel: "+9654674259",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/paras-tiwari-941134243/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Paras810739536",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@lightwheelai",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "KoinX",
      href: "https://koinx.com",
      badges: [],
      location: "Remote",
      title: "Customer Success Head",
      logoUrl: "/koinx.png",
      start: "2022",
      end: "2024",
      description:
        "Led customer success initiatives and managed client relationships at KoinX.",
    },
    {
      company: "American Express",
      href: "https://www.americanexpress.com",
      badges: [],
      location: "New York, NY",
      title: "Team Supervisor",
      logoUrl: "/amex.png",
      start: "2019",
      end: "2021",
      description:
        "Supervised a team and managed customer service operations at American Express.",
    },
    {
      company: "Amazon",
      href: "https://www.amazon.com",
      badges: [],
      location: "Seattle, WA",
      title: "Account Manager",
      logoUrl: "/amazon.png",
      start: "2018",
      end: "2019",
      description:
        "Managed key accounts and fostered client relationships at Amazon.",
    },
  ],

  // Remove education section entirely
  //education: [],

  // Remove hackathons section entirely
  // hackathons: [],

  projects: [
    {
      title: "Shadow Style",
      href: "https://www.shadowstyle.in",
      dates: "Jan 2024 - March 2024",
      active: true,
      description:
        "Shadow Style is my personal clothing brand. I built and launched the e-commerce store using Shopify, offering a unique line of fashion items.",
      technologies: [
        "Shopify",
        "E-commerce",
        "Fashion",
        "Brand Development",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.shadowstyle.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/shadow-style.png", // You'll need to add this image to your public folder
    },
    {
      title: "Just A Todo",
      href: "https://justatodo.site/",
      dates: "Aug 2024 - Sept 2024",
      active: true,
      description:
        "Just A Todo is a simple todo app built with React and Firebase. It allows users to create, read, update, and delete todos.",
      technologies: [
        "React",
        "Typescript",
        "Firebase",
        "Tailwind",
      ],
      links: [
        {
          type: "Website",
          href: "https://justatodo.site/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/justatodo.png",
    },
  ],

  // ... rest of the data ...
} as const;
