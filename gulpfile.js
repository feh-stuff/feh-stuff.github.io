'use strict';

let gulp = require('gulp');
let browserify = require('gulp-browserify');
let uglify = require('gulp-uglify-es').default;
let rename = require('gulp-rename');

gulp.task('summon-sim', () => {
  gulp.src('./js/summon-simulator/main.js')
      .pipe(browserify())
      .pipe(uglify())
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./js/summon-simulator'));
});

gulp.task('unit-builder', () => {
  gulp.src('./js/unit-builder/main.js')
      .pipe(browserify())
      .pipe(uglify())
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./js/unit-builder'));
});

gulp.task('build', ['summon-sim', 'unit-builder']);
