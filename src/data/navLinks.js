// src/data/navLinks.js

import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faPinterestP,
  faLinkedinIn,
  faUikit,
  faWordpress,
  faJoomla,
  faDrupal,
  faWebflow,
  faWix,
  faSquarespace,
  faHubspot,
  faNodeJs,
  faAngular,
  faReact,
  faMagento,
  faShopify,
  faPython,
  faPhp,
  faLaravel,
  faFlutter,
  faJava,
  faSwift,
  faCloud
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
          icon: faWordpress,
        },
        {
          title: "Joomla",
          icon: faJoomla,
        },
        {
          title: "Drupal",
          icon: faDrupal,
        },
        {
          title: "Webflow",
          icon: faWebflow,
        },
        {
          title: "Wix",
          icon: faWix,
        },
        {
          title: "Squarespace",
          icon: faSquarespace,
        },
        {
          title: "HubSpot CMS",
          icon: faHubspot,
        },
      ],
    },
    {
       heading: "Full Stack Development",
       subNavs: [
        {
          title: "Node.js",
          icon: faNodeJs,
        },
        {
          title: "Angular",
          icon: faAngular,
        },
        {
          title: "React.js",
          icon: faReact,
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
          icon: faMagento,
        },
        {
          title: "Shopify",
          icon: faShopify,
        },
      ],
    },
    
    {
       heading: "Open Source & Enterprise Technologies",
       subNavs: [
        {
          title: "Python",
          icon: faPython,
        },
        {
          title: "PHP",
          icon: faPhp,
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
          icon: faLaravel,
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
          icon: faReact,
        },
        {
          title: "Flutter",
          icon: faFlutter,
        },
        {
          title: "Kotlin",
          icon:  faUikit,
        },
        {
          title: "Java",
          icon: faJava,
        },
        {
          title: "Swift",
          icon: faSwift,
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
    link:"",
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
