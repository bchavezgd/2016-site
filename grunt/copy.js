module.exports = {
  // copy files that aren't being run through a grunt plugin.
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
};
