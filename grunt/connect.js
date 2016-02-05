module.exports = {
  // connect server
    server: {
      options: {
        port: 3000,
        base: '<%= paths.dist %>',
        hostname: 'localhost',
        livereload: true
      }
    }
};
