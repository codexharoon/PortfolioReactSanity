import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";

const About = () => {
  const abouts = [
    {
      title: "Frontend Engineer",
      desc: "I am frontend engineer with experience in building web applications using ReactJS and other cool libraries and frameworks.",
      imgURL: images.frontend,
    },
    {
      title: "Backend Engineer",
      desc: "I am backend engineer with experience in building web applications using Node & Express JS and other cool libraries and frameworks.",
      imgURL: images.backend,
    },
    {
      title: "Devops Engineer",
      desc: "i am devops engineer with experience in building web applications using Docker, AWS and other cool tools and technologies.",
      imgURL: images.devops,
    },
  ];
  return (
    <>
      <h2 className="head-text" style={{ marginTop: 40 }}>
        I Know that
        <span> Good Quality </span>
        <br />
        means
        <span> Good Business </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={`about-${about.title}-${index}`}
            className="app__profile-item"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
