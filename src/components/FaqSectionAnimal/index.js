import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import FaqAnimal from "../FaqAnimal";
import "./styles.scss";

function FaqSectionAnimal(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="emergency-info">
          <span className="is-size-5 has-text-primary has-text-weight-bold">Emergency Contact Info</span>
          <p>RSPCA - <a href="tel:0">1300 264 625</a></p>
          <p>Queensland Parks and Wildlife Service - <a href="tel: 0">1300 130 372</a></p>
        </div>
        <FaqAnimal
          items={[
            {
              question: "Help, I've found an injured animal!",
              answer:
                "First of all, remain calm and ensure that you are safe from traffic or other hazards. Read on for further information."
            },
            {
              question: "Help, I've found an animal that is NOT injured but is not in its natural environment!",
              answer:
                "From time to time and especially in suburbia, animals can find themselves lost or far from their natural habitats. If you have found a small animal that is out of place and NOT injured and it is safe to do so, you can try to relocate the animal to a park or wildlife reserve yourself. Do not attempt to pick up snakes (if you have found a snake in your residence, call our contact numbers immediately). We always recommend using gloves or a blanket/towel if possible for both your safety and that of the animal. Small animals can be stored temporarily in a well ventilated box or animal carrier, out of direct sunlight. If you are unsure where to relocate the animal to, think is injured or are unable to do so safely yourself, we recommend calling one of our contact numbers above."
            },
            {
              question: "I've found an injured koala",
              answer:
                "If you come across an injured animal, clear the area of immediate danger. Try to create a space around the animal free of animals and people. Contact the appropriate authority, either RSPCA Queensland on 1300 ANIMAL (1300 264 625) or Queensland Parks and Wildlife Service on 1300 130 372. Try to stay with the animal until help is near as long as it is safe to do so."
            },
            {
              question: "I've found an injured snake",
              answer:
                "If you come across an injured animal, clear the area of immediate danger. Try to create a space around the animal free of animals and people. Contact the appropriate authority, either RSPCA Queensland on 1300 ANIMAL (1300 264 625) or Queensland Parks and Wildlife Service on 1300 130 372. Try to stay with the animal until help is near as long as it is safe to do so."
            },
            {
              question: "I've found an injured bird",
              answer:
                "If you come across an injured animal, clear the area of immediate danger. Try to create a space around the animal free of animals and people. Contact the appropriate authority, either RSPCA Queensland on 1300 ANIMAL (1300 264 625) or Queensland Parks and Wildlife Service on 1300 130 372. Try to stay with the animal until help is near as long as it is safe to do so."
            },
            {
              question: "I've found an injured possum",
              answer:
                "If you come across an injured animal, clear the area of immediate danger. Try to create a space around the animal free of animals and people. Contact the appropriate authority, either RSPCA Queensland on 1300 ANIMAL (1300 264 625) or Queensland Parks and Wildlife Service on 1300 130 372. Try to stay with the animal until help is near as long as it is safe to do so."
            },
            {
              question: "I've found an injured bat",
              answer:
                "If you come across an injured animal, clear the area of immediate danger. Try to create a space around the animal free of animals and people. Contact the appropriate authority, either RSPCA Queensland on 1300 ANIMAL (1300 264 625) or Queensland Parks and Wildlife Service on 1300 130 372. Try to stay with the animal until help is near as long as it is safe to do so."
            },
            {
              question: "I've found an injured wallaby or kangaroo",
              answer:
                "If you come across an injured animal, clear the area of immediate danger. Try to create a space around the animal free of animals and people. Contact the appropriate authority, either RSPCA Queensland on 1300 ANIMAL (1300 264 625) or Queensland Parks and Wildlife Service on 1300 130 372. Try to stay with the animal until help is near as long as it is safe to do so."
            },
            {
              question: "I've found an injured wild dog",
              answer:
                "If you come across an injured animal, clear the area of immediate danger. Try to create a space around the animal free of animals and people. Contact the appropriate authority, either RSPCA Queensland on 1300 ANIMAL (1300 264 625) or Queensland Parks and Wildlife Service on 1300 130 372. Try to stay with the animal until help is near as long as it is safe to do so."
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FaqSectionAnimal;
