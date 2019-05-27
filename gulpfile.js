"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const browsersync = require("browser-sync").create();

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

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function css() {
  return gulp
    .src("/css/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./css"))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp
    .watch(["*.html", "./css/*.scss"])
    .on("change", gulp.series(css, browserSyncReload));
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.css = css;
exports.watch = watch;
