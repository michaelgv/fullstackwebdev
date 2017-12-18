## Full Stack Web Development Guide

This is a work in progress guide to help teach you full stack web development, from start to finish. Feel to contribute. We use Jade templating engine, which compiles into static HTML.

### Adding Pages

Just create a new file in the views folder, ie: ```example.jade```

Sample content:

```javascript
extends ./layout.jade

block extrameta
    meta(name='description', content='Full Stack Web Development course made available online for free')

block briefintro
    h2 Let's get started
    p.lead You'll need to install a few bits of software to help us along our journey.

block level
    div.level
        span.level-difficulty BEGINNER

block content
    div.content-space
        blockquote
            h4.title Already have an IDE and NodeJS?
            :markdown
                You can [safely move onto the configuration part](configure_ide.html), but feel free to continue if you need a refresher.
        h3 Prerequisites
        
        :markdown
            You can also do **some markdown** in here
```

### Dev Server
Run ```node devServer.js``` to run a live dev server on port *:9002

### Build for production
Run ```node build.js``` and this will generate static HTML files.