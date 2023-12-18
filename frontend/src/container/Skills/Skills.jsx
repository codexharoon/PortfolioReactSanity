import "./Skills.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Tooltip } from "react-tooltip";

import React from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "skills"]').then((data) => setSkills(data));
    client
      .fetch('*[_type == "experiences"]')
      .then((data) => setExperience(data));
  }, []);
  return (
    <>
      <h2 className="head-text">
        Skills <span>&</span> Experience
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={`skill-${skill.name + index}`}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: `${skill.bgColor}` }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>

              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience.map((exp, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={`${exp.year + index}`}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {exp.works.map((work, index) => (
                  <div key={`${work.name + index}`}>
                    <motion.div
                      className="app__skills-exp-work"
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      data-tooltip-id={work.name}
                      data-tooltip-content={work.desc}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    <Tooltip id={work.name} />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);
