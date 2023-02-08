'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('src/assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('src/assets/scss/**/*.scss', buildStyles);
  gulp.watch('src/components/Header/Title/*.scss', buildStyles);
  gulp.watch('src/components/Header/Theme/Buttons/*.scss', buildStyles);
  gulp.watch('src/components/SearchBox/*.scss', buildStyles);
  gulp.watch('src/components/UserData/*.scss', buildStyles);
  gulp.watch('src/components/UserData/TopArea/*.scss', buildStyles);
  gulp.watch('src/components/UserData/Statistic/*.scss', buildStyles);
  gulp.watch('src/components/UserData/Links/*.scss', buildStyles);
  gulp.watch('src/components/Loader/*.scss', buildStyles);
};