module.exports = function(grunt) {
  require('load-grunt-config')(grunt, {
    data: {
      paths: {
        src: './_src',
        dist: './_site'
      }
    }
  });
};
