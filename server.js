#!/usr/bin/env node
require('newrelic');
var prerender = require('./lib');

var server = prerender({
    workers: process.env.PRERENDER_NUM_WORKERS,
    softIterations: process.env.PRERENDER_SOFT_ITERATIONS
});


server.use(prerender.sendPrerenderHeader());
// server.use(prerender.basicAuth());
server.use(prerender.whitelist());
server.use(prerender.blacklist());
// server.use(prerender.logger());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
// server.use(prerender.tokenAuth());
// server.use(prerender.inMemoryHtmlCache());
server.use(prerender.s3HtmlCache());

server.start();
