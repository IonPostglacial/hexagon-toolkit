const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
  gulp.src('src/jsx/*.js')
  .pipe(babel({ presets: ['es2015', 'react'] }))
  .pipe(gulp.dest('dist'));
});
