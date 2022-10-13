import { Link } from "gatsby";
import React from "react";
import ThemeSelector from "./theme-selector";

export default function Navbar() {
  return (
    <div className="terminal-nav">
      <header className="terminal-logo">
        <div className="logo terminal-prompt">
          <Link to="/" className="no-style">
            Mike Rogers' Blog
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
            >
              <span property="name">LinkedIn</span>
            </a>
          </li>
          <li property="itemListElement" typeof="ListItem">
            <a
              href="https://github.com/mikerogers123"
              property="item"
              typeof="WebPage"
              className="menu-item"
            >
              <span property="name">GitHub</span>
            </a>
          </li>
          <li property="itemListElement" typeof="ListItem">
            <a
              href="https://mikerogers.hashnode.dev/"
              property="item"
              typeof="WebPage"
              className="menu-item"
            >
              <span property="name">hashnode</span>
            </a>
          </li>
          <li property="itemListElement" typeof="ListItem">
            <Link to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <ThemeSelector></ThemeSelector>
          </li>
        </ul>
      </nav>
    </div>
  );
}
