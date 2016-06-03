module.exports = function(grunt){
	"use strict";

	var config = {
		app: "www/app",
		appAssets: "www/assets",
        compiledJS: "www/assets/dist",
		test: "test"
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		config: config,

		uglify: {
			options: {
				banner: "// <%= pkg.name %> - v<%= pkg.version %> (<%= grunt.template.today('yyyy-mm-dd') %>)\n",
				mangle: false,
				sourceMap: true
			},
			build: {
                files: [
                    {src: ["<%= config.app %>/**/*.module.js"], dest: "<%= config.compiledJS %>/modules-init.min.js"},
                    {src: ["<%= config.app %>/**/*.js", "!<%= config.app %>/**/*.module.js"], dest: "<%= config.compiledJS %>/prod.min.js"}
                ]
			}
		},
		clean: {
			js: ["<%=config.compiledJS %>/*.min.js"],
			sourceMap: ["<%=config.compiledJS %>/*.map"]
		},
		sass: {
			dev: {
				files: {
					"<%=config.appAssets %>/style/main.css" : "<%= config.appAssets %>/style/sass/main.scss"
				}
			}
		},
		watch: {
            options: {
              livereload: true
            },
			css: {
				files: "<%= config.appAssets %>/**/*.scss",
				tasks: ["sass"]
			},
			js: {
				files: ["<%= config.app %>/**/*.js"],
				tasks: ["clean", "uglify"]
			}
		},
        jshint: {
            files: ["Gruntfile.js", "server.js", "www/app/**/*.js", "test/**/*.js"],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
		karma: {
			unit: {
				configFile: "<%= config.test %>/karma.conf.js"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-contrib-jshint");


	grunt.registerTask("default", ["clean", "uglify", "sass", "watch"]);
    grunt.registerTask("test", ["karma"]);
};