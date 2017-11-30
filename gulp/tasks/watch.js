/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('cssInject', ['styles'], () => gulp.src('./src/temp/styles/styles.css').pipe(browserSync.stream()));

gulp.task('scriptsRefresh', ['scripts'], () => {
  browserSync.reload();
});

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'src'
    }
  });

  watch('./src/*.html', () => {
    browserSync.reload();
  });

  watch('./src/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
    browserSync.reload();
  });

  // watch for any changes to our js files
  watch('./src/assets/scripts/**/*.js', () => {
    gulp.start('scriptsRefresh');
    browserSync.reload();
  });
});

