var gulp = require("gulp");
var watch = require("gulp-watch");
var sass = require("gulp-sass");

gulp.task("sass", function (){
   return gulp.src("./sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./styles"))
});

gulp.task("watch", function(){
   watch ("./sass/*scss", function (){
      gulp.start("sass") 
   });
});