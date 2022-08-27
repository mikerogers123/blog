import { Link } from "gatsby";
import React from "react";
import ThemeSelector from "./theme-selector";

export default function Layout({ children }:any) {
  return (
    <main>
      <div className="container">
        <div className="terminal-nav">
          <header className="terminal-logo">
            <div className="logo terminal-prompt"><Link to="/" className="no-style">Mike Rogers' Blog</Link></div>
          </header>
          <nav className="terminal-menu">
            <ul vocab="https://schema.org/" typeof="BreadcrumbList">
              <li>                
                <ThemeSelector></ThemeSelector>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container">
        {children}
      </div>
    </main>
  );
}
