const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify-es").default;

function compilaSass(cb) {
  gulp
    .src("css/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream());
  cb();
}

function browser() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
}

function watch() {
  gulp.watch("css/scss/*.scss", gulp.series("compilaSass"));
  gulp.watch(["js/main/*.js"], gulpJs);
  gulp.watch(["*.html", "js/*.js"]).on("change", browserSync.reload);
}

function gulpJs() {
  return gulp
    .src("./js/main/*.js")
    .pipe(concat("script.js"))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("./js/"));
}

exports.gulpJs = gulpJs;
exports.watch = watch;
exports.compilaSass = compilaSass;
exports.browser = browser;
exports.default = gulp.parallel(watch, browser, compilaSass, gulpJs);
