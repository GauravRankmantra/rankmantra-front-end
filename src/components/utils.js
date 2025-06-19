import { Circle, Link, OrigamiIcon, Search, WebhookIcon } from "lucide-react";
import { DraftingCompass } from "lucide-react";
import { MdDesignServices, MdDeveloperBoard, MdEco, MdLogoDev } from "react-icons/md";
import { SiErpnext, SiShopify, SiWebstorm, SiWix, SiWordpress } from "react-icons/si";

export const Menus = [
  
  {
    name: "SEO",
    link:"/search"
  },
  {
    name: "WEBSITE SERVICES",
    subMenuHeading: ["DEVELOPMENT", "DESIGNING","CMS DEVELOPMENT"],
    subMenu: [
      {
        name: "Web Development",
        icon: MdDeveloperBoard,
        link:"/web-develop"
      },
      {
        name: "Website Designing",
        icon: SiWebstorm,
        link:"/website-designing"
      },
      {
        name: "Wordpress Development",
        icon: SiWordpress,
        link:"/wordpress-development"
      },
      {
        name: "E-Commerce Development",
        icon: MdEco,
        link:"/ecommerce-develop"
      },
      
      {
        name: "Website Redesigning",
        icon: MdDesignServices,
        link:"/website-redesign",
      },
      {
        name: "Wix Development",
        icon: SiWix,
        link:"/wix-development"
      },
     
      {
        name: "Logo Designing",
        icon: MdLogoDev,
        link:"/logo-design"
      },
      {
        name: "Shopify Development",
        icon: SiShopify,
        link:"/shopify-development"
      },
      
    ],
    gridCols: 3,
  },
  {
    name: "PACKAGES",
    subMenu: [
      {
        name: "SEO Packages",
        icon: Search,
        link:"/seo"
      },
      {
        name: "SMM Packages",
       icon: Circle,
       link:"/smm"
      },
      {
        name: "PPC Packages",
        icon: DraftingCompass,
        link:"/pay-per-click"
      },
      {
        name: "ORM Packages",
        icon: OrigamiIcon,
        link:"/online-reputation"
      },
      {
        name: "WEB Hosting packages",
        icon: WebhookIcon,
        link:"/web-hosting-package"
      },
    ],
    gridCols: 1,
  },
  {
    name: "SOCIAL MEDIA",
    link:"/social"
  },
  {
    name: "ABOUT US",
    link:"/about-us"
  },
  {
    name: "GALLERY",
    link:"/"
  },
];