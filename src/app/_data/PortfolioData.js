//Omattic images
import Img from "../_assets/images/coverOmattic.jpg";
import Icon from "../_assets/icons/sub.ico";
//OmarVipe images
import Img1 from "../_assets/images/CoverOmarVipe.jpg";
import Icon1 from "../_assets/icons/smoke.ico";
//Beautynaty images
import Img2 from "../_assets/images/coverBeautynaty.jpg";
import Icon2 from "../_assets/icons/manicure.ico";
//Subomar images
import Img3 from "../_assets/images/coverSubomar.JPG";
import Icon3 from "../_assets/icons/sub.ico";
//skills
import LogoCss from "../_assets/icons/css.png";
import LogoJs from "../_assets/icons/js.png";
import LogoReact from "../_assets/icons/react.png";
import LogoRedux from "../_assets/icons/redux.ico";
import LogoReactRouter from "../_assets/icons/react-router.png";
import LogoNext from "../_assets/icons/next-js.png";
import LogoJsx from "../_assets/icons/jsx.ico"
import LogoTail from "../_assets/icons/tailwindcss.png";
import LogoBoot from "../_assets/icons/bootstrap.png";
//altro
import LogoStrapi from "../_assets/icons/strapi-removebg-preview.ico"
import LogoClerk from "../_assets/icons/clerk.ico"
import LogoCloudinary from "../_assets/icons/cloudinary.png"



const projectsInfo = [
  {
    id: 1,  // Omattic
    image: Img,
    icon: Icon,
    title: "Omattic",
    text: "Omattic propone una selezione esclusiva di sigarette elettroniche. Il nostro sito è alimentato da un backend Strapi per la gestione delle API, fa uso di Cloudinary per la gestione delle immagini e implementa Clerk per garantire un accesso sicuro.",
    year: 2024,
    href: "https://omattic.vercel.app/",
    notice: "Il caricamento di tutti i prodotti potrebbe richiedere fino a 2 minuti a causa dell'uso di piani gratuiti.",
    skills: [
      { id: 1, skill: "JSX", img: LogoJsx },
      { id: 2, skill: "CSS", img: LogoCss },
      { id: 3, skill: "JavaScript", img: LogoJs },
      { id: 4, skill: "Next.js", img: LogoNext },
      { id: 5, skill: "TailwindCss", img: LogoTail },
    ],
  },
  {
    id: 2,  // OmarVipe
    image: Img1,
    icon: Icon1,
    title: "OmarVipe",
    text: "OmarVipe propone una selezione esclusiva di sigarette elettroniche. Il nostro sito è alimentato da un backend Strapi per la gestione delle API, fa uso di Cloudinary per la gestione delle immagini e implementa Clerk per garantire un accesso sicuro.",
    year: 2024,
    href: "https://omarvipe.vercel.app",
    notice: "Il caricamento di tutti i prodotti potrebbe richiedere fino a 2 minuti a causa dell'uso di piani gratuiti.",
    skills: [
      { id: 1, skill: "JSX", img: LogoJsx },
      { id: 2, skill: "CSS", img: LogoCss },
      { id: 3, skill: "JavaScript", img: LogoJs },
      { id: 4, skill: "TailwindCss", img: LogoTail },
      { id: 5, skill: "Next.js", img: LogoNext },
      { id: 6, skill: "Strapi", img: LogoStrapi },
      { id: 7, skill: "Clerk", img: LogoClerk },
      { id: 8, skill: "Cloudinary", img: LogoCloudinary },
    ],
  },
  {
    id: 3,  // BeautyNaty
    image: Img2,
    icon: Icon2,
    title: "BeutyNaty",
    text: "Sito web dedicato all'estetica che utilizza intensivamente il linguaggio React, integrando Redux per gestire in modo dinamico l'aggiunta e la rimozione dei prodotti dal carrello degli acquisti. Il sistema di routing React Router assicura una navigazione fluida e efficiente tra le varie sezioni del sito.",
    year: 2023,
    href: "https://beautynaty.vercel.app",
    skills: [
      { id: 1, skill: "JSX", img: LogoJsx },
      { id: 2, skill: "CSS", img: LogoCss },
      { id: 3, skill: "JavaScript", img: LogoJs },
      { id: 4, skill: "React", img: LogoReact },
      { id: 5, skill: "Redux", img: LogoRedux },
      { id: 6, skill: "React Router", img: LogoReactRouter },
      { id: 7, skill: "Bootstrap", img: LogoBoot },
    ],
  },
  {
    id: 4,  // Subomar
    image: Img3,
    icon: Icon3,
    title: "Subomar",
    text: "Sito web dedicato al diving \"immersioni subacquee\". Utilizza ampiamente il linguaggio React, integrando Redux per gestire dinamicamente l'aggiunta e la rimozione dei prodotti nel carrello degli acquisti. Inoltre, fa uso di React Router per garantire una navigazione fluida e veloce tra le diverse sezioni del sito.",
    year: 2023,
    href: "https://subomar.vercel.app",
    skills: [
      { id: 1, skill: "JSX", img: LogoJsx },
      { id: 2, skill: "CSS", img: LogoCss },
      { id: 3, skill: "JavaScript", img: LogoJs },
      { id: 4, skill: "React", img: LogoReact },
      { id: 5, skill: "Redux", img: LogoRedux },
      { id: 6, skill: "React Router", img: LogoReactRouter },
      { id: 7, skill: "Bootstrap", img: LogoBoot },
    ],
  },
];

export default projectsInfo;

