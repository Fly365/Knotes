# grunt基本功能

新建*package.json*文件 
>		{"name": "projectName", 
	 	"version": "0.1.0", 
	 	"devDependencies": { 
	 	"grunt": "~0.4.0", 
	 	"grunt-contrib-jshint": "~0.1.1", 
	 	"grunt-contrib-uglify": "~0.1.2", 
	 	"grunt-contrib-concat": "~0.1.1" 
	 	} 
	 }

输入`npm install`命令安装相应的nodejs插件

新建 *Gruntfile.js*文件 
`grunt build` build
将src下的test1.js和test2.js合并到dest下的test.js并压缩成test.min.js，代码如下：
>		module.exports = function(grunt) { // 配置 
		grunt.initConfig({ 
			pkg : grunt.file.readJSON('package.json'), 
			concat : { 
				domop : { 
					src: ['src/test1.js', 'src/test2.js'], 
					dest: 'dest/test.js' 
				} 
			}, 
			uglify : { 
				options : { 
					banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' 
					}, 
				build : { 
					src : 'dest/test.js', 
					dest : 'dest/test.min.js' 
					} 
				} 
		}); 
		// 载入concat和uglify插件，分别对于合并和压缩 
		grunt.loadNpmTasks('grunt-contrib-concat'); 
		grunt.loadNpmTasks('grunt-contrib-uglify'); // 注册任务
		grunt.registerTask('default', ['concat', 'uglify']); };
