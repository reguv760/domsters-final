/* eslint-disable import/no-extraneous-dependencies, func-names, no-console */
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const hexrgba = require('postcss-hexrgba');
const mixins = require('postcss-mixins');
const sourcemaps = require('gulp-sourcemaps');

const autoprefixerConfig = { browsers: ['> 1%', 'last 3 versions', 'Android >= 4', 'iOS >= 7'] };

gulp.task('styles', () => {
  const transformations = [
    autoprefixer(autoprefixerConfig),
    cssImport,
    mixins,
    cssvars,
    nested,
    hexrgba
  ];
  
  gulp.src('./src/assets/styles/styles.css')
    .pipe(sourcemaps.init())
    .pipe(postcss((transformations)))
    .on('error', function (error) {
      console.log(error.toString());
      this.emit('end');
    })
    .pipe(sourcemaps.write('.')) // path relative to the outputted css file
    .pipe(gulp.dest('./src/temp/styles'));
});
