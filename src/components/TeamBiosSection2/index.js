import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import TeamBios2 from "./../TeamBios2";
import "./styles.scss";

function TeamBiosSection2(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <TeamBios2
          people={[
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
              name: "John Smith",
              role: "CEO"
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
              name: "Lisa Zinn",
              role: "CTO"
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Diana Low",
              role: "Designer"
            },
            {
              avatar: "https://i.pravatar.cc/150?img=5",
              name: "Niomi Clay",
              role: "Software Engineer"
            },
            {
              avatar: "https://i.pravatar.cc/150?img=6",
              name: "Tim Wesley",
              role: "Software Engineer"
            },
            {
              avatar: "https://i.pravatar.cc/150?img=7",
              name: "Shawn David",
              role: "Marketing"
            },
            {
              avatar: "https://i.pravatar.cc/150?img=8",
              name: "Ian Gold",
              role: "Marketing"
            },
            {
              avatar: "https://i.pravatar.cc/150?img=10",
              name: "Ali Pine",
              role: "Software Engineer"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TeamBiosSection2;
