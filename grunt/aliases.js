module.exports = {
  build: {
    description: 'Bundle code for release',
    tasks: [
      // Clean output directory
      'clean:dist',
      'copy:dist',
      'copy:examples',
      // - minify the packaged javascript
      'uglify:dist'
    ]
  }
};