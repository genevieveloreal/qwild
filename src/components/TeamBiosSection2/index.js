import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import TeamBios2 from "./../TeamBios2";
import Bird from "../../image/bird.jpg";
import CarpetSnake from "../../image/carpetsnake.jpg";
import Dingo from "../../image/dingo.jpg";
import Kangaroo from "../../image/kangaroo.jpg";
import Koala from "../../image/koala.jpg";
import Possum from "../../image/possum.jpg";
import SugarGlider from "../../image/sugarglider.jpg";
import Wallaby from "../../image/wallaby.jpg";
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
              avatar: Bird,
              name: "Bird",
              yugara: "Juwanbin",
              yugarabul: "Juwahnduwan",
              yugambeh: "Noangbil",
              turubul: "Juwahnduwan"
            },
            {
              avatar: Koala,
              name: "Koala",
              yugara: "Dumbirrbi",
              yugarabul: "Marrambi",
              yugambeh: "Borobi",
              turubul: "Dumbirrbi"
            },
            {
              avatar: Wallaby,
              name: "Wallaby",
              yugara: "Garril",
              yugarabul: "Garril",
              yugambeh: "Karil",
              turubul: "Garril"
            },
            {
              avatar: CarpetSnake,
              name: "Carpet Snake",
              yugara: "Kabul",
              yugarabul: "Kabul",
              yugambeh: "Kabul",
              turubul: "Kabul"
            },
            {
              avatar: Possum,
              name: "Possum",
              yugara: "Kubbi",
              yugarabul: "Kubbi",
              yugambeh: "Guran",
              turubul: "Kubbi"
            },
            {
              avatar: SugarGlider,
              name: "Sugar Glider",
              yugara: "Chibur",
              yugarabul: "Chibur",
              yugambeh: "Jiburr",
              turubul: "Chibur"
            },
            {
              avatar: Dingo,
              name: "Wild Dog",
              yugara: "Mirri",
              yugarabul: "Mirri",
              yugambeh: "Ngurun",
              turubul: "Mirri"
            },
            {
              avatar: Kangaroo,
              name: "Kangaroo",
              yugara: "Barrar",
              yugarabul: "Burrar",
              yugambeh: "Muni",
              turubul: "Gurooman"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TeamBiosSection2;
