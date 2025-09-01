
import { faFacebookF, faXTwitter, faInstagram, faPinterestP, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
export const navLinks = [
  { title: "About Us", link: "about-us" },
  {
    title: "Services",
    submenu: [
      { 
        title: "Design Lab", 
        link: "/design-lab",
        icon: "/assets/imgs/icon/design-lab.png",
        subServices: [
          { title: "Web Design", link: "#" },
          { title: "App Design", link: "#" },
          { title: "UI/UX Design", link: "#" },
          { title: "Logo Design", link: "#" },
          { title: "Brand Design", link: "#" },
          { title: "Social Media Design", link: "#" },
        ]
      },
      { 
        title: "Tech Lab", 
        link: "/tech-lab",
        icon: "/assets/imgs/icon/tech-lab.png",
        subServices: [
          { title: "Web Application Development", link: "#" },
          { title: "App Development", link: "#" },
          { title: "Full-Stack Development", link: "#" },
          { title: "E-Commerce Solution", link: "#" },
          { title: "API Development", link: "#" },
          { title: "CMS Development", link: "#" },
        ]
      },
      { 
        title: "Growth Lab",
        link: "/growth-lab",
        icon: "/assets/imgs/icon/growth-lab.png",
        subServices: [
          { title: "Search Engine Optimization", link: "#" },
          { title: "Social Media Optimization", link: "#" },
          { title: "Social Media Marketing", link: "#" },
          { title: "Pay Per Click (PPC) Campaigns", link: "#" },
          { title: "Content Marketing", link: "#" },
          { title: "Email Marketing", link: "#" },
        ]
      }
      
    ]
  },
  { title: "Portfolio", link: "#" },
  { title: "Blog", link: "#" },
  { title: "Contact Us", link: "#" },
  { title: "Let's Collaborate", link: "#" }
];

export const offcanvasLinks = [
  { title: "About", href: "#" },
  { title: "Contact", href: "#" },
  { title: "Career", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Faq", href: "#" }
]

export const socialLinks =[
  {title:"Facebook", href: "https://www.facebook.com/UniterreneWebsoft/", icon: faFacebookF},
  {title:"Twitter", href: "https://x.com/UniterreneWeb", icon:  faXTwitter  },
  {title:"Instagram", href: "https://www.instagram.com/uniterrene/", icon: faInstagram},
  {title:"Pinterest", href: "https://www.instagram.com/uniterrene/", icon: faPinterestP},
  {title:"LinkedIn", href: "https://www.linkedin.com/company/uniterrene-websoft/", icon: faLinkedinIn },
]

// export const brandLogos = [
//   { img: "../../../public/assets/imgs/brand/1.png", alt: "Brand Logo", href: "#" },
//   { img: "../../../public/assets/imgs/brand/2.png", alt: "Brand Logo", href: "#" },
//   { img: "../../../public/assets/imgs/brand/3.png", alt: "Brand Logo", href: "#" },
//   { img: "../../../public/assets/imgs/brand/4.png", alt: "Brand Logo", href: "#" },
//   { img: "../../../public/assets/imgs/brand/5.png", alt: "Brand Logo", href: "#" },
//   { img: "../../../public/assets/imgs/brand/6.png", alt: "Brand Logo", href: "#" },
// ]