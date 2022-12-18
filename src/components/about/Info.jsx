import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-search-alt about__icon"></i>
        <h3 className="about__title">客觀與理性思維</h3>
        {/* <span className="about__subtitle">8 Years Working</span> */}
      </div>

      <div className="about__box">
        <i className="bx bx-shield about__icon"></i>
        <h3 className="about__title">做事負有責任感</h3>
        {/* <span className="about__subtitle">48 + Projects</span> */}
      </div>

      <div className="about__box">
        <i class="bx bx-message-square-dots about__icon"></i>
        <h3 className="about__title">喜愛溝通交流</h3>
        {/* <span className="about__subtitle">Online 24/7</span> */}
      </div>
    </div>
  );
};

export default Info;
