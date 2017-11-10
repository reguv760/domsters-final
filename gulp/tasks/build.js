/* eslint-disable import/no-extraneous-dependencies, func-names */
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task('previewDist', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'dist'
    }
  });
});
gulp.task('deleteDistFolder', () => del('./dist'));

gulp.task('copyGeneralFiles', ['deleteDistFolder'], () => {
  const pathsToCopy = [
    './src/**/*',
    './src/index.html',
    '!./src/assets/images/**',
    '!./src/assets/styles/**',
    '!./src/assets/scripts/**',
    '!./src/temp/',
    '!./src/temp/**'
  ];

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./dist'));
});

gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], () => gulp.src([
  './src/assets/images/**/*',
  '!./src/assets/images/icons',
  '!./src/assets/images/icons/**/*'
])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))
  .pipe(gulp.dest('./dist/assets/images')));

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], () => gulp
  .src('./src/index.html')
  .pipe(usemin({
    css: [function () { return rev(); }, function () { return cssnano(); }],
    js: [function () { return rev(); }, function () {
      return uglify();
    }]
  }))
  .pipe(gulp.dest('./dist')));

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin']);

