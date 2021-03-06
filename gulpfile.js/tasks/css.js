var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer');

var cssTask = function() {
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(sass({ includePaths: ['./node_modules']}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'));
}

gulp.task('css', cssTask);
module.exports = cssTask;
