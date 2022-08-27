import { Link } from "gatsby";
import React from "react";

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
                <a href="https://github.com/mikerogers123" className="menu-item active"><span>GitHub</span></a>
                <meta property="position" />
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
