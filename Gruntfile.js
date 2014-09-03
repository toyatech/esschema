module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsonlint: {
      sample: {
        src: [ 'esschema.json' ]
      }
    },
    watch: {
      esschema: {
        files: [ 'esschema.json' ],
        tasks: ['jsonlint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('default', ['jsonlint']);

}
