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
    text: "Sito web di estetica, che offre l'accesso a una vasta gamma di trattamenti per la cura del corpo e della pelle. Con professionisti dedicati e un ambiente accogliente, ti aiutiamo a scoprire la bellezza interiore ed esteriore",
    year: 2024,
    site: "https://omarvipe.vercel.app",
    site2:"https://omarvipe-strapi.onrender.com/admin"
    ,    skills: [
      { id: 1, skill: "JSX", img: LogoJsx },
      { id: 2, skill: "CSS", img: LogoCss },
      { id: 3, skill: "JavaScript", img: LogoJs },
      { id: 4, skill: "Next.js", img: LogoNext },
      { id: 5, skill: "Strapi", img: LogoStrapi },
      { id: 6, skill: "Clerk", img: LogoClerk },
      { id: 7, skill: "Cloudinary", img: LogoCloudinary },
    ],
  },
  {
    id: 2,
    image: Img2,
    icon: Icon2,
    title: "BeutyNaty",
    text: "Sito web di estetica, che offre l'accesso a una vasta gamma di trattamenti per la cura del corpo e della pelle. Con professionisti dedicati e un ambiente accogliente, ti aiutiamo a scoprire la bellezza interiore ed esteriore",
    year: 2023,
    site: "https://beautynaty.vercel.app",
    skills: [
      { id: 1, skill: "JSX", img: LogoJsx },
      { id: 2, skill: "CSS", img: LogoCss },
      { id: 3, skill: "JavaScript", img: LogoJs },
      { id: 4, skill: "React", img: LogoReact },
      { id: 5, skill: "Redux", img: LogoRedux },
      { id: 6, skill: "React Router", img: LogoReactRouter },
      
    ],
  },
  {
    id: 3,
    image: Img3,
    icon: Icon3,
    title: "Subomar",
    text: "Un sito web dedicato al diving (immersioni subacquee) che includere una serie di contenuti e funzionalità per gli appassionati del mondo subacqueo e per chi desidera acquistare equipaggiamenti o apprendere di più sull'attività. ",
    year: 2023,
    site: "https://subomar.vercel.app",
    skills: [
      { id: 1, skill: "JSX", img: LogoJsx },
      { id: 2, skill: "CSS", img: LogoCss },
      { id: 3, skill: "JavaScript", img: LogoJs },
      { id: 4, skill: "React", img: LogoReact },
      { id: 5, skill: "Redux", img: LogoRedux },
      { id: 6, skill: "React Router", img: LogoReactRouter },
    ],
  },
];

export default projectsInfo;
