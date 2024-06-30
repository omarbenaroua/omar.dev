import "./Logo.css";
import Img from "../../assets/icons/logo_small.png";
import Img2 from "../../assets/icons/logo_large.png";
import cover from "../../assets/icons/logo_cover.png"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
    <Link to="/" className="nav-link">
      <img className="logo" src={Img} alt=""></img>
    </Link>
    </>
  );
};

const LogoSecondary = () => {
  return (
    <>
    <Link to="/" className="nav-link">
      <img className="logo" src={Img2} alt=""></img>
    </Link>
    </>
  );
};

const LogoCover = () => {
  return (
    <>
        <motion.div className=".nav-item"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
    <img className='logo-cover' src={cover} alt="" />
    </motion.div>
    </>
  )
}

export default Logo;
export {LogoSecondary ,LogoCover};
