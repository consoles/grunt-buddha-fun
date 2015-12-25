/*
 * grunt-buddha
 * 
 * Copyright (c) 2015 consoles
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    buddha: {
      options: {
        who: 'girl', // buddha girl
        commentSymbol: '//'
      },
      dist: ['test/fixtures/*.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['buddha']);

};