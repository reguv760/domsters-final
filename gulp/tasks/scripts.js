/* eslint-disable import/no-extraneous-dependencies, arrow-parens, global-require, no-console  */
const gulp = require('gulp');
const webpack = require('webpack');

gulp.task('scripts', ['modernizr'], callback => {
  // tell webpack where our config file is
  webpack(require('../../webpack.config.js'), (err, stats) => {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});
