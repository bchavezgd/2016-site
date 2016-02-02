module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // Re-usable filesystem paths
    paths: {
      src: './_src',
      dist: './_site'
    },

    // grunt-sass
    sass: {
      options: {
        outputStyle: 'expanded',
        sourceComments: true
      },
      dev: {
        src:  '<%= paths.src %>/sass/style.sass',
        dest: '<%= paths.dist %>/css/style.css'
      }
    },

    assemble: {
      options: {
        layoutdir: '<%= paths.src %>/layouts',
        partials: ['<%= paths.src %>/partials/**/*.hbs'],
        data: '<%= paths.src %>/data/*.{json,yml}'
      },
      pages: {
        expand: true,
        cwd: '<%= paths.src %>/pages/',
        src: ['*.{hbs,md}'],
        dest: '<%= paths.dist %>/'
      }
    },


    // Optimize images
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3,
          svgoPlugins: [{
            removeViewBox: false
          }]
        },
        files: [{
          expand: true,
          cwd: '<%= paths.src %>/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= paths.dist %>/images'
        }]
      }
    },

    // connect server
    connect: {
      server: {
        options: {
          port: 3000,
          base: '<%= paths.dist %>',
          hostname: 'localhost',
          livereload: true
        }
      }
    },
    copy: {
      js: {
        expand: true,
        cwd: '<%= paths.src %>/js/',
        src: '**/*',
        dest: '<%= paths.dist %>/js/'
      },
      images: {
        expand: true,
        cwd: '<%= paths.src %>/images/',
        src: '**/*',
        dest: '<%= paths.dist %>/images/'
      }

    },
    // Watches for changes to css or email templates then runs grunt tasks
    watch: {
      files: [
        '<%= paths.src %>/sass/**/*',
        '<%= paths.src %>/pages/**/*',
        '<%= paths.src %>/layouts/*',
        '<%= paths.src %>/partials/*',
        '<%= paths.src %>/data/*',
        '<%= paths.src %>/images/*',
        '<%= paths.src %>/js/*'
      ],
      tasks: [
        'sass',
        'assemble',
        'newer:copy',
        'newer:imagemin'
      ],
      options: {
        livereload: true,
        event: ['all'],
        spawn: false
      }
    }
  });

  // Load all grunt tasks
  // https://github.com/sindresorhus/load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  // Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('done', [
  'sass',
  'assemble',
  'imagemin'
]);

  grunt.registerTask('default', [
  'sass',
  'assemble',
  'connect',
  'watch'
]);

};