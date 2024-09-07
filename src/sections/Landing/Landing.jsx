import "./Landing.css";
import {PageTitle, Symbols} from "../../components/index";
import Img from "../../assets/images/01.png";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <>
      <div className="landing">
      <motion.div className=""
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 5 }}
        transition={{ duration: 2.5 }}>
        <img src={Img} className="img-fluid" alt=""/>
        <div className="cover-image"></div>
        </motion.div>
        <PageTitle/>
        <div className="overlay"></div>
      </div>
      <Symbols />
    </>
  );
};

export default Landing;
