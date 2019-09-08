import React from "react";
import FaqSectionAnimal from "../../components/FaqSectionAnimal";
import "./styles.scss";

function FaqPage(props) {
  return (
    <div>
      <FaqSectionAnimal
        color="white"
        size="medium"
        title="Injured Wildlife Information"
        subtitle=""
      />
    </div>
  );
}

export default FaqPage;
