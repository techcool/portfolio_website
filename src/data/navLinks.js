// src/data/navLinks.js

import customIcons from "@/utils/customIcons";

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
  
} from "@fortawesome/free-brands-svg-icons";
// import{
   
// }

// Service Submenus
const serviceSubmenus = {
  designBrand: [
    {
      heading: "",
      subNavs: [
        {
          title: "Web & UI/UX Design",
          icon: customIcons.ux,
        },
        {
          title: "App Design",
          icon: customIcons.app,
        },
        {
          title: "Logo & Brand Identity",
          icon: customIcons.brand,
        },
        {
          title: "Social Media Ads",
          icon: customIcons.adBanner,
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
          icon: customIcons.js,
        },
        {
          title: "MongoDB",
          icon: customIcons.mongodb,
        },
      ],
    },
    {
       heading: "eCommerce Development",
       subNavs: [
        {
          title: "WooCommerce",
          icon: customIcons.woo,
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
          icon: customIcons.js,
        },
        {
          title: "C#",
          icon: customIcons.cSurf,
        },
        {
          title: ".NET",
          icon: customIcons.dontnet,
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
          icon: customIcons.cakephp,
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
          icon: customIcons.hybrid,
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
          icon:  customIcons.kotlin,
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
          icon: customIcons.pwa,
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
          icon: customIcons.seo,
        },
        {
          title: "SMM",
          icon: customIcons.smm,
        },
        {
          title: "SMO",
          icon: customIcons.smo,
        },
        {
          title: "PPC",
          icon: customIcons.ppc,
        },
        {
          title: "Content Marketing",
          icon: customIcons.cm,
        },
        {
          title: "Email Marketing",
          icon: customIcons.em,
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
          icon: customIcons.games,
        },
        {
          title: "Unity/Unreal Engine Development",
          icon: customIcons.unity,
        },
        {
          title: "AR/VR Game Experinces",
          icon: customIcons.ar,
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
          icon: customIcons.chatbot,
        },
        {
          title: "Decision Management Systems",
          icon: customIcons.system,
        },
        {
          title: "Machine Learning Solutions",
          icon: customIcons.machine,
        },
        {
          title: "Deep Learning Models",
          icon: customIcons.deep,
        },
        {
          title: "NLP",
          icon: customIcons.nlp,
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
          icon: customIcons.cloud,
        },
        {
          title: "CI/CD Pipeline Setup",
          icon: customIcons.pipeline,
        },
        {
          title: "Containerization (Docker, Kubernetes)",
          icon: customIcons.docker,
        },
        {
          title: "Serverless Architecture",
          icon: customIcons.architecture,
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
