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
    },
    bump: {
     options: {
       files: ['package.json', 'manifest.json'],
       updateConfigs: [],
       commit: true,
       commitMessage: 'Release v%VERSION%',
       commitFiles: ['-a'], // '-a' for all files
       createTag: false,
       push: false,
       pushTo: 'digitalocean',
       gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
     }
   },
    compress: {
      main: {
        options: {
          archive: 'devtools-flatland.zip',
          mode: 'zip'
        },
        files: [
        {
          src: ['*.json', 'styles.css', 'devtools.html', 'devtools.js'],
          expand: true,
          dest: 'dist'
        }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('publish', ['bump:patch', 'compress']);
};