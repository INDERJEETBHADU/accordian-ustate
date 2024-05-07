import './App.css';
import Accordion from './Accordian';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <div>
      <h2 className=' text-center'>Accordian With Use-State</h2>

      <div class=" d-flex justify-content-center mt-5">
        <div className="accordion_box  ">
          <Accordion
            title="Section 1"
            content="This is the content of section 1  his is the content of section 1  his is the content of section 1  his is the content of section 1  his is the content of section 1"
            isOpen={openIndex === 0}
            toggleAccordion={() => toggleAccordion(0)}
          />
          <Accordion
            title="Section 2"
            content="This is the content of section 1  his is the content of section 1  his is the content of section 1  his is the content of section 1  his is the content of section 1"
            isOpen={openIndex === 1}
            toggleAccordion={() => toggleAccordion(1)}
          />
          <Accordion
            title="Section 3"
            content="This is the content of section 1  his is the content of section 1  his is the content of section 1  his is the content of section 1  his is the content of section 1"
            isOpen={openIndex === 2}
            toggleAccordion={() => toggleAccordion(2)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
