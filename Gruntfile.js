module.exports = function(grunt){
	"use strict";

	var config = {
		app: 'www',
		test: "test"
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		config: config,

		uglify: {
			options: {
				banner: '// <%= pkg.name %> - v<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)\n',
				mangle: false
			},
			build: {
				options: {
					sourceMap: true
				},
				src: "<%= config.app %>/js/**/*.js",
				dest: "<%= config.app %>/js/dist/prod.min.js"
			}
		},
		clean: {
			js: ['<%=config.app %>/js/dist/*.min.js'],
			sourceMap: ['<%=config.app %>/js/dist/*.map']
		},
		sass: {
			dev: {
				files: {
					"<%=config.app %>/style/main.css" : "<%= config.app %>/style/sass/main.scss"
				}
			}
		},
		watch: {
			css: {
				files: "<%= config.app %>/**/*.scss",
				tasks: ["sass"]
			},
			js: {
				files: ["<%= config.app %>/**/*.js", "!<%= config.app %>/**/*.min.js"],
				tasks: ["clean", "uglify"]
			}
		},
		connect: {
			web: {
				options: {
					port: 8080,
					base: "<%= config.app %>",
					keepalive: true
				}
			}
		},
		concurrent: {
			serve: ["connect:web","watch"]
		},
		jshint: {
			files: ['Gruntfile.js', '<%= config.app %>/js/**/*.js', '<%= config.test %>/**/*.js'],
			options: {
				globals: {
					jQuery: true,
					console: true,
					angular: true
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
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-concurrent");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-karma");


	grunt.registerTask("jscheck", ["clean", "jshint"]);
	grunt.registerTask("default", ["clean", "uglify", "concurrent:serve"]);
};