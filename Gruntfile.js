module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jsDest: 'public/js/libs',

        copy: {

            requirejs: {
                src: 'bower_components/requirejs/require.js',
                dest: '<%= jsDest %>/requirejs/require.js'
            },

            bootstrap: {

                files: [
                    {
                        src: 'bower_components/bootstrap/dist/js/bootstrap.min.js',
                        dest: '<%= jsDest %>/twbs/bootstrap.min.js'
                    },
                    {
                        src: 'bower_components/bootstrap/dist/css/*.min.css',
                        dest: 'public/css/',
                        expand: true,
                        flatten: true
                    },
                    {
                        src: 'bower_components/bootstrap/dist/fonts/*',
                        dest: 'public/fonts/',
                        expand: true,
                        flatten: true,
                        filter: 'isFile'
                    }
                ]
            },

            jquery: {
                src: 'bower_components/jquery/dist/jquery.min.js',
                dest: '<%= jsDest %>/jquery/jquery.min.js'
            }
        }
    });

    // Load plugins.
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['copy']);

};