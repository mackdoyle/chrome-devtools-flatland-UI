/* global require */
"use strict";
var gulp = require('gulp');
var sass = require('gulp-sass');
var bump = require('gulp-bump');
var zip = require('gulp-zip');

gulp.task('default', ['watch']);
gulp.task('pubmajor', ['bump', 'compress']);
gulp.task('pubminor', ['bump', 'compress']);
gulp.task('pub', ['bump', 'compress']);

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
  console.log();
  var task = gulp.env._[0];
  var type = task === 'pubmajor' ?
    'major' : task === 'pubminor' ?
    'minor' : 'patch';
  gulp.src('./*.json')
    .pipe(bump({ type: type }))
    .pipe(gulp.dest('./'));
});

gulp.task('compress', function() {
  gulp.src(['flatland.css', 'devtools.js', 'devtools.html', 'icons/**', '_locales/**', 'manifest.json'])
    .pipe(zip('devtools-flatland.zip'))
    .pipe(gulp.dest('./'))
});
