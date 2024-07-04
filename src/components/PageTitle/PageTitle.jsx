import { Social, PrimaryButton } from "../index";
import "./PageTitle.css";
import { motion } from "framer-motion";

const PageTitle = () => {
  return (
    <>
    <div className="lading-title">
      <motion.div className="lading-text container"
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
        <PrimaryButton>my cv</PrimaryButton>
      </motion.div>
      </div>
    </>
  );
};

export default PageTitle;
