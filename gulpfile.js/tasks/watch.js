var gulp = require('gulp');

var watchTask = function(){
  gulp.watch('./src/assets/scss/**/*.scss',     ['build']);
  gulp.watch('./src/templates/**/*.html',       ['build']);
};

gulp.task('watch', watchTask);
module.exports = watchTask;
