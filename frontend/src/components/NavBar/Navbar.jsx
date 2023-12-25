import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { images } from "../../constants";

const Navbar = () => {
  const [toogle, setToogle] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Code x Haroon" />
      </div>

      <ul className="app__navbar-links">
        {["home", "about", "skills", "work", "contact"].map((item, index) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToogle(true)} />

        {toogle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToogle(false)} />
            <ul>
              {[
                "home",
                "about",
                "skills",
                "work",
                "testimonial",
                "contact",
              ].map((item, index) => (
                <li key={`${item}`} onClick={() => setToogle(false)}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
