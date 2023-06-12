import React from "react";
import { FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <hr></hr>
      <p>
        <small>
          Built with <a href="https://www.gatsbyjs.com/docs/" target="_blank" rel="noopener noreferrer">GatsbyJS</a>,
          styled using <a href="https://terminalcss.xyz/" target="_blank" rel="noopener noreferrer">Terminal CSS</a>
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
        <FaCode />
      </button>
    </div>
  );
}
