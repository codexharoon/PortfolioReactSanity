import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "skills", "work", "testimonial", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={`nav-dot-${item + index}`}
            className={`app__navigation-dot`}
            style={active === item ? { backgroundColor: "#313bac" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
