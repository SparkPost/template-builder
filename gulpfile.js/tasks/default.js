var gulp = require('gulp');

var buildTask = ['css', 'html', 'inline'];
gulp.task('build', buildTask);

var defaultTask = ['serve', 'watch'];
gulp.task('default', defaultTask);

module.exports = defaultTask;
