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
        <small>
          Built with <a href="https://www.gatsbyjs.com/docs/">GatsbyJS</a>,
          styled using <a href="https://terminalcss.xyz/">Terminal CSS</a>
        </small>
      </p>
      <button
        className="btn btn-ghost right"
        onClick={(e) => {
          e.preventDefault();
          window
            .open("https://github.com/mikerogers123/blog", "_blank")
            ?.focus();
        }}
      >
        <FontAwesomeIcon icon="code" />
      </button>
    </div>
  );
}
