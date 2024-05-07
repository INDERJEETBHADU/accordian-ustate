import React from "react";
const Accordion = ({ title, content, isOpen, toggleAccordion }) => {
  return (
      <div>
          
      <div className="accordion_small_box  mb-4 ">
        <div
          className=" d-flex  justify-content-between"
          onClick={toggleAccordion}
        >
          {title}
          <span>{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && <div className=" pt-3 para">{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
