var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream')

// npm install --save-dev gulp-util browserify watchify babelify vinyl-source-stream


gulp.task('default', function () {
    var bundler = watchify(browserify({
        entries: ['./app/app.js'],
        transform: [["babelify",
            {presets: ["es2015", "react"]}]],
        extensions: ['.js'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function build(file) {
        if (file) gutil.log('Recompiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('addtofav.js'))
            .pipe(gulp.dest('./dist'));
    };
    build();
    bundler.on('update', build);

})

// { presets: [["es2015", "react"]] }