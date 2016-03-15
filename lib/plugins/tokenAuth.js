module.exports = {
  beforePhantomRequest: function(req, res, next) {
    var token = req.headers['x-prerender-token'];

    if (!this.isAuthorized(token)) return this.fail(req, res, next);
      return next();
  },
  fail: function(req, res, next) {
    res.send(401);
  },
  isAuthorized: function(token) {
    if(token === process.env.PRERENDER_TOKEN) return true;
  }
}
