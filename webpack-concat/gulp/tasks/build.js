import gulp from 'gulp';

import runSequence from 'run-sequence';

gulp.task('local', function() {
  global.isWatching = true;
  global.isRelease = false;

  runSequence('js-lib-concat');
});
