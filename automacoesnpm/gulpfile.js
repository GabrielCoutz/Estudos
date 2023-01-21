const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

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
  gulp.watch("*.html").on("change", browserSync.reload);
}

gulp.task("watch", watch);
gulp.task("compilaSass", compilaSass);
gulp.task("browserSync", browser);
gulp.task("default", gulp.parallel("watch", "browserSync"));
