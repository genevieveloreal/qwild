import React from "react";
import CenteredColumns from "./../CenteredColumns";
import Avatar from "./../Avatar";
import "./styles.scss";

function TeamBios2(props) {
  return (
    <CenteredColumns>
      {props.people.map((person, index) => (
        <div className="column is-one-quarter has-text-centered" key={index}>
          <div className="TeamBios2__person">
            <div className="TeamBios2__avatar-wrapper">
              <Avatar image={person.avatar} size={128} alt={person.name} />
            </div>
            <div className="TeamBios2__details">
              <p className="is-size-5">{person.name}</p>
              <p className="is-size-7 has-text-weight-semibold has-text-grey">
                {person.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default TeamBios2;
