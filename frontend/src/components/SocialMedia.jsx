import React from "react";
import { BsInstagram, BsTwitterX, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  const username = "codexharoon";
  return (
    <div className="app__social">
      <div>
        <a href={`https://github.com/${username}`} target="_blank">
          <BsGithub />
        </a>
      </div>

      <div>
        <a href={`https://www.linkedin.com/in/${username}`} target="_blank">
          <FaLinkedinIn />
        </a>
      </div>

      <div>
        <a href={`https://www.instagram.com/${username}`} target="_blank">
          <BsInstagram />
        </a>
      </div>

      <div>
        <a href={`https://twitter.com/${username}`} target="_blank">
          <BsTwitterX />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
