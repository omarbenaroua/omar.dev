//project
import Img from "../../src/assets/images/coverOmarVipe.jpg";
import Icon from "../../src/assets/icons/smoke.ico";
//project 2
import Img2 from "../../src/assets/images/cover.jpg";
import Icon2 from "../../src/assets/icons/manicure.ico";
//project 3
import Img3 from "../../src/assets/images/IMG_1449.JPG";
import Icon3 from "../../src/assets/icons/sub.ico";
//skills
import LogoCss from "../assets/icons/css.png";
import LogoJs from "../assets/icons/js.png";
import LogoReact from "../assets/icons/react.png";
import LogoRedux from "../assets/icons/redux.ico";
import LogoReactRouter from "../assets/icons/react-router.png";
import LogoNext from "../assets/icons/next-js.png";
import LogoJsx from "../assets/icons/jsx.ico" 
import LogoBootstrap from "../assets/icons/bootstrap.png" 
import LogoTailwindcss from "../assets/icons/tailwindcss.png" 

/* import LogoHtml from "../assets/icons/html.png";
import LogoTs from "../assets/icons/typescript.ico";
import LogoSass from "../assets/icons/sass.png"; */

//altro
import LogoStrapi from "../assets/icons/strapi-removebg-preview.ico"
import LogoClerk from "../assets/icons/clerk.ico"
import LogoCloudinary from "../assets/icons/cloudinary.png"



const projectsInfo = [
  {
    id: 1,
    image: Img,
    icon: Icon,
    title: "OmarVipe",
    text: "OmarVipe propone una selezione esclusiva di sigarette elettroniche. Il nostro sito è alimentato da un backend Strapi per la gestione delle API, fa uso di Cloudinary per la gestione delle immagini e implementa Clerk per garantire un accesso sicuro.",
    year: 2024,
    site: "https://omarvipe.vercel.app",
    notice:"Il caricamento di tutti i prodotti potrebbe richiedere fino a 2 minuti a causa dell'uso di piani gratuiti."
    ,    skills: [
      { id: 1, skill: "JSX", img: LogoJsx },
      { id: 2, skill: "CSS", img: LogoCss },
      { id: 3, skill: "JavaScript", img: LogoJs },
      { id: 4, skill: "Next.js", img: LogoNext },
      { id: 5, skill: "Strapi", img: LogoStrapi },
      { id: 6, skill: "Clerk", img: LogoClerk },
      { id: 7, skill: "Cloudinary", img: LogoCloudinary },
      { id: 8, skill: "Tailwindcss", img: LogoTailwindcss },
    ],
  },
  {
    id: 2,
    image: Img2,
    icon: Icon2,
    title: "BeutyNaty",
    text: "Sito web dedicato all'estetica che utilizza intensivamente il linguaggio React, integrando Redux per gestire in modo dinamico l'aggiunta e la rimozione dei prodotti dal carrello degli acquisti. Il sistema di routing React Router assicura una navigazione fluida e efficiente tra le varie sezioni del sito.",
    year: 2023,
    site: "https://beautynaty.vercel.app",
    skills: [
      { id: 1, skill: "JSX", img: LogoJsx },
      { id: 2, skill: "CSS", img: LogoCss },
      { id: 3, skill: "JavaScript", img: LogoJs },
      { id: 4, skill: "React", img: LogoReact },
      { id: 5, skill: "Redux", img: LogoRedux },
      { id: 6, skill: "React Router", img: LogoReactRouter },
      { id: 7, skill: "Bootstrap", img: LogoBootstrap },
      
    ],
  },
  {
    id: 3,
    image: Img3,
    icon: Icon3,
    title: "Subomar",
    text: "Sito web dedicato al diving \"immersioni subacquee\". Utilizza ampiamente il linguaggio React, integrando Redux per gestire dinamicamente l'aggiunta e la rimozione dei prodotti nel carrello degli acquisti. Inoltre, fa uso di React Router per garantire una navigazione fluida e veloce tra le diverse sezioni del sito.",
    year: 2023,
    site: "https://subomar.vercel.app",
    skills: [
      { id: 1, skill: "JSX", img: LogoJsx },
      { id: 2, skill: "CSS", img: LogoCss },
      { id: 3, skill: "JavaScript", img: LogoJs },
      { id: 4, skill: "React", img: LogoReact },
      { id: 5, skill: "Redux", img: LogoRedux },
      { id: 6, skill: "React Router", img: LogoReactRouter },
      { id: 7, skill: "Bootstrap", img: LogoBootstrap },
    ],
  },
];

export default projectsInfo;
