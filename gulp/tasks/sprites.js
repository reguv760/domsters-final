/* eslint-disable import/no-extraneous-dependencies, space-before-function-paren, func-names, function-paren-newline */
const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');

const config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
     sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('beginClean', () =>
  del(['./src/temp/sprite', './src/assets/images/sprites'])
);

gulp.task('createSprite', ['beginClean'], () =>
  gulp
    // grab all the svgs inside the icons folder
    .src('./src/assets/images/icons/*.svg')
    // use the template var
    .pipe(svgSprite(config))
    // output generated sprite to tmp file
    .pipe(gulp.dest('./src/temp/sprite'))
);

gulp.task('copySpriteGraphic', () =>
  gulp
    .src('./src/temp/sprite/css/**/*.{svg,png}')
    .pipe(gulp.dest('./src/assets/images/sprites'))
);

gulp.task('copySpriteCSS', ['createSprite'], () =>
  gulp
    // grab all the sprites generated
    .src('./src/temp/sprite/css/*.css')
    // rename to partial `_sprites`
    .pipe(rename('_sprite.css'))
    // copy file and move copy to modules directory
    .pipe(gulp.dest('./src/assets/styles/modules'))
);

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], () =>
  del('./src/temp/sprite')
);

gulp.task('icons', [
  'beginClean',
  'createSprite',
  'copySpriteGraphic',
  'copySpriteCSS',
  'endClean'
]);

