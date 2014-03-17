module.exports = {
    compile: {
        "options": {
            "strictImports": true,
            "strictMath": true,
            "strictUnits": true,
            "relativeUrls": false,
            "sourceMap": true
        },
        files: [{
            expand: true,
            cwd: 'app/styles',
            src: ['**/*.less', '!**/_*.less'],
            dest: 'tmp/result/assets/',
            ext: '.css'
        }]
    }
};
