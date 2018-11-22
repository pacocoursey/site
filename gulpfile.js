const {
  src, dest, series, parallel,
} = require('gulp');
const cssmin = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const jsmin = require('gulp-uglify');
const babel = require('gulp-babel');
const del = require('del');

const html = () => (
  src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyJs: true,
      removeComments: true,
    }))
    .pipe(dest('./build'))
);

const css = () => (
  src('./src/*.css')
    .pipe(cssmin())
    .pipe(dest('./build'))
);

const js = () => (
  src('./src/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(jsmin())
    .pipe(dest('./build'))
);

const copy = () => (
  src([
    './src/aos/**/*',
    './src/font/**/*',
    './src/favicon/**/*',
    './src/logo.svg',
    './src/resume_public.pdf',
    './src/now.json',
  ], {
    base: './src',
  })
    .pipe(dest('./build'))
);

const clean = () => (
  del('./build')
);

exports.html = html;
exports.css = css;
exports.js = js;
exports.copy = copy;
exports.clean = clean;
exports.default = series(
  clean,
  parallel(html, css, js, copy),
);
