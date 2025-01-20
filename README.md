[![Netlify Status](https://api.netlify.com/api/v1/badges/5169c970-5584-4365-a5fc-7d2e9f2867f1/deploy-status)](https://app.netlify.com/sites/mrogers-blog/deploys)

# mrogers.dev

Mike Rogers' personal blog.

## 🚀 Features

* Built using the GatsbyJS framework
* Full TypeScript integration
* [Terminal CSS](https://terminalcss.xyz/) used as a CSS framework
* Dark/light themes - user preference persisted
* Gatsby Cloud used for rapid deployments and easy hosting

## App overview

Post sources:
* https://medium.com/@mikerogers1357
* https://medium.com/@mike.rogers.jet

The posts are retrieved using the [gatsby-source-medium-feed](https://www.gatsbyjs.com/plugins/gatsby-source-medium-feed/) plugin. The key thing to note is that requests to retrieve posts is not made on load, but **only** when the site is built. The end result is that this site is completely static (no API requests or page loads when navigating between pages), giving better performance and overall user experience. This was a key reason for choosing Gatsby; the pages for each blog post are generated during the build process.

## 🚀 Quick start

1.  **Set up your development environment.**

    Install the necessary dependencies on your machine:
    * **Git** [Windows](https://www.atlassian.com/git/tutorials/install-git#windows) | [macOS](https://www.atlassian.com/git/tutorials/install-git#mac-os-x) | [Linux](https://www.atlassian.com/git/tutorials/install-git#linux)
    * **Node.js** you’ll need to have Node.js version >=14.15. Installation instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
    * **Gatsby command line interface (CLI)** install globally via: ```npm install -g gatsby-cli```

    The Gatsby docs have a very detailed guide on this as well - https://www.gatsbyjs.com/docs/tutorial/part-0.

2.  **Clone the repo.**

    Using your preferred terminal, choose what directory you'd like the code to live in, and navigate to it. Then clone the repo:

    ```shell
    git clone https://github.com/mikerogers123/blog.git
    ```

3.  **Start the site.**

    Navigate into the new directory and start the site:

    ```shell
    cd blog/
    npm run develop
    ```

    The site runs at http://localhost:8000. Edit any file to see updates in real-time (unless you change `gatsby-node.ts` - then you will need a fresh build).

## 🚀 Continuous Integration/Delivery

Site is deployed and hosted with [Gatsby Cloud](https://www.gatsbyjs.com/cloud/).
