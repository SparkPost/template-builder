var gulp            = require('gulp'),
    nunjucksRender  = require('gulp-nunjucks-render');

var htmlTask = function () {
  return gulp.src(['./src/templates/*.html'])
    .pipe(nunjucksRender({
      path: ['./src/templates/']
    }))
    .pipe(gulp.dest('./dist/'));
}

gulp.task('html', htmlTask);
module.exports = htmlTask;
