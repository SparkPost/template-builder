var gulp = require('gulp');

var buildTask = ['css', 'inline'];
gulp.task('build', buildTask);

var defaultTask = ['serve', 'build', 'watch'];
gulp.task('default', defaultTask);


module.exports = defaultTask;
