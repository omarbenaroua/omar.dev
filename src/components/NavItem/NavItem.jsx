import "./NavItem.css";
import { motion } from "framer-motion";

const NavItem = (props) => {
  return (
    <>
      <motion.div className=".nav-item"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
      <div className="nav-item">{props.children}</div>
      </motion.div>
    </>
  );
};

export default NavItem;
