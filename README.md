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
* Image minification **(requires the [JPEGmini app](http://www.jpegmini.com/) but can be turned off)**
* Stub JS code depending on what/if a framework is chosen
* Options
  * Browserify with Watchify
  * ES6 (Babel)
  * jQuery
  * Backbone with Lodash
  * React (with additional React ESLint enabled)
  * CSS sprite generation (including retina support and auto-resizing of @2x sprites down to regular size [requires [ImageMagick](http://www.imagemagick.org/)])
  * Icon font support (in conjunction with [IcoMoon](https://icomoon.io/))

## Usage
1. If you don't already have Yeoman installed you'll need to install it as well.
  * `sudo npm install yo -g`
1. Install the generator.
  * `sudo npm install generator-threshold -g`
1. Run the generator and create a project.
  * `yo threshold [app-name]`
  * Follow the prompts to input your information.
1. Start Gulp to run a local development server.
  * `gulp`

## Creating Icons
**IMPORTANT: You should have selected "Use icon font?" when running the generator and you MUST be running the `gulp` task while performing the below steps for everything to work correctly.**

1. Create your SVGs in whichever way you prefer.
1. Import the SVGs into the [IcoMoon app](https://icomoon.io/app) and export them with your preferred settings.
1. The app generates a zip file (`icomoon.zip`) which you can extract.
1. Drag the extracted folder (`icomoon`) into the `fonts` directory of your project, overwriting the one currently there.
1. The `icons` task is executed automatically and outputs the appropriate Sass file in `/sass/vendor/_icomoon.scss`.
1. Import the file generated in the previous step into `/sass/_base.scss` (`@import "vendor/icomoon";`).
1. You can use the icon in markup as such: `<i class="icon-star"></i>`
1. You can also use the icon in your Sass using the mixin (which should be imported into `/sass/_base.scss` before use as well) and corresponding icon variable: `@include icon($icon-[name]);`
  * All icons have names associated with them when the Gulp task creates the appropriate files. These are based on the original SVG file name.
  * If you created an icon named `big-star.svg` then the resulting icon Sass variable will be `$icon-big-star`.
  * You can now use this variable in the icon mixin. (`@include icon($icon-big-star);`)
  * It is recommended to name your files using kebab case (name-of-icon.svg).
1. If you update your icon set, simply overwrite the resulting zip in the same way as step 4 above and you're all set to use your new icons.

## Creating Sprites
**IMPORTANT: You should have selected "Use CSS sprites?" when running the generator for the steps below to work correctly.**

### Automatic 1x Creation (optional)
A task is included (`gulp resize-sprites`) that will resize the @2x versions of your sprites automatically so you don't have to create them manually.  This requires [ImageMagick](http://www.imagemagick.org/) to be installed. If you'd rather not do this and create your 1x sprites manually, skip this section and put your 1x images in `/sprites/source-1x`.

1. Save your individual sprite PNG files into `/sprites/source-2x`.
  * If Gulp is not currently running you will need to run the `gulp resize-sprites` task manually.
  * If Gulp is running while you update the folder with new images, the task will run automatically during the watch task and create the 1x images.
1. To use the newly generated sprite right away you will have to stop Gulp and run it again so that the `sprites` task is run to create the new spritesheets.

### Spritesheets
The spritesheets get generated every time you run Gulp (or manually run the `sprites` task). Usage is as follows:

1. The first time you generate sprites you'll have to also import the mixin into `/sass/_base.scss`:
  * @import "mixins/sprite";
  * *You only have to do this once.*
1. Use the sprite mixin in Sass:
  * @include sprite("[name-of-sprite]");
  * The name-of-sprite is the name of the original PNG file that was used to create the sprite (name-of-sprite.png).
  * It is recommended to name your files using kebab-case (name-of-sprite.png).

## Roadmap
* Fill out ES5 and ES6 boilerplates for all included JS frameworks.
* Add ES6 and Backbone ESLint rules.
* Add unit testing support.
* Add generator input for different types of licenses to automatically generate them.

## License
[MIT](http://opensource.org/licenses/MIT)
