module.exports = {
  // Optimize images
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
};
