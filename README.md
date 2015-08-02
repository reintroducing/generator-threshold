# Threshold
When I start a new project I'm all about efficiency and usually use the same things from project to project. I don't like to copy/paste files around so I ended up creating a few grunt-init templates to get up and running quickly.

This was great until it turned into a giant chore to update dependencies of npm packages across three different repos, duplicating files when stuff got updated, etc.  I decided to write a Yeoman generator and be done with it.

This will allow me to easily add new frameworks and lessen the burden of managing multiple repos.

## Features
* BrowserSync for local server and live reloading
* Complete Gulp setup
* Sass with a few useful mixins
* ESLint
* CSS Autoprefixing
* Sourcemapping of CSS and JS (when using Browserify)
* Minification of CSS and JS
* Image minification **(requires JPEGmini but can be turned off)**
* Stub JS code depending on what/if a framework is chosen
* Options
  * Browserify with Watchify
  * ES6 (Babel)
  * jQuery
  * Backbone with Lodash
  * React (with additional React ESLint enabled)
  * CSS sprite generation
  * Icon font support (in conjunction with [IcoMoon](https://icomoon.io/))

## Usage
1. If you don't already have Yeoman installed you'll need to install it as well.
  * `npm install yo -g`
1. Install the generator.
  * `npm install generator-threshold -g`
1. Start Gulp to run a local development server.
  * `gulp`

#### One Step Install/Run
`npm i -g yo generator-threshold && gulp`

## Creating Icons
**IMPORTANT: You should have selected "Use icon font?" when running the generator and you MUST be running the `gulp` task while performing the below steps for everything to work correctly.**

1. Create your SVGs in whichever way you prefer.
1. Import the SVGs into the [IcoMoon App](https://icomoon.io/app) and export them with your preferred settings.
1. The app generates a zip file (`icomoon.zip`) which you can extract.
1. Drag the extracted folder (`icomoon`) into the `fonts` directory of your project, overwriting the one currently there.
1. The `icons` task is executed automatically and outputs the appropriate Sass file in `/sass/vendor/_icomoon.scss`.
1. Import the file generated in the previous step into `/sass/_base.scss` (`@import "vendor/icomoon";`).
1. You can use the icon in markup as such: `<i class="icon-star"></i>`
1. You can also use the icon in your Sass using the mixin (which should be imported into `/sass/_base.scss` before use as well): `@include icon($icon-[name]);`
  * All icons have names associated with them when the Gulp task creates the appropriate files. These are based on the original SVG file name.
  * If you created an icon named `big-star.svg` then the resulting icon Sass variable will be `$icon-big-star`.
  * You can now use this variable in the icon mixin. (`@include icon($icon-big-star);`)
  * It is recommended to name your files using kebab case (name-of-icon.svg).

## Creating Sprites

## Roadmap
* Add generator input for different types of licenses to automatically generate them

## License
[MIT](http://opensource.org/licenses/MIT)
