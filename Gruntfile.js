module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    release: {
      options: {
         bump: true,
        // file: 'test-component.json',
         add: false,
         commit: false,
         tag: false,
         push: false,
         pushTags: false,
         npm: false,
      }
    },
    mocha_phantomjs: {
      all: ['test/**/*.html']
    },
    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        grep: '*-test',
        ui: 'bdd',
        reporter: 'tap'
      },
      all: { src: ['test/**/*.js'] }
    }
  });

  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-release');

  grunt.registerTask('test', ['simplemocha', 'mocha_phantomjs']);
};