/* eslint-disable import/no-extraneous-dependencies, func-names, function-paren-newline */

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const reporter = require('postcss-reporter');
const stylelint = require('stylelint');

gulp.task('css-lint', () => {
  // Stylelint config rules
  const stylelintConfig = {
    ignoreFiles: [
      'src/assets/styles/modules/_sprite.css'
    ],
    rules: {
      'block-no-empty': true,
      'color-no-invalid-hex': true,
      'declaration-colon-space-after': 'always',
      'declaration-colon-space-before': 'never',
      'function-comma-space-after': 'always',
      'function-url-quotes': 'always',
      'string-quotes': 'single',
      'media-feature-colon-space-after': 'always',
      'media-feature-colon-space-before': 'never',
      'media-feature-name-no-vendor-prefix': true,
      'max-empty-lines': 2,
      indentation: [2, {
        severity: 'warning',
        except: ['value']
      }],
      'number-leading-zero': 'always',
      'number-no-trailing-zeros': true,
      'property-no-vendor-prefix': true,
      'declaration-block-no-duplicate-properties': [true, {
        ignore: ['consecutive-duplicates-with-different-values']
      }],
      'declaration-block-trailing-semicolon': 'always',
      'selector-list-comma-space-before': 'never',
      'selector-list-comma-newline-after': 'always',
      'value-no-vendor-prefix': true
    }
  };

  const processors = [
    stylelint(stylelintConfig),
    // Pretty reporting config
    reporter({
      clearMessages: true,
      throwError: true
    })
  ];

  return gulp.src(
    // Stylesheet source:
    ['./src/assets/styles/**/*.css',
      // Ignore linting vendor assets:
      // (Useful if you have bower components)
      '!src/assets/styles/vendor/**/*.css'])
    .pipe(postcss(processors));
});

