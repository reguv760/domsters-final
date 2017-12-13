const gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  del = require('del'),
  usemin = require('gulp-usemin'),
  rev = require('gulp-rev'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync').create();

gulp.task('previewDocs', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './docs',
    },
  });
});

gulp.task('deleteDocsFolder', ['icons'], function() {
  return del('./docs');
});

gulp.task('copyGeneralFiles', ['deleteDocsFolder'], function() {
  var pathsToCopy = [
    './src/**/*',
    '!./src/index.html',
    '!./src/assets/images/**',
    '!./src/assets/styles/**',
    '!./src/assets/scripts/**',
    '!./src/temp/',
    '!./src/temp/**',
  ];

  return gulp.src(pathsToCopy).pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', ['deleteDocsFolder'], function() {
  return gulp
    .src([
      './src/assets/images/**/*',
      '!./src/assets/images/icons',
      '!./src/assets/images/icons/**/*',
    ])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true,
      })
    )
    .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDocsFolder'], function() {
  gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], function() {
  return gulp
    .src('./src/index.html')
    .pipe(
      usemin({
        css: [
          function() {
            return rev();
          },
          function() {
            return cssnano();
          },
        ],
        js: [
          function() {
            return rev();
          },
          function() {
            return uglify();
          },
        ],
      })
    )
    .pipe(gulp.dest('./docs'));
});

gulp.task('github-build', [
  'deleteDocsFolder',
  'copyGeneralFiles',
  'createSprite',
  'copySpriteGraphic',
  'optimizeImages',
  'useminTrigger',
]);
