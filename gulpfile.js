/* global require */
"use strict";
var gulp = require('gulp');
var sass = require('gulp-sass');
var bump = require('gulp-bump');
var zip = require('gulp-zip');

gulp.task('default', ['watch']);
gulp.task('publish', ['bump', 'compress']);

gulp.task('sass', function() {
  gulp.src('./scss/flatland.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('major', function() {
  gulp.src('./*.json')
    .pipe(bump({ type: 'major'}))
    .pipe(gulp.dest('./'));
});

gulp.task('bump', function() {
  gulp.src('./*.json')
    .pipe(bump({ type: 'minor' }))
    .pipe(gulp.dest('./'));
});

gulp.task('compress', function() {
  gulp.src(['flatland.css', 'devtools.js', 'devtools.html', 'icons/**', '_locales/**', 'manifest.json'])
    .pipe(zip('devtools-flatland.zip'))
    .pipe(gulp.dest('./'))
});
