import "./About.css";
import img from "../../assets/images/cover.jpg";
import { Title } from "../../components/index";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import {motion} from "framer-motion"

const About = () => {

  const ref = useRef(null)

  //scroll button
  const scroll = () => {
    ref.current.scrollIntoView({behavior: "smooth",block: "end", inline: "nearest"});
  }

  // scroll progress
  const { scrollYProgress } = useScroll({
    target:ref,
    offset:["0 1.5", "0.5 1"]
  })
  return (
    <>
    <div className="about container">
    <motion.div ref={ref} style={{scale: scrollYProgress, opacity: scrollYProgress}}>
      <Title onClick={scroll}>About Me</Title>
      <div className="about-text" >
        <p>
          "Sono <span>Omar</span>, un giovane e appassionato
          nello sviluppo siti web <span>front-end</span> con una fervente passione per il mondo
          digitale. La mia missione è tradurre creatività in codice,
          trasformando idee in straordinarie esperienze web. Guidato da una
          costante ricerca dell'eccellenza, mi impegno a creare design
          coinvolgenti e interattivi che si distinguono nel panorama online. Con
          una solida conoscenza di <span>HTML</span>, <span>CSS</span> e <span>JavaScript</span>, sono in grado di
          costruire interfacce utente intuitive e responsive. Abbraccio le nuove
          tecnologie e i framework più avanzati come <span>React</span>, sfruttando
          al massimo il potenziale del front-end. La mia attenzione ai dettagli
          si riflette in siti web esteticamente accattivanti e altamente
          performanti. Oltre alla mia abilità tecnica, sono un curioso per
          natura, costantemente alla ricerca di ispirazione nelle tendenze del
          design e nelle sfide creative. Mi entusiasma affrontare nuovi progetti
          e collaborare con clienti per portare le loro visioni alla realtà
          digitale. La mia dedizione alla perfezione e la mia capacità di
          risolvere problemi mi rendono un elemento prezioso per ogni squadra di
          sviluppo front-end. Sono pronto ad affrontare qualsiasi sfida, sempre
          alla ricerca del miglioramento continuo. Lavorare con me significa
          collaborare con un professionista appassionato, creativo e dedicato a
          creare esperienze web straordinarie che superano ogni aspettativa.
          Unisciti a me nel mondo affascinante del front-end, e insieme
          porteremo le tue idee al successo online."
        </p>
        <img src={img} alt=" " /> 
        </div>
      </motion.div>
      </div>
    </>
  );
};

export default About;
