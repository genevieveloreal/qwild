import React from "react";
import CenteredColumns from "./../CenteredColumns";
import Avatar from "./../Avatar";
import "./styles.scss";

class TeamBios2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "Yugara"
    };
  }

  changeLanguageToYugara = () => {
    this.setState({language: "Yugara"});
    console.log(this.state.language);
  }

  changeLanguageToYugarabul = () => {
    this.setState({language: "Yugarabul"});
    console.log(this.state.language);
  }

  changeLanguageToYugambeh = () => {
    this.setState({language: "Yugambeh"});
    console.log(this.state.language);
  }

  changeLanguageToTurubul = () => {
    this.setState({language: "Turubul"});
    console.log(this.state.language);
  }
 
  render() {
    return(
      <CenteredColumns>
        {this.props.people.map((person, index) => (
          <div className="column is-one-quarter has-text-centered" key={index}>
            <div className="TeamBios2__person">
              <div className="TeamBios2__avatar-wrapper">
                <a href="/faq-animal">
                  <Avatar image={person.avatar} size={128} alt={person.name} />
                </a>
              </div>
              <div className="TeamBios2__details">
                <p className="is-size-5">{person.name}</p>
                { this.state.language === "Yugara" &&
                  <p className="is-size-6 has-text-weight-semibold" id="purple">{person.yugara}</p>
                }
                { this.state.language === "Yugarabul" &&
                  <p className="is-size-6 has-text-weight-semibold" id="purple">{person.yugarabul}</p>
                }
                { this.state.language === "Yugambeh" &&
                  <p className="is-size-6 has-text-weight-semibold" id="purple">{person.yugambeh}</p>
                }                  
                { this.state.language === "Turubul" &&
                  <p className="is-size-6 has-text-weight-semibold" id="purple">{person.turubul}</p>
                }
                <a href="/faq-animal" className="button is-primary is-small is-normal margin-top">
                  View more
                </a>
              </div>
            </div>
          </div>
        ))}
        <div className="lang-container center">
          <h2 className="lang-h2">Current Indigenous language: <span>{this.state.language}</span></h2>
          <p>Click below to translate wildlife names into local Indigenous languages</p>
          <div className="lang">
            <button 
              className="button is-primary is-medium"
              onClick={this.changeLanguageToYugara}
            >
              Yugara
            </button>
            <button 
              className="button is-primary is-medium"
              onClick={this.changeLanguageToYugarabul}
            >
              Yugarabul
            </button>
            <button 
              className="button is-primary is-medium"
              onClick={this.changeLanguageToYugambeh}
            >
              Yugambeh
            </button>
            <button 
              className="button is-primary is-medium"
              onClick={this.changeLanguageToTurubul}
            >
              Turubul
            </button>
          </div>
        </div>
      </CenteredColumns>
    )
  }
}

// function TeamBios2(props) {
//   return (
//     <CenteredColumns>
//       {props.people.map((person, index) => (
//         <div className="column is-one-quarter has-text-centered" key={index}>
//           <div className="TeamBios2__person">
//             <div className="TeamBios2__avatar-wrapper">
//               <Avatar image={person.avatar} size={128} alt={person.name} />
//             </div>
//             <div className="TeamBios2__details">
//               <p className="is-size-5">{person.name}</p>
//               <p className="is-size-7 has-text-weight-semibold has-text-grey">
//                 {person.role}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </CenteredColumns>
//   );
// }

export default TeamBios2;
