import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode } from "@fortawesome/free-solid-svg-icons";

library.add(faCode);

export default function Footer() {
  return (
    <div>
      <hr></hr>
      <p>
        Made with <a href="https://www.gatsbyjs.com/docs/">GatsbyJS</a>, styled
        with <a href="https://terminalcss.xyz/">Terminal CSS</a>
      </p>
      <button
        className="btn btn-primary right"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://github.com/mikerogers123/blog";
        }}
      >
        <FontAwesomeIcon icon="code" />
      </button>
    </div>
  );
}
