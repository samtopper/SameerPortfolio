module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  responsive_images: {
    myTask: {
      options: {
        sizes: [{
          width: 320,
          height: 240
        },{
          name: 'large',
          width: 640
        },{
          name: "large",
          width: 1024,
          suffix: "_x2",
          quality: 60
        }]
      },
      files: [{
        expand: true,
        src: ['assets/**.{jpg,gif,png}'],
        cwd: 'test/',
        dest: 'tmp/'
      }]
    }
  },
})

  // Load the plugin that provides the "responsive image" task.
  grunt.loadNpmTasks('grunt-responsive-images');

  // Default task(s).
  grunt.registerTask('default', ['responsive_images']);

};