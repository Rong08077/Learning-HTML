
'use strict'

var gulp = require('gulp');
var csso = require('gulp-csso');
var useref = require('gulp-useref');




gulp.task('useref', function () {
    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});