module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['sass/*.sass'],
        tasks: ['sass']
      }
    },
    sass: {
      dist: {
        files: {
          'styles.css': 'sass/flatland.sass'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['watch']);
};