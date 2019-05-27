"use strict";

var gulp = require("gulp");
var browsersync = require("browser-sync").create();

// BrowserSync task
function browserSync(done) {
  browsersync.init({
    server: {
      base: "./_site/"
    },
    port: 3000
  });
  done();
}

function watchFiles() {
  gulp.watch(["*.html", "./css/*.css"]).on("change", browsersync.reload);
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.watch = watch;
