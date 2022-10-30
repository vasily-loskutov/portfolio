const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemap  = require('gulp-sourcemaps');
const notify  = require('gulp-notify');
const plumber  = require('gulp-plumber');
const gcmq = require('gulp-group-css-media-queries');
const sassGlob = require('gulp-sass-glob');
const htmlMin = require('gulp-htmlmin');
const cleanCss = require('gulp-clean-css');
const image = require('gulp-image');
const changed = require('gulp-changed');
const ttf2woff2 = require('gulp-ttftowoff2');
const ttf2woff = require('gulp-ttf2woff');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;



gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify({
        toplevel:true
    }).on('error', notify.onError()))
      .pipe(gulp.dest('build/js'))
});
gulp.task('copy:ico', function() {
    return gulp.src('src/images/ico/*.svg')
      .pipe(gulp.dest('build/images/ico/'))
});
gulp.task('copy:ico:social', function() {
    return gulp.src('src/images/ico/social/*.svg')
      .pipe(gulp.dest('build/images/ico/social'))
});
gulp.task('ttf', function(callback) {
    gulp.src('src/fonts/*.css')
    .pipe(gulp.dest('build/fonts'))
  gulp.src('src/fonts/**/*.ttf')
    .pipe(changed('build/fonts', {
        extension: '.woff2',
        hasChanged: changed.compareLastModifiedTime
    }))
    .pipe(ttf2woff2())
    .pipe( gulp.dest('build/fonts'))
   gulp.src('src/fonts/**/*.ttf')
    .pipe(changed('build/fonts', {
        extension: 'woff',
        hasChanged: changed.compareLastModifiedTime
    }))
    .pipe(ttf2woff())
    .pipe( gulp.dest('build/fonts'))
    callback()
});
gulp.task('images', function() {
    return gulp.src([
        'src/images/imgs/*.jpg',
        'src/images/imgs/*.png'
    ])
    .pipe(image())
      .pipe(gulp.dest('build/images/imgs'))
});

gulp.task('style', function() {
    return gulp.src('./src/css/*.css')
        .pipe(cleanCss({
            level:2
        }))
      .pipe(gulp.dest('./build/css/'))
});
gulp.task('htmlMinify', function(callback) {
    return gulp.src('./src/index.html')
    .pipe(htmlMin({
        collapseWhitespace:true
    }))
    .pipe(gulp.dest('./build'))
    callback();

});


gulp.task('scss', function(callback) {
    return gulp.src('./src/scss/main.scss')
    .pipe(plumber({
        errorHandler: notify.onError(function(err){
            return {
                title:'Styles',
                sound:false,
                message:err.message
            }
        })
    }))
    .pipe(sourcemap.init())
    .pipe(sassGlob())
    .pipe(sass({
        indentType:'tab',
        indentWidth:1,
        outputStyle:"expanded"

    }))
    .pipe(gcmq())
    .pipe(autoprefixer({
        overrideBrowserlist:['last 4 versions']
    }))
    .pipe(sourcemap.write())
    .pipe(gulp.dest('./src/css/'))
    callback();
});

gulp.task('watch', function() {
    watch(['./src/*.html','./src/css/**/*.css'],gulp.parallel(browserSync.reload))
    watch('./src/scss/**/*.scss',gulp.parallel('scss'))
    watch('./src/*.html',gulp.parallel('htmlMinify'))
});
gulp.task('server', function() {
    browserSync.init({
        server:{
            baseDir:'./build/'
        },
        notify: false,
       
    })
});




gulp.task('default', gulp.parallel('watch','server','scss','style','htmlMinify','copy:ico','copy:ico:social','ttf','images','style','scripts'));
