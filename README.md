# Webpack/Gulp Boilerplate
A boilerplate with modern dev tools

## Technologies Used
* Babel - write modern JavaScript and have it transpiles to browser friendly
ES5
* Yarn for installing npm packages
* Gulp/Webpack hybrid
  - Webpack is used for bundling all the JavaScript and creating sourcemaps
  for that JavaScript
* OOP JavaScript
  - Using jQuery but feel free to replace it with Vanilla JavaScript
  - Waypoints (scroll to parts of page)
  - jquery
  - jquery smooth scroll
  - modernizr (check if browser understands technology and generates classes)
  - picturefill
  - lazysizes (lazyloading)
* normalize.css
* BrowserSync - To develop your app without page refreshes
* Prettier for your JavaScript formatting
* ESLint to best debug your JavaScript
* BEM
* POSTCSS
  - hexrgba
  - import (for partials)
  - nested (to nest your css)
  - simple-vars (use variables)
  - autoprefixer
* imagemin (optimize your images)
* CSS sprites (generated using handlebars)
* Stylelint - great way to check that your CSS is valid

## First clone this repo
* `$ git clone git@github.com:kingluddite/webpack-gulp-boilerplate.git`

## Install all the dependencies
* `$ yarn install`

## Create your styles with sourcemaps
* This will grab all your partial CSS modules, bundle them into one file and
create sourcemaps for them
* `$ gulp styles`

## Check your styles with stylelint
* `$ gulp css-lint`

## Create your sprites
* CSS sprites help reduce HTTP requests
* Grab all the SVG files in a folder and turn them into one file
* Dynamically generate CSS using handlerbars templating language

`$ gulp sprites`

## Copy the sprite css
* `$ gulp copySpriteCSS`

## Copy the sprite graphic
* `$ gulp copySpriteGraphicCSS`

## Run app inside browser sync
* `$ gulp watch`

## Use webpack to bundle all Javascript with sourcemaps
* `$ gulp scripts`

## Create your build
* Your app is ready for production

`$ gulp build`
