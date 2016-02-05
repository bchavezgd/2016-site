module.exports = {
  // Watches for changes to css or email templates then runs grunt tasks
  options: {
    livereload: true,
    spawn: false
  },
  styles: {
    files: ['<%= paths.src %>/sass/**/*'],
    tasks: ['sass']
  },
  content: {
    files: [
      '<%= paths.src %>/pages/**/*',
      '<%= paths.src %>/layouts/*',
      '<%= paths.src %>/partials/*',
      '<%= paths.src %>/data/*'
    ],
    tasks: ['newer:assemble']
  },
  behavior: {
    files: ['<%= paths.src %>/js/*'],
    tasks: ['newer:copy']
  },
  graphics: {
    files: ['<%= paths.src %>/images/*'],
    tasks: ['newer:imagemin']
  }

};
