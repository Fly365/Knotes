var gulp = require('gulp');
var gp_deploy = require('gulp-gh-pages');

var options = {}
gulp.task('deploy', function () {
  return gulp.src('./_book/**/*')
    .pipe(gp_deploy(options));
});

gulp.task('default',['deploy'] ,function () {
  console.log('default');
});