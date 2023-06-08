import React from "react";
import PropTypes from "prop-types";

function RoadMapItem({ item }) {
  return (
    <div
      key={item.id}
      className={`rm-box ${item.positon}`}
      data-aos="zoom-in"
      data-aos-duration="1200">
      <div className={`corner-box ${item.style}`}>
        <h5>{item.time}</h5>
        <ul>
          {item.list.map((li, idx) => (
            <li key={idx}>{li.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RoadMapItem;
