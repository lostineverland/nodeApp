'use strict';

var gulp = require('gulp'),
  spawn = require('child_process').spawn,
  jshint = require('gulp-jshint'),
  browserify = require('browserify'),
  reactify = require('reactify'),
  react = require('gulp-react'),
  // babelify = require('babelify'),
  source = require('vinyl-source-stream'),
  node;

gulp.task('lint', function() {
  return gulp.src([
    './apps/sample/index.js',
    './*.js'
    ])
    .pipe(react())
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('build', function () {
  return browserify({
    entries: './apps/sample/index.js',
    extensions: ['.jsx'],
    debug: true
  })
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./apps/sample'));
});

gulp.task('server', function () {
  if (node) {node.kill();}
  node = spawn('node', ['app.js'], {stdio: 'inherit'});
});

gulp.task('default', ['server']);

process.on('exit', function () {
  if (node) {node.kill();}
});
