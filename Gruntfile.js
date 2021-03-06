module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    release: {
      options: {
         bump: true,
        // file: 'test-component.json',
         add: true,
         commit: true,
         tag: true,
         push: true,
         pushTags: true,
         npm: true,
      }
    },
    mocha_phantomjs: {
      all: ['test/**/*.html']
    },
    simplemocha: {
      options: {
//        globals: ['should'],
//        timeout: 3000,
//        ignoreLeaks: false,
//        grep: '*-test',
//        ui: 'bdd',
//        reporter: 'tap'
      },
      all: { src: ['test/**/*.js'] }
    },
    pushit: {
	},
	test: {
	},
  });

  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-release');

  grunt.registerTask('test', ['simplemocha']);
  grunt.registerTask('pushit', ['simplemocha', 'release']);
};