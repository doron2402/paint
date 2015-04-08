var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var taskListing = require('gulp-task-listing');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./src/public/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./src/public/css'));
});

gulp.task('help', taskListing);
gulp.task('default', ['help']);
gulp.task('lint', function () {gulp.src(['src/**/*.js']).pipe(jshint())});
gulp.task('nodemon:restart', function () {
  nodemon({
    script: 'index.js',
    ext: 'html js',
    env: {
      'NODE_ENV': 'development'
    },
    watch: [
      'server/**'
    ],
    ignore: [''],
    tasks: ['lint']
  })
  .on('restart', function () {
    console.log('restarted!');
  });
})

gulp.task('start:develop', ['lint','less','nodemon:restart']);