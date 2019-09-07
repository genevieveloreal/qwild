import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import QWildImage from "./../../image/qwild-phone.jpg";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "Found a QWild Card?",
              description:
                "If you've found a QWild Card, simply click the button below and point your camera at the card to learn more.",
              image: QWildImage,
              buttonText: "Scan QWild Card...",
              buttonLink: "http://ivanvonchrist.github.io/ar-demo"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
