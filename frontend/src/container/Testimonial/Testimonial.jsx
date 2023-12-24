import { useState, useEffect } from "react";
import "./Testimonial.scss";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const testIndex = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await client.fetch(`*[_type == "testimonials"]`);
      setTestimonials(data);
    };

    fetchTestimonials();
  });
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonials-item app__flex">
            <img src={urlFor(testIndex.image)} alt={testIndex.name} />
            <div className="app__testimonials-content">
              <p className="p-text">{testIndex.feedback}</p>
              <div>
                <h4 className="bold-text">{testIndex.name}</h4>
                <h5 className="p-text">{testIndex.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonials-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonials"),
  "testimonial",
  "app__primarybg"
);
