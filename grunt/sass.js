module.exports = {
  options: {
    outputStyle: 'expanded',
    sourceComments: true
  },
  dev: {
    src:  '<%= paths.src %>/sass/style.sass',
    dest: '<%= paths.dist %>/css/style.css'
  }
};
