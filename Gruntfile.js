/*
* grunt
* http://gruntjs.com/
*
* Copyright (c) 2013 "Cowboy" Ben Alman
* Licensed under the MIT license.
* https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
*/

'use strict';

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		concat : {
			js : {
				src: ["static/js/datas.js", "static/js/init.js"],
				dest: "static/js/player.js"
			}
		},
		uglify : {
			options: {
				// banner: '/* 所有的插件 */\n'
			},
			js : {
				src: "static/js/player.js",
				dest: "static/js/player.min.js"
			}
		},
		jshint: {
			// define the files to lint
			files: ["static/js/*.js"],
			// configure JSHint (documented at http://www.jshint.com/docs/)
			options: {
				browser: true,
				// more options here if you want to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
		},
		cssmin: {
			options: {
				keepSpecialComments: 0
			},
			compress: {
				files: {
					'static/css/player.min.css': ["static/css/common.css", "static/css/player.css"],
				}
			}
		},
		watch: {
			files: ['1.js', '2.js'],
			tasks: 'test2'
		}
	});

// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-nodeunit');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

// "npm test" runs these tasks
grunt.registerTask('test', ['concat', "uglify", "cssmin"]);

grunt.registerTask('test2', ['jshint']);

// Default task.
grunt.registerTask('default', ['test']);

// Run sub-grunt files, because right now, testing tasks is a pain.
grunt.registerMultiTask('subgrunt', 'Run a sub-gruntfile.', function() {
	var path = require('path');
	grunt.util.async.forEachSeries(this.filesSrc, function(gruntfile, next) {
		grunt.util.spawn({
				grunt: true,
				args: ['--gruntfile', path.resolve(gruntfile)],
			}, function(error, result) {
				if (error) {
					grunt.log.error(result.stdout).writeln();
					next(new Error('Error running sub-gruntfile "' + gruntfile + '".'));
				} else {
					grunt.verbose.ok(result.stdout);
					next();
				}
			});
		}, this.async());
	});
};