import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Faq from "./../Faq";
import "./styles.scss";

function FaqSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Faq
          items={[
            {
              question: "What is QWild?",
              answer:
                "QWild is an prototype React Web App for GovHack 2019, utilising various datasets to provide a proof of concept."
            },
            {
              question: "What does QWild do?",
              answer:
                "Queensland is known for its variety of wildlife and with temperatures increasing and 60% of Queensland in drought, local wildlife volunteer groups come under strain, especially when some calls could be avoided if people had the right information. QWild aims to help Queensland residents on local wildlife in their area and provide care instructions / contact numbers incase they come across an injured animal."
            },
            {
              question: "How can I help?",
              answer:
                "You can help by using our online resources to learn more about the variety of species you share your backyard with, by watching out for signs of illness or injury in wild animals, helping us preserve natural habits by disposing of rubbish responsibly and reporting injured wildlife to the relevant organisations."
            },
            {
              question: "Where can I find more information?",
              answer:
                "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo."
            },
            {
              question: "I've found an injured or distressed animal. What should I do?",
              answer:
                "If you come across an injured animal, clear the area of immediate danger. Try to create a space around the animal free of animals and people. Contact the appropriate authority, either RSPCA Queensland on 1300 ANIMAL (1300 264 625) or Queensland Parks and Wildlife Service on 1300 130 372. Try to stay with the animal until help is near as long as it is safe to do so."
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FaqSection;
