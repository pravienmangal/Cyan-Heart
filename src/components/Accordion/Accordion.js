import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const Accordion = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const accordionClickHandler = i => {
    setSelectedItem(i);
    setIsOpen(!isOpen);
  };

  return (
    <section className="accordian-section container">
      <h2 className="heading-2 transition-start">{label}</h2>

      <dl className="accordian">
        {options &&
          options.map((option, index) => (
            <div
              key={option.id}
              className={clsx("transition-start accordion-item", index === selectedItem && isOpen ? "collapse" : "")}
              onClick={() => accordionClickHandler(index)}
            >
              <dt>
                <h3>{option.question}</h3>
              </dt>
              <dd>
                <p className="inner-content">{option.answer}</p>
              </dd>
            </div>
          ))}
      </dl>
    </section>
  );
};

Accordion.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    }).isRequired
  )
};

export default Accordion;