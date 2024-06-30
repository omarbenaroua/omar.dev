import Img1 from "../assets/icons/developer.png";
import Img2 from "../assets/icons/development.png";
import Img3 from "../assets/icons/frond-end-developer.png";
//Front-End
import LogoHtml from "../assets/icons/html.png";
import LogoCss from "../assets/icons/css.png";
import LogoJs from "../assets/icons/js.png";
import LogoTs from "../assets/icons/typescript.ico";
import LogoReact from "../assets/icons/react.png";
import LogoRedux from "../assets/icons/redux.ico";
import LogoReactRouter from "../assets/icons/react-router.png";
import LogoNext from "../assets/icons/next-js.png";
import LogoSass from "../assets/icons/sass.png";
//Frameworks
import LogoBoot from "../assets/icons/bootstrap.png";
import LogoTail from "../assets/icons/tailwindcss.png";
//Others
import LogoCanva from "../assets/icons/canva.ico";
import LogoMicrosoft from "../assets/icons/microsoft.ico";

const skillsInfo = [
  {
    id: 1,
    title: "Front-End",
    img: Img1,
    skills: [
      { id: 1, skill: "HTML", img: LogoHtml },
      { id: 2, skill: "CSS", img: LogoCss },
      { id: 3, skill: "JavaScript", img: LogoJs },
      { id: 4, skill: "TypeScript", img: LogoTs },
      { id: 5, skill: "React", img: LogoReact },
      { id: 6, skill: "Redux", img: LogoRedux },
      { id: 7, skill: "Next.js", img: LogoNext },
      { id: 8, skill: "Sass", img: LogoSass },
    ],
  },

  {
    id: 2,
    title: "Frameworks",
    img: Img2,
    skills: [
      { id: 1, skill: "Bootstrap", img: LogoBoot },
      { id: 2, skill: "TailwindCSS", img: LogoTail },
      { id: 3, skill: "React Router", img: LogoReactRouter },
    ],
  },

  {
    id: 3,
    title: "Others",
    img: Img3,
    skills: [
      { id: 1, skill: "Canva", img: LogoCanva },
      { id: 2, skill: "Microsoft 365", img: LogoMicrosoft },
    ],
  },
];

export default skillsInfo;
