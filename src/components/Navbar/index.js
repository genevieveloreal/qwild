import React, { useState } from "react";
import NavbarContainer from "./../NavbarContainer";
import { Link } from "./../../util/router.js";
import { useAuth } from "./../../util/auth.js";
import "./styles.scss";

function Navbar(props) {
  const auth = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <img className="image" src={props.logo} alt="Logo" />
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            {auth.user && (
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/">
                  Account
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <Link className="navbar-item" to="/dashboard">
                    Dashboard
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/signout"
                    onClick={e => {
                      e.preventDefault();
                      auth.signout();
                    }}
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}
            <Link className="navbar-item" to="/faq">
              About
            </Link>
            <Link className="navbar-item" to="/faq-animal">
              Injured Animal Info
            </Link>
            <a className="navbar-item" href="https://ivanvonchrist.github.io/ar-demo">
              QWild Card Scanner
            </a>
            <Link className="navbar-item contact-button" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
