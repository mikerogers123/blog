import React from "react";

export default function Footer() {
    return (
        <div>
            <hr></hr>
            Made with <a href="https://www.gatsbyjs.com/docs/">GatsbyJS</a>, styled with <a href="https://terminalcss.xyz/">Terminal CSS</a>
            <a className="right" href="https://github.com/mikerogers123/blog">Version {process.env.VERSION}</a>
        </div>
    );
}
