'use strict';

let gulp = require('gulp');
let browserify = require('gulp-browserify');
let uglify = require('gulp-uglify-es').default;
let rename = require('gulp-rename');
let render = require('gulp-nunjucks-render');

gulp.task('summon-sim', () => {
  return gulp.src('./js/summon-simulator/main.js')
      .pipe(browserify())
      .pipe(uglify())
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./summon-simulator'));
});
gulp.task('unit-builder', () => {
  return gulp.src('./js/unit-builder/main.js')
      .pipe(browserify())
      .pipe(uglify())
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./unit-builder'));
});
gulp.task('tier-list', () => {
  return gulp.src('./js/tier-list/main.js')
      .pipe(browserify())
      .pipe(uglify())
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./tier-list'));
});



gulp.task('render-ss', () => {
  return gulp.src('templates/pages/summon-simulator.html')
      .pipe(render({
        path: ['templates/partials/', 'templates/macros/']
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./summon-simulator'));
});
gulp.task('render-ub', () => {
  return gulp.src('templates/pages/unit-builder.html')
      .pipe(render({
        path: ['templates/partials/', 'templates/macros/']
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./unit-builder'));
});
gulp.task('render-tl', () => {
  return gulp.src('templates/pages/tier-list.html')
      .pipe(render({
        path: ['templates/partials/', 'templates/macros/']
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./tier-list'));
});

gulp.task('build', [
    'summon-sim',
    'unit-builder',
    'tier-list',
    'render-ss',
    'render-ub',
    'render-tl'
  ]);
