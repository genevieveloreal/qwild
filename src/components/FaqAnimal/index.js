import React from "react";
import FaqItem from "../FaqItem";
import "./styles.scss";

function FaqAnimal(props) {
  return (
    <>
      {props.items.map(item => (
        <FaqItem question={item.question} answer={item.answer} />
      ))}
    </>
  );
}

export default FaqAnimal;
