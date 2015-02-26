/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  gutil   = require('gulp-util'),
  uglify = require('gulp-uglify');
var karma   = require('gulp-karma');

/*
* Configuración de la tarea 'minidy'
*/
gulp.task('minify', function () {
  gulp.src('temperature.js')
  .pipe(uglify())
  .pipe(gulp.dest('js/build/'))
  .pipe(gulp.dest('minified'))
});

gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('default', function() {
  gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});
