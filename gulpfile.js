var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    scss = require('gulp-sass');

gulp.task('server', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./assets/scss/*.scss", ['scss']).on('change', reload);
    gulp.watch("./*.html").on('change', reload);
});

gulp.task('scss', function() {
    console.log(111);
    gulp.src('./assets/scss/*.scss')
        .pipe(scss({ outputStyle: "expanded" }).on('error', scss.logError))
        .pipe(gulp.dest('./assets/css'))
        .pipe(reload({ stream: true }));
})

// 默认任务
gulp.task('default', ['server']);