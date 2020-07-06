var gulp = require("gulp");
var scss = require("gulp-sass");

gulp.task("scss", function() {
  return new Promise(resolve => {
    gulp
      .src("./assets/styles/index.scss")
      .pipe(scss({}).on("error", scss.logError))
      .pipe(gulp.dest("./assets/styles"));
    resolve();
  });
});

gulp.task("watch", function() {
  gulp.watch("./assets/styles/*.scss", gulp.series("scss"));
});
