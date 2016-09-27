module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'assets/js/main.js' : [ 'assets/_js/main.js' ]
        }
      }
    }, //uglify

    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'assets/css/style.css' : 'assets/_sass/style.sass',
          'assets/css/cart.css' : 'assets/_sass/cart.sass',
          'assets/css/list-products.css' : 'assets/_sass/list-products.sass',
          'assets/css/item-cart.css' : 'assets/_sass/item-cart.sass'
        }
      }
    }, //sass

    watch : {
      dist : {
        files : [
          'assets/_js/**/*',
          'assets/_sass/**/*'
        ],

        tasks : [ 'uglify', 'sass' ]
      }
    } //watch    

  });


  // Plugins
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );


  // Tasks
  grunt.registerTask( 'default', [ 'uglify', 'sass' ] );
  grunt.registerTask( 'w', [ 'watch' ] );

};