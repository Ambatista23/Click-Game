import React from "react";
import "./style.css";


function Nav(props) {
    return (
      <nav className="Nav">
      <ul>
        <ol>
        Score: {props.score} | High Score: {props.highscore}
        </ol>
      </ul>
      </nav>
    );
  }
  
  export default Nav;