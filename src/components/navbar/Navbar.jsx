import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="https://www.malt.fr/profile/kyliantronchon">
            <img src="/malt.png" alt="malt" />
          </a>
          <a href="https://www.linkedin.com/in/kylian-tronchon-16b1761b7/">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
