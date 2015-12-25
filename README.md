# grunt-buddha-fun

> 佛祖保佑，永无bug

This grunt plugin is just for fun!

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
$ npm install grunt-buddha-fun --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-buddha');
```

## The "buddha" task

### Overview
In your project's Gruntfile, add a section named `buddha` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  buddha: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever.

```js
grunt.initConfig({
    buddha: {
      options: {
        who: 'girl', // buddha girl
        commentSymbol: '//'
      },
      dist: ['test/fixtures/*.js']
    },
})
```

- who: 字符画的类型，和`tasks/buddha.js`中`commentFilepathMap`配置项一致，默认提供了2个配置项，用户可以自行添加。
- commentSymbol：注释符号，一般情况下不需要修改。
- dist：指定输出的带字符画的js文件的目录

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2015-12-25 &nbsp;&nbsp;&nbsp;&nbsp; v0.0.1

## License
Copyright (c) 2015 consoles. Licensed under the MIT license.