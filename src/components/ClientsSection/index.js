import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Clients from "./../Clients";
import GoldCoastLogo from "../../image/gccc-logo.png";
import GovHackLogo from "../../image/govhack-logo.png";
import BrisbaneLogo from "../../image/bcc-logo.png";
import LoganLogo from "../../image/lcc-logo.png";
import QueenslandLogo from "../../image/qgov-logo.png";
import "./styles.scss";

function ClientsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Clients
          items={[
            {
              name: "Queensland Government",
              image: QueenslandLogo,
              width: "60px"
            },
            {
              name: "Gold Coast City Council",
              image: GoldCoastLogo,
              width: "135px"
            },
            {
              name: "Brisbane City Council",
              image: BrisbaneLogo,
              width: "150px"
            },
            {
              name: "Logan City Council",
              image: LoganLogo,
              width: "220px"
            },
            {
              name: "GovHack",
              image: GovHackLogo,
              width: "90px"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default ClientsSection;
