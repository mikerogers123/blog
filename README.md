# Mike Rogers - personal blog

Site accessible at https://mrogers.dev/.

## 🚀 Features

* Built using the popular GatsbyJS framework for a better user experience
* Full TypeScript integration
* [Terminal CSS](https://terminalcss.xyz/) used as a CSS framework
* Dark/light themes - user preference persisted
* Gatsby Cloud used for rapid deployments and easy hosting

## App overview

Post sources:
* https://hashnode.com/@mikerogers
* https://medium.com/@mike.rogers.jet

The posts are retrieved using the [gatsby-source-hashnode plugin](https://www.gatsbyjs.com/plugins/gatsby-source-hashnode/) and [gatsby-source-medium-feed](https://www.gatsbyjs.com/plugins/gatsby-source-medium-feed/) plugins. The key thing to note is that requests to retrieve posts is not made on load, but **only** when the site is built. The end result is that this site is completely static (no API requests or page loads when navigating between pages), giving better performance and overall user experience. This was a key reason for choosing Gatsby; the pages for each blog post are generated during the build process.

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

    The site runs at http://localhost:8000.

    Edit any `<component>.tsx` file to see updates in real-time.

4.  **Learn more about GatsbyJS**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## 🚀 Continuous Integration/Delivery

Site is deployed and hosted with [Gatsby Cloud](https://www.gatsbyjs.com/cloud/).

Changes to the `main` branch triggers a build of the site. 

> note that if there are any new blog posts on my _hashnode_ feed, they will only be shown if there has been a subsequent build of the site, since posts are retrieved once per build.
