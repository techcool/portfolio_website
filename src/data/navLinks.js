// src/data/navLinks.js

import { 
  faFacebookF, 
  faXTwitter, 
  faInstagram, 
  faPinterestP, 
  faLinkedinIn 
} from "@fortawesome/free-brands-svg-icons";

// ✅ Helper: Service Submenus
const serviceSubmenus = {
  designLab: [
    { title: "Web Design", link: "services/design-lab/web-design" },
    { title: "App Design", link: "services/design-lab/app-design" },
    { title: "UI/UX Design", link: "services/design-lab/ul-ux-design" },
    { title: "Logo Design", link: "services/design-lab/logo-design" },
    { title: "Brand Design", link: "services/design-lab/brand-design" },
    { title: "Social Media Design", link: "services/design-lab/social-media-design" },
  ],
  techLab: [
    { title: "Web Application Development", link: "services/design-lab/web-application-development" },
    { title: "App Development", link: "services/design-lab/app-development" },
    { title: "Full-Stack Development", link: "services/design-lab/full-stack-development" },
    { title: "E-Commerce Solution", link: "services/design-lab/e-commerce-solution" },
    { title: "API Development", link: "services/design-lab/api-development" },
    { title: "CMS Development", link: "services/design-lab/cms-development" },
  ],
  growthLab: [
    { title: "Search Engine Optimization", link: "services/design-lab/search-engine-optimization" },
    { title: "Social Media Optimization", link: "services/design-lab/social-media-optimization" },
    { title: "Social Media Marketing", link: "services/design-lab/social-media-marketing" },
    { title: "Pay Per Click Campaigns", link: "services/design-lab/pay-per-click-campaigns" },
    { title: "Content Marketing", link: "services/design-lab/content-marketing" },
    { title: "Email Marketing", link: "services/design-lab/email-marketing" },
  ],
};

// ✅ Main Navigation Links
export const navLinks = [
  { title: "About Us", link: "about-us" },
  {
    title: "Services",
    submenu: [
      {
        title: "Design Lab",
        link: "services/design-lab",
        icon: "/assets/imgs/icon/design-lab.png",
        subServices: serviceSubmenus.designLab,
      },
      {
        title: "Tech Lab",
        link: "services/tech-lab",
        icon: "/assets/imgs/icon/tech-lab.png",
        subServices: serviceSubmenus.techLab,
      },
      {
        title: "Growth Lab",
        link: "services/growth-lab",
        icon: "/assets/imgs/icon/growth-lab.png",
        subServices: serviceSubmenus.growthLab,
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
  { title: "Facebook", href: "https://www.facebook.com/UniterreneWebsoft/", icon: faFacebookF },
  { title: "Twitter", href: "https://x.com/UniterreneWeb", icon: faXTwitter },
  { title: "Instagram", href: "https://www.instagram.com/uniterrene/", icon: faInstagram },
  { title: "Pinterest", href: "https://www.instagram.com/uniterrene/", icon: faPinterestP },
  { title: "LinkedIn", href: "https://www.linkedin.com/company/uniterrene-websoft/", icon: faLinkedinIn },
];
