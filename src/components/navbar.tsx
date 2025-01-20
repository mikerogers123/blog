import { Link } from "gatsby";
import React from "react";
import ThemeSelector from "./theme-selector";
import { FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="terminal-nav">
      <header className="terminal-logo">
        <div className="logo terminal-prompt">
          <Link to="/" className="no-style">
            Mike Rogers | Blog
          </Link>
        </div>
      </header>
      <nav className="terminal-menu">
        <ul vocab="https://schema.org/" typeof="BreadcrumbList">
          <li property="itemListElement" typeof="ListItem">
            <a
              href="https://www.linkedin.com/in/michael-james-rogers"
              property="item"
              typeof="WebPage"
              className="menu-item"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <ThemeSelector></ThemeSelector>
          </li>
        </ul>
      </nav>
    </div>
  );
}
