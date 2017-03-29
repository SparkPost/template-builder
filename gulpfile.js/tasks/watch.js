var gulp = require('gulp');

var watchTask = function(){
  gulp.watch('./src/assets/scss/**/*.scss',     ['css']);
  gulp.watch('./src/templates/**/*.html',       ['html']);
  gulp.watch('./dist/**/*.html',                ['inline']);
};

gulp.task('watch', watchTask);
module.exports = watchTask;
