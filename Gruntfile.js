module.exports = function (grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        auto_install: {
            options: {
                cwd: '',
                stdout: true,
                stderr: true,
                failOnError: true
            }
        },
        copyto: {
            production: {
                files: [
                    {cwd: './dev/api/v1/doc', src: ['**/*'], dest: './deploy/'} //APP NODEJS
                ],
                options: {
                    // array of ignored paths, can be specific files or a glob
                    ignore: [
                        './dev/**/*.map',
                        './dev/**/*.ts',
                        './dev/node_modules/**/*.*',
                        './dev/api/v1/model/**/*.*',
                        './dev/api/v1/swagger/**/*.*',
                        './**/DefinitelyTyped/**/*'
                    ]
                }
            }
        },
        clean: {
            production: {
                src: ["./deploy/"]
            }
        },
        exec: {
            production: {
                cwd: "./deploy/",
                command: 'npm install',
                stdout: false,
                stderr: false
            }
        },
        ymagyn_api_doc: {
            production: {
                options: {
                    pkg: grunt.file.readJSON('api.json'),
                    basePath: './dev/api/'
                }
            }
        },
        remove: {
            options: {
                trace: true
            },
            fileList: ['.gitignore']
        }
    });

    grunt.loadNpmTasks('grunt-auto-install');
    grunt.loadNpmTasks('grunt-copy-to');
    grunt.loadNpmTasks('grunt-build-control');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-shell-spawn');
    grunt.loadNpmTasks('ymagyn_api_doc');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-remove');

    grunt.registerTask('build', [
        'ymagyn_api_doc:production',
        'clean:production',
        'copyto:production'
    ]);
    grunt.registerTask('init', [
        //'remove',
        'ymagyn_api_doc:production'

    ]);
};
