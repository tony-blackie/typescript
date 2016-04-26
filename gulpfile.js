var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');

gulp.task('server', function () {
  nodemon({
    script: 'server.js'
  })
});

gulp.task('styles', function(){
  gulp.src(['src/styles/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(gulp.dest('public/styles/'))
});

gulp.task('app', function(){
  var tsResult = gulp.src(['src/app/**/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(ts({
      sortOutput: true,
      noImplicitAny: true,
      removeComments: true,
      preserveConstEnums: true,
      target: 'es5'
    }));
  return tsResult
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/app/'))
});

gulp.task('default', function(){
  gulp.start('app');
  gulp.start('styles');
  gulp.start('server');
  gulp.watch("src/app/**/*.ts", ['app']);
  gulp.watch("src/styles/**/*.css", ['styles']);
});