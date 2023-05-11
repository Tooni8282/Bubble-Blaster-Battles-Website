# Bubble-Blaster-Battles-Website

The home of the Bubble Blaster Battles Website build-grounds.



## Repository Structure

- **docs** > The folder that is served up by GitHub Pages to the web.
  - **css** > The styles-source file contains CSS components and essential Tailwind CSS packages. The styles file is the output CSS file that is used by the website. It is producted by styles-source and all Tailwind CSS classes in files within the `./docs` folder.
  - **images** > All the images used in the website. All images are first compressed as png's by [compresspng.com](https://compresspng.com/), and then converted to webp format to reduce the filesize even further without losing noticeable quality.
  - **packages** > All the utility JS files from packages used by the website. See notes underneath the node-module folder description below for more information about why these files are here.
  - **videos** > All the videos used in the website. They are compressed and contain mp4 and webm formats in case a browser only supports one of the formats and not the other.
  - **CNAME** > File that specifies the custom domain name for GitHub Pages.
  - **index.html** > All the HTML and JS for the website's main page.

- **node-module** > All the node module packages installed through NPM.
  - *Note:* In order for the Bubbly Background, Tailwind Elements and GreenSock Animation packages to work server side, their utility JS files were moved to be within the `./docs` folder so that they would be accessable when the files are served up on the web. The following files have modified file paths to support this:
    - `./node_modules/bubbly-bg/package.json`
    - `./node_modules/tw-elements/package.json`
    - `./node_modules/tw-elements/dist/package.json`
    - `./node_modules/tw-elements/dist/js/index.min.js.map`

- **package.json** > Details of the project along with the project scripts.

- **package-lock.json** > All the dependancy packages for the project.

- **tailwind.config.js** > Configuration file for Tailwind CSS, including screen breakpoints, plugins and other custom configurations.


## Miscellaneous

- When ./docs/index.html is modified, recompile the `./docs/css/styles.css` file by running the command `npm run build-styles-css`. When publishing the changes, make sure to minify the `./docs/css/styles.css` file using the command `npm run minify-styles-css`.
> However there is currently an issue with the command mentioned above, so read the alternative below.

- The built in CSS minifier by Tailwind CSS (command: `npm run minify-styles-css`) currently has an issue that causes the site to appear partially broken when used. For now, use an [external CSS minifier](https://www.toptal.com/developers/cssminifier) for the `./docs/css/styles.css` file instead.