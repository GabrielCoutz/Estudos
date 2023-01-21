const { src, dest, task } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compilaSass(cb) {
  src("css/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("css/"));
  cb();
}

task("teste", compilaSass);
