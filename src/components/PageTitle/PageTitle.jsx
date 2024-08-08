import { Social, PrimaryButton } from "../index";
import "./PageTitle.css";
import { motion } from "framer-motion";
import Resume from "../../assets/images/CV.png"

const PageTitle = () => {
  return (
    <>
    <div className="landing-title">
      <motion.div className="landing-text "
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 10 }}
        transition={{ duration: 1.5 }}
      >
        <p>
          Hello<span>,</span> Welcome
        </p>
        <p>Im Omar Ben Aroua</p>
        <p>
          And I<span>'</span>m a <span>Front-End Developer</span>
        </p>
        <Social />
        <PrimaryButton><a href={Resume} download="Omar_ben_aroua_CV" alt="">Download CV</a></PrimaryButton>
        
      </motion.div>
      </div>
    </>
  );
};

export default PageTitle;
