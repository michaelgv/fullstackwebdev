/**
 * Development Server
 */
const express   = require('express');
const app       = express();
const port      = process.env.PORT || 9002;
const path      = require('path');
const jade      = require('jade');
const fs        = require('fs');

/**
 * Set static links
 */
app.use('/assets', express.static(path.join(__dirname, '/build/assets')));

/**
 * Set View Engine
 */
app.set('view engine', 'jade');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/:pagepath', (req, res) => {
    console.log(req.url);
    req.url = req.url.replace(/\.html/g, '');
    var currentPath = path.join(__dirname, '/views/', req.url + '.jade');
    if(fs.existsSync(currentPath)) {
    //    var src = jade.compileFile(currentPath);
    //    res.send(src);
        res.render(req.url.replace(/\//g, ''));
    }
    else {
        res.send('404');
    }
})

app.listen(port);