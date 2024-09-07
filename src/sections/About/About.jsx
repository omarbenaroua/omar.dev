import "./About.css";
import img from "../../assets/images/02.png";
import { Title } from "../../components/index";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import {motion} from "framer-motion"

const About = () => {

  const ref = useRef(null)

  //scroll button
  const scroll = () => {
    ref.current.scrollIntoView({behavior: "smooth",block: "center", inline: "nearest"});
  }

  // scroll progress
  const { scrollYProgress } = useScroll({
    target:ref,
    offset:["0 1.5", "0.9 1"]
  })
  return (
    <>
    <div className="about ">
    <motion.div ref={ref} style={{scale: scrollYProgress, opacity: scrollYProgress}}>
      <Title onClick={scroll}>About Me</Title>
      <div className="about-text" >
        <p>
          I’m <span>Omar</span>, an aspiring front-end developer with a passion for the digital world and a strong desire to break into the industry.
          After learning the fundamentals of <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>, I’ve dived into modern technologies to
          create user interfaces that are intuitive and engaging.
          Over the past few months, I’ve expanded my knowledge by working with <span>React.js</span>, <span>Next.js</span>, and tools like <span>Redux</span>
          ,<span>React Router</span>, <span>TailwindCSS</span>, <span>Bootstrap</span>, <span>Figma</span>, <span>TypeScript</span>, and <span>Sass</span>.
          I’m excited by how these technologies enable the creation of dynamic, responsive web experiences, and it’s this innovation that drives me to explore new solutions continuously.
          Although I’m at the beginning of my career, I’m determined to improve constantly, with a curious mindset and an openness to new design and web development trends. I’m eager to
          collaborate with teams and clients to apply my knowledge, tackle new challenges, and contribute to innovative projects.
          I believe front-end development is a space full of creativity, and I’m excited to make my way into this field. Working with me means collaborating with someone who is dedicated, 
          passionate, and always ready to learn, with the goal of growing and adding value to every project.
          I’m ready to step up and contribute to building web experiences that can make a real difference.
        </p>
        <img src={img} alt=" " /> 
        </div>
      </motion.div>
      </div>
    </>
  );
};

export default About;
