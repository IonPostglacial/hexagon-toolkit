const gulp = require('gulp');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const http = require('http');
const st = require('st')
const livereload = require('gulp-livereload');

gulp.task('js', function () {
  const bundler = browserify({
    debug: true,
    entries: 'src/main.js',
  });
  bundler.transform('babelify', { presets: ['es2015', 'react'] })

  bundler.bundle()
    .on('error', function (err) { console.error(err); })
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js'], function (done) {
  http.createServer(
    st({ index: 'index.html', cache: false, path: './' })
	).listen(8080, done);
	livereload.listen();
	gulp.watch('src/*', ['js']);
});
