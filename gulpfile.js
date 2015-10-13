'user strict'

var gulp = require('gulp');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
var reload = browserSync.reload;

gulp.task('default', function() {
  browserSync({
    port: 5001,
    notify: false,
    loginPrefix: 'PSK',
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function (snippet) {
          return snippet;
        }
      }
    },
    server: {
      baseDir: ['./'],
      middleware: [historyApiFallback()],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch(['**/*.html'], reload);
  gulp.watch(['**/*.css'], reload);
  gulp.watch(['**/*.js'], reload);
  gulp.watch(['**/images/**/*'], reload);
});