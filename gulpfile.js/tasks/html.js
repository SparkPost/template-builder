var gulp            = require('gulp'),
    nunjucksRender  = require('gulp-nunjucks-render'),
    inlineCss       = require('gulp-inline-css');

var htmlTask = function () {
  return gulp.src(['./src/templates/*.html'])
    .pipe(nunjucksRender({
      path: ['./src/templates/']
    }))
    .pipe(gulp.dest('./dist/'));
}

gulp.task('html', htmlTask);
module.exports = htmlTask;
