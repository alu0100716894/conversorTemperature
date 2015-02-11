/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('minify', function () {
  gulp.src('temperature.js')
  .pipe(uglify())
  .pipe(gulp.dest('js/build/'))
  .pipe(gulp.dest('minified'))
});
