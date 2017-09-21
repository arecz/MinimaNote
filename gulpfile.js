var gulp         = require("gulp"),
    watch        = require("gulp-watch"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    sourcemaps   = require("gulp-sourcemaps");


var input = "./public/scss/*.scss";
var output = "./public/css"

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};




gulp.task("sass", function (){
   return gulp.src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(output))
});

gulp.task("watch", function(){
   watch ("./public/scss/**/*scss", function (){
      gulp.start("sass")
   });
});
