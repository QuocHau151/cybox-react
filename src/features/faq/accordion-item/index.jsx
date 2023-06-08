import React from "react";
import PropTypes from "prop-types";
import { Accordion } from "react-bootstrap-accordion";

function AccordionItem({ item }) {
  return (
    <Accordion key={item.id} title={item.title} show={item.show}>
      <p className="toggle-content">{item.content}</p>
    </Accordion>
  );
}

export default AccordionItem;
