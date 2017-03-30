const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

var imageTask = function () {
  return gulp.src('./src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

gulp.task('image', imageTask);
module.exports = imageTask;
