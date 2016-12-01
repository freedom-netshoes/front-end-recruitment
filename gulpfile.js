'use strict';

var gulp		 = require('gulp'),
	$			 = require('gulp-load-plugins')(),
	del			 = require('del'),
	autoprefixer = require('autoprefixer'),
	mqpacker	 = require('css-mqpacker'),
	browserSync  = require('browser-sync'),
	named		 = require('vinyl-named'),
	path		 = require('path'),
	webpack 	 = require('webpack-stream'),
	pkg			 = require('./package.json');

var paths = {
	webpack : 'src/scripts/*.js',
	scripts: ['src/scripts/**/*.js', '!src/scripts/vendors/**/*.js'],
	templates: 'src/scripts/**/*.hbs',
	styles  : 'src/styles/**/*.scss',
	images  : 'src/images/**/*.{png,jpeg,jpg,gif,svg}',
	extras  : ['src/*.*'],
	dest    : {
		scripts : 'dist/js',
		styles  : 'dist/css',
		images  : 'dist/img',
		extras  : 'dist'
	}
};

gulp.task('lint', function () {
	return gulp.src(paths.scripts)
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', ['lint'], function () {

	return gulp.src(paths.webpack)
		.pipe($.plumber())
		.pipe(named())
		.pipe(webpack({
			output: {
				filename: '[name].min.js'
			},
			externals: {
				'jquery': 'jQuery'
			},
			resolve: {
				root: path.resolve('./src/scripts')
			},
			module: {
				loaders: [
					{
						test: /\.hbs$/,
						loader: 'handlebars-loader'
					}
				]
			},
			plugins: [
				$.util.env.production ? new webpack.webpack.optimize.UglifyJsPlugin({
					minimize: true,
					compress: {
						warnings: false
					}
				}) : $.util.noop,
			],
			devtool: $.util.env.production ? '': '#source-map'
		}))
		.pipe(gulp.dest(paths.dest.scripts));
});


gulp.task('sasslint', function () {
	return gulp.src(paths.styles
			.concat('!src/styles/helpers/_normalize.scss'))
		.pipe($.sassLint({
			options: {
				'config-file': 'sass-lint.yml'
			}
		}))
		.pipe($.sassLint.format())
		// .pipe($.sassLint.failOnError())
});

gulp.task('styles', ['sasslint'], function () {
	return gulp.src(paths.styles)
		.pipe($.plumber())
		.pipe( $.util.env.production ? $.util.noop() : $.sourcemaps.init() )
		.pipe($.sass({
			outputStyle: $.util.env.production ? 'compressed' : 'nested',
			includePaths: [
				'node_modules',
				'./src/styles'
			]
		}).on('error', $.sass.logError))
		.pipe($.postcss([ autoprefixer(), mqpacker({sort: true}) ]))
		// REPLACEMENTS
		.pipe($.replace('PKG_ACCOUNTNAME', pkg.accountName))
		.pipe($.replace('PKG_NAME', pkg.name))
		.pipe($.replace('PKG_AUTHOR', pkg.author))
		.pipe($.replace('PKG_BUILD_VERSION', pkg.version))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest(paths.dest.styles));
});

gulp.task('images', function () {
	return gulp.src(paths.images)
		.pipe($.plumber())
		.pipe($.newer(paths.dest.images))
		.pipe($.imagemin({
			optimizationLevel: $.util.env.production ? 5 : 1,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest(paths.dest.images));
});

gulp.task('extras', function () {
	return gulp.src(paths.extras, {base: 'src'})
		.pipe($.newer(paths.dest.extras))
		.pipe(gulp.dest(paths.dest.extras));
});

gulp.task('clean', function () {
	return del([paths.dest.extras]);
});

gulp.task('serve', ['watch'], function () {
	browserSync({
		files: [ 'dist/**', '!dist/**/*.map' ],
		server: {
			baseDir: ['dist']
		},
		open: !$.util.env.no
	});
});

gulp.task('watch', ['scripts', 'styles', 'images', 'extras'], function(){
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.templates, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.images, ['images']);
	gulp.watch(paths.extras, ['extras']);
});

gulp.task('default', ['clean'], function () {
	gulp.start('serve');
});

gulp.task('deploy', ['clean'], function () {
	$.util.env.production = true;
	gulp.start(['scripts', 'styles', 'images', 'extras']);
});