module.exports = {
  options: {
    layoutdir: '<%= paths.src %>/layouts',
    partials: ['<%= paths.src %>/partials/**/*.hbs'],
    data: '<%= paths.src %>/data/*.{json,yml}',
  },
  pages: {
    expand: true,
    cwd: '<%= paths.src %>/pages/',
    src: ['*.{hbs,md}'],
    dest: '<%= paths.dist %>/'
  }
};
