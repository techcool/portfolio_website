// src/data/navLinks.js

import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faPinterestP,
  faLinkedinIn,
  faUikit,
} from "@fortawesome/free-brands-svg-icons";

// Service Submenus
const serviceSubmenus = {
  designBrand: [
    {
      heading: "",
      subNavs: [
        {
          title: "Web & UI/UX Design",
          icon: faUikit,
        },
        {
          title: "App Design",
          icon: faUikit,
        },
        {
          title: "Logo & Brand Identity",
          icon: faUikit,
        },
        {
          title: "Social Media Ads",
          icon: faUikit,
        },
      ],
    },
  ],
  webDevelopment: [
   
    {
       heading: "CMS",
       subNavs: [
        {
          title: "WordPress",
          icon: faUikit,
        },
        {
          title: "Joomla",
          icon: faUikit,
        },
        {
          title: "Drupal",
          icon: faUikit,
        },
        {
          title: "Webflow",
          icon: faUikit,
        },
        {
          title: "Wix",
          icon: faUikit,
        },
        {
          title: "Squarespace",
          icon: faUikit,
        },
        {
          title: "HubSpot CMS",
          icon: faUikit,
        },
      ],
    },
    {
       heading: "Full Stack Development",
       subNavs: [
        {
          title: "Node.js",
          icon: faUikit,
        },
        {
          title: "Angular",
          icon: faUikit,
        },
        {
          title: "React.js",
          icon: faUikit,
        },
        {
          title: "Express.js",
          icon: faUikit,
        },
        {
          title: "MongoDB",
          icon: faUikit,
        },
      ],
    },
    {
       heading: "eCommerce Development",
       subNavs: [
        {
          title: "WooCommerce",
          icon: faUikit,
        },
        {
          title: "Magento",
          icon: faUikit,
        },
        {
          title: "Shopify",
          icon: faUikit,
        },
      ],
    },
    
    {
       heading: "Open Source & Enterprise Technologies",
       subNavs: [
        {
          title: "Python",
          icon: faUikit,
        },
        {
          title: "PHP",
          icon: faUikit,
        },
        {
          title: "JavaScript",
          icon: faUikit,
        },
        {
          title: "C#",
          icon: faUikit,
        },
        {
          title: ".NET",
          icon: faUikit,
        },
      ],
    },
    {
       heading: "PHP Framework",
       subNavs: [
        {
          title: "Laravel",
          icon: faUikit,
        },
        {
          title: "Cake PHP",
          icon: faUikit,
        },
      ],
    },
  ],
  appDevelopment:[
    {
      heading: "",
      subNavs:[
        {
          title: "Hybrid Apps",
          icon: faUikit,
        },
        {
          title: "React Native",
          icon: faUikit,
        },
        {
          title: "Flutter",
          icon: faUikit,
        },
        {
          title: "Kotlin",
          icon: faUikit,
        },
        {
          title: "Java",
          icon: faUikit,
        },
        {
          title: "Swift",
          icon: faUikit,
        },
        {
          title: "Progressive Web Apps",
          icon: faUikit,
        },
      ]
    }
  ],
  digitalMarketing:[
    {
      heading: "",
      subNavs:[
        {
          title: "SEO",
          icon: faUikit,
        },
        {
          title: "SMM",
          icon: faUikit,
        },
        {
          title: "SMO",
          icon: faUikit,
        },
        {
          title: "PPC",
          icon: faUikit,
        },
        {
          title: "Content Marketing",
          icon: faUikit,
        },
        {
          title: "Email Marketing",
          icon: faUikit,
        },
      ]
    }
  ],
  gameDevelopment:[
    {
      heading: "",
      subNavs:[
        {
          title: "2D & 3D Game Design",
          icon: faUikit,
        },
        {
          title: "Unity/Unreal Engine Development",
          icon: faUikit,
        },
        {
          title: "AR/VR Game Experinces",
          icon: faUikit,
        },
      ]
    }
  ],
  aiDevelopment:[
    {
      heading: "",
      subNavs:[
        {
          title: "Chatbot Development",
          icon: faUikit,
        },
        {
          title: "Decision Management Systems",
          icon: faUikit,
        },
        {
          title: "Machine Learning Solutions",
          icon: faUikit,
        },
        {
          title: "Deep Learning Models",
          icon: faUikit,
        },
        {
          title: "NLP",
          icon: faUikit,
        },
      ]
    }
  ],
  cloudDevOps:[
    {
      heading: "",
      subNavs:[
        {
          title: "Cloud Development",
          icon: faUikit,
        },
        {
          title: "CI/CD Pipeline Setup",
          icon: faUikit,
        },
        {
          title: "Containerization (Docker, Kubernetes)",
          icon: faUikit,
        },
        {
          title: "Serverless Architecture",
          icon: faUikit,
        },
        
      ]
    }
  ]
};

// ✅ Main Navigation Links
export const navLinks = [
  { title: "About Us", link: "about-us" },
  {
    title: "Services",
    submenu: [
      {
        title: "Designs & Branding",
        subServices: serviceSubmenus.designBrand,
      },
      {
        title: "Web Development",
        subServices: serviceSubmenus.webDevelopment,
      },
      {
        title: "App Developmnt",
        subServices: serviceSubmenus.appDevelopment,
      },
      {
        title: "Digital Marketing",
        subServices: serviceSubmenus.digitalMarketing,
      },
      {
        title: "Game Development",
        subServices: serviceSubmenus.gameDevelopment,
      },
      {
        title: "AI Development",
        subServices: serviceSubmenus.aiDevelopment,
      },
      {
        title: "Cloud & DevOps",
        subServices: serviceSubmenus.cloudDevOps,
      },
    ],
  },
  { title: "Portfolio", link: "portfolio" },
  { title: "Blog", link: "blog" },
  { title: "Contact Us", link: "contact-us" },
  { title: "Let's Collaborate", link: "lets-collaborate" },
];

// ✅ Offcanvas Links
export const offcanvasLinks = [
  { title: "About", href: "about-us" },
  { title: "Contact", href: "contact-us" },
  { title: "Career", href: "career" },
  { title: "Blog", href: "blog" },
  { title: "Faq", href: "faq" },
];

// ✅ Social Links
export const socialLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/UniterreneWebsoft/",
    icon: faFacebookF,
  },
  { title: "Twitter", href: "https://x.com/UniterreneWeb", icon: faXTwitter },
  {
    title: "Instagram",
    href: "https://www.instagram.com/uniterrene/",
    icon: faInstagram,
  },
  {
    title: "Pinterest",
    href: "https://www.instagram.com/uniterrene/",
    icon: faPinterestP,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/uniterrene-websoft/",
    icon: faLinkedinIn,
  },
];
