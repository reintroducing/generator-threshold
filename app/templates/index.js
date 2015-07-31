'use strict';

var fs = require('fs'),
    generators = require('yeoman-generator'),
    _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);

        // arguments passed in during initialization (yo threshold [appname])
        this.argument('appname', {type: String, required: true});

        this.appname = _.kebabCase(this.appname);
    },

    prompting: function() {
        var done = this.async();

        this.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Project name'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Project description'
            },
            {
                type: 'input',
                name: 'git',
                message: 'Project Git repo'
            },
            {
                type: 'input',
                name: 'name',
                message: 'Your name',
                default: 'Matt Przybylski'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Your email',
                default: 'mprzybylski@gmail.com'
            },
            {
                type: 'confirm',
                name: 'browserify',
                message: 'Use Browserify?',
                default: true
            },
            {
                type: 'confirm',
                name: 'babel',
                message: 'Use Babel?',
                default: true
            },
            {
                type: 'confirm',
                name: 'jquery',
                message: 'Use jQuery?',
                default: false
            },
            {
                type: 'confirm',
                name: 'backbone',
                message: 'Use Backbone?',
                default: false
            },
            {
                type: 'confirm',
                name: 'react',
                message: 'Use React?',
                default: false
            },
            {
                type: 'confirm',
                name: 'sprites',
                message: 'Use CSS sprites?',
                default: false
            }
        ], function(answers) {
            this.title = answers.title;
            this.description = answers.description;
            this.git = answers.git;
            this.name = answers.name;
            this.email = answers.email;
            this.useBrowserify = answers.browserify;
            this.useBabel = answers.babel;
            this.usejQuery = answers.jquery;
            this.useBackbone = answers.backbone;
            this.useReact = answers.react;
            this.useSprites = answers.sprites;

            if (this.useBackbone) {
                this.usejQuery = true;
            }

            done();
        }.bind(this));
    },

    writing: function() {
        var config = {
                title: this.title,
                slug: this.appname,
                description: this.description,
                git: this.git,
                year: new Date().getFullYear(),
                name: this.name,
                email: this.email,
                useBrowserify: this.useBrowserify,
                useBabel: this.useBabel,
                usejQuery: this.usejQuery,
                useBackbone: this.useBackbone,
                useReact: this.useReact,
                useSprites: this.useSprites
            },
            jsFile = (this.useBrowserify) ? 'app.js' : 'main.js';

        // general files
        this.fs.copyTpl(this.templatePath('.gitignore'), this.destinationPath('.gitignore'), config);
        this.fs.copyTpl(this.templatePath('.htaccess'), this.destinationPath('.htaccess'));
        this.fs.copyTpl(this.templatePath('.jshintrc'), this.destinationPath('.jshintrc'));
        this.fs.copyTpl(this.templatePath('gulpfile.js'), this.destinationPath('gulpfile.js'), config);
        this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath('index.html'), config);
        this.fs.copyTpl(this.templatePath('LICENSE'), this.destinationPath('LICENSE'), config);
        this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), config);
        this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), config);

        // gulp
        this.fs.copy(this.templatePath('gulp/utils'), this.destinationPath('gulp/utils'));
        this.fs.copy(this.templatePath('gulp/index.js'), this.destinationPath('gulp/index.js'));
        this.fs.copyTpl(this.templatePath('gulp/config.json'), this.destinationPath('gulp/config.json'), config);
        this.fs.copyTpl(this.templatePath('gulp/tasks/browser-sync.js'), this.destinationPath('gulp/tasks/browser-sync.js'));
        this.fs.copyTpl(this.templatePath('gulp/tasks/build.js'), this.destinationPath('gulp/tasks/build.js'), config);
        this.fs.copyTpl(this.templatePath('gulp/tasks/clean.js'), this.destinationPath('gulp/tasks/clean.js'));
        this.fs.copyTpl(this.templatePath('gulp/tasks/copy.js'), this.destinationPath('gulp/tasks/copy.js'));
        this.fs.copyTpl(this.templatePath('gulp/tasks/default.js'), this.destinationPath('gulp/tasks/default.js'));
        this.fs.copyTpl(this.templatePath('gulp/tasks/imagemin.js'), this.destinationPath('gulp/tasks/imagemin.js'));
        this.fs.copyTpl(this.templatePath('gulp/tasks/lint.js'), this.destinationPath('gulp/tasks/lint.js'), config);
        this.fs.copyTpl(this.templatePath('gulp/tasks/sass.js'), this.destinationPath('gulp/tasks/sass.js'));
        this.fs.copyTpl(this.templatePath('gulp/tasks/usemin.js'), this.destinationPath('gulp/tasks/usemin.js'));
        this.fs.copyTpl(this.templatePath('gulp/tasks/watch.js'), this.destinationPath('gulp/tasks/watch.js'), config);

        if (this.useBrowserify) {
            this.fs.copyTpl(this.templatePath('gulp/tasks/browserify.js'), this.destinationPath('gulp/tasks/browserify.js'), config);
        }

        // sass
        this.fs.copy(this.templatePath('sass'), this.destinationPath('sass'));

        // javascript
        this.fs.copyTpl(this.templatePath('js/' + jsFile), this.destinationPath('js/' + jsFile), config);

        if (this.useBackbone) {
            this.fs.copy(this.templatePath('js/collections'), this.destinationPath('js/collections'));
            this.fs.copy(this.templatePath('js/models'), this.destinationPath('js/models'));
            this.fs.copy(this.templatePath('js/routers'), this.destinationPath('js/routers'));
            this.fs.copy(this.templatePath('js/views'), this.destinationPath('js/views'));
        }

        fs.mkdir(this.destinationPath('images'));

        if (this.useSprites) {
            fs.mkdir(this.destinationPath('sprites'));
        }

        // test lodash usage in JS
        //
        // ESLint
    },

    installCommonDeps: function() {
        var devDependencies = [
                'browser-sync',
                'del',
                'gulp',
                'gulp-autoprefixer',
                'gulp-if',
                'gulp-jshint',
                'gulp-minify-css',
                'gulp-notify',
                'gulp-sass',
                'gulp-shell',
                'gulp-sourcemaps',
                'gulp-uglify',
                'gulp-usemin',
                'gulp-util',
                'imageoptim-cli',
                'jshint-stylish',
                'pretty-hrtime',
                'require-dir',
                'run-sequence'

            ],
            dependencies = [];

        if (this.useBrowserify) {
            devDependencies.push(
                'browserify',
                'browserify-shim',
                'vinyl-buffer',
                'vinyl-source-stream',
                'watchify'
            );
            dependencies.push('lodash');
        }

        if (this.usejQuery) {
            dependencies.push('jquery');
        }

        if (this.useBackbone) {
            devDependencies.push(
                'node-underscorify'
            );
            dependencies.push(
                'backbone',
                'lodash'
            );
        }

        this.npmInstall(_.uniq(devDependencies), {saveDev: true});
        this.npmInstall(_.uniq(dependencies), {save: true});
    }
});
