var gulp            = require('gulp'),
    inlineCss       = require('gulp-inline-css');

var inlineTask = function () {
  return gulp.src('./dist/*.html')
      .pipe(inlineCss())
      .pipe(gulp.dest('./dist/'));
}

gulp.task('inline', ['css', 'html'], inlineTask);
module.exports = inlineTask;
