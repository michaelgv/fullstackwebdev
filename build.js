const path      = require('path');
const jade      = require('jade');
const fs        = require('fs');
const walk      = require('walk');
const walker    = walk.walk(path.join(__dirname, "/views"));
const verbose   = true;

walker.on("file", function (root, fileStats, next) {
    var fsName = fileStats.name;
    var buildPath = path.join(__dirname, '/build/' + fsName.replace('.jade', '.html'));
    var viewPath = path.join(__dirname, '/views/' + fsName);
    var compiled = jade.compileFile(viewPath, {});
    compiled = compiled();
    if(fsName.indexOf('layout.jade') > -1) {
        next();
        return;
    }
    if(fs.existsSync(buildPath)) {
        verbose && console.log('Overwriting file ' + buildPath);
        fs.unlinkSync(buildPath);
    }
    fs.writeFile(buildPath, compiled, (err) => {
        if(err) throw err;
    })
    next();
})
