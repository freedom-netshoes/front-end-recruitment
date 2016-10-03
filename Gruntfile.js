module.exports = function(grunt) {

  // Project configuration.
  var libsjs = ['node_modules/jquery/dist/jquery.js','public/assets/js/vendor/bootstrap.min.js'];
  var libscss = ['public/assets/css/vendor/bootstrap.min.css','public/assets/css/vendor/animate.min.css'];
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'public/assets/css/main.min.css': ['public/assets/scss/main.scss']
            }
        }
    },//sass
    cssmin: {
        target: {
            files: {
              'public/assets/css/main.min.css': ['public/assets/css/main.min.css',libscss]
            }
        }
    },//cssmin
    imagemin: {
      build: {
         options: {
            optimizationLevel: 3
         },
         files: [{
            expand: true,
            cwd: '/public/assets/images/', //Optimization of images
            src: ['/public/assets/images/**/*.{png,jpg,gif}'], //Get all extension
            dest: '/public/assets/images/' //Dist finish of optimization
         }]
      }
    },//imagemin

    jshint: {
     files: ['public/assets/js/main.js'],
     options: {
         globals: {
              jQuery: true,
              console: true,
              module: true
         }
     }
    },
    uglify: {
      options : {
        mangle : false
      },
      compress : {
        files : {
          'public/assets/js/main.min.js' : [libsjs, 'public/assets/js/main.js' ]
        }
      }
    }, //uglify

    watch: {
      sass: {
        files: ['public/assets/scss/**/*.scss'], //View all files SASS
        tasks: ['sass']
      },
      js: {
        files: ['public/assets/**/*.js'], //View all files JS
        tasks: ['uglify','jshint']
      },
      cssminify: {
          files: ['/public/assets/scss/**/*.scss'],
          tasks: ['cssmin']
      },

      options: {
        livereload: true,
      },
    },
  });

  // Load the plugin jshint
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin sass
  grunt.loadNpmTasks('grunt-sass');

  //Load the plugin cssMin
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Load the plugin imagemin
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Load the plugin watch
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

  //Grunt build of project
  grunt.registerTask('build', ['jshint']);
  grunt.registerTask('build', ['uglify','sass', 'cssmin', 'imagemin']);

};