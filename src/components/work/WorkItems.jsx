import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
      <div className="work__demo">
        <a href={item.link} target="_blank" className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
