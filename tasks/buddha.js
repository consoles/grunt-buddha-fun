/*
 * grunt-buddha
 * 
 *
 * Copyright (c) 2015 consoles
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  const LINE_SEPARATOR = grunt.util.normalizelf('\n');

  grunt.registerMultiTask('buddha-fun', '佛祖保佑，永无bug', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    const options = this.options({
      who: 'buddha',
      commentSymbol: '//'
    });

    // 字符画中的特殊标志
    const testExistRegexMap = {
      'buddha': /o8888888o/,
      'girl': /----------/
    }

    var who = options.who,
      commentSymbol = options.commentSymbol,
      commentFilepathMap = {
        'buddha': 'assets/buddha.txt',
        'girl': 'assets/girl.txt'
      },
      commentFilepath = path.join(__dirname, commentFilepathMap[who]),
      commentContent = grunt.file.read(commentFilepath),
      lineCommentArr = commentContent.split(LINE_SEPARATOR); // 取得字符画中的每一行

    lineCommentArr.forEach(function(value, index, arr) {
      arr[index] = commentSymbol + value; // 在每一行的前面加上注释（双斜杠）
    });

    // Array.prototype.join(token)，使用特定的token分隔数组，
    // 例如：[1,2,3].join('--')的结果为'1--2--3',变成了数组类型
    // 在先前的字符串的`split`操作中我们以换行符进行分割，得到的是一个不含换行符的数组，
    // 要想回复到本来的多行文本需要填充换行，即`join`操作
    commentContent = lineCommentArr.join(LINE_SEPARATOR);

    // Iterate over all specified file groups.
    this.files.forEach(function(file) {
      // Concat specified files.
      file.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        var originalFileContent = grunt.file.read(filepath);

        // 如果需要添加字符串的文件中已经有了字符画，就不需要再次添加了
        if (testExistRegexMap[who].test(originalFileContent)) {
          return;
        }
        var newFileContent = commentContent + grunt.util.normalizelf('\n') + originalFileContent;
        grunt.file.write(filepath, newFileContent);
      });

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};