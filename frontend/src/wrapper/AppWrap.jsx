import { SocialMedia, NavigationDots } from "../components";

const AppWrap = (Component, idName, classNames = "") =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          {/* <div className="copyright">
            <p className="p-text">&copy; 2024 &middot; Code x Haroon</p>
            <p className="p-text">All Rights Reserved!</p>
          </div> */}
        </div>

        <NavigationDots />
      </div>
    );
  };

export default AppWrap;
