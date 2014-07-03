module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        copy: {
            requirejs: {
                src: 'bower_components/requirejs/require.js',
                dest: 'public/js/libs/requirejs/require.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['copy']);

};