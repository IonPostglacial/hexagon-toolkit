const gulp = require('gulp');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const http = require('http');
const st = require('st')
const livereload = require('gulp-livereload');
const es = require('event-stream');
const path = require('path');

gulp.task('js', function() {
    // we define our input files, which we want to have
    // bundled:
    const bundleEntries = [
      'src/main.js',
      'src/htk.js'
    ];
    // map them to our stream function
    const tasks = bundleEntries.map(entry => {
      return browserify({
        debug: true,
        entries: [entry],
      })
      .transform('babelify', { presets: ['es2015', 'react'] })
      .bundle()
      .on('error', function (err) { console.error(err); })
      .pipe(source(path.basename(entry)))
      //.pipe(sourcemaps.init({ loadMaps: true }))
      //.pipe(sourcemaps.write())
      .pipe(gulp.dest('dist'));
    });
    // create a merged stream
    return es.merge.apply(null, tasks);
});

gulp.task('default', ['js'], function (done) {
  http.createServer(
    st({ index: 'index.html', cache: false, path: './' })
	).listen(8080, done);
	livereload.listen();
	gulp.watch('src/*', ['js']);
});
