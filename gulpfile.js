"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var htmlmin = require('gulp-html-minifier');

gulp.task("style", function() {
    gulp.src("source/sass/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task('minifyhtml', function() {
    gulp.src('./source/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./build'))
});

gulp.task("copy", function(){
    gulp.src([
        './source/img/**',
        './source/fonts/**',
        './source/js/**',
    ],{
        base: 'source'
    })
        .pipe(gulp.dest('./build/'));
});

gulp.task("serve", ["style"], function() {
    server.init({
        server: "source/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
    gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("build", ["style", "minifyhtml", "copy"]);
