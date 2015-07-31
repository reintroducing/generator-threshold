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
* Sourcemapping of CSS and JS
* Minification of CSS and JS
* Image minification *(requires JPEGmini but can be turned off)*
* Stub JS code depending on what/if a framework is chosen
* Options
  * Browserify with Watchify
  * ES6 (Babel)
  * jQuery
  * Backbone with Lodash
  * React (with additional React ESLint enabled)
  * CSS sprite generation
  * Icon font support

## Usage
1. If you don't already have Yeoman installed you'll need to install it as well.
  * `npm install yo -g`
1. Install the generator.
  * `npm install generator-threshold -g`
1. Start Gulp to run a local development server.
  * `gulp`

#### One Step Install/Run
`npm i -g yo, generator-threshold && gulp`

## Roadmap
* Add generator input for different types of licenses to automatically generate them

## License
[MIT](http://opensource.org/licenses/MIT)
