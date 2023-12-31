import { useEffect, useState } from "react";
import "./Work.scss";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const Work = () => {
  const [active, setActive] = useState("All");
  const [animateCard, setAnimateCard] = useState({
    y: 0,
    opacity: 1,
  });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const handleWorkFilter = (item) => {
    setActive(item);
    setAnimateCard({
      y: 100,
      opacity: 0,
    });

    setTimeout(() => {
      setAnimateCard({
        opacity: 1,
        y: 0,
      });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(
          works.filter((work) => work.tags && work.tags.includes(item))
        );
      }
    }, 500);
  };

  useEffect(() => {
    const fetchWorks = async () => {
      const works = await client.fetch(`*[_type == "works"]`);
      setWorks(works);
      setFilterWork(works);
    };

    fetchWorks();
  }, []);
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span>
      </h2>

      <div className="app__work-filter">
        {["Web Apps", "Mobile Apps", "All"].map((item, index) => (
          <div
            key={`${item + index}`}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              active === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={`${work + index}`}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={`${work.title}`} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "backInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__whitebg");
