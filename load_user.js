var request = require('superagent');

module.exports = function loadUser(ctx, next){
  if (ctx.state.user){
    next();
  }else{
    var id = ctx.params.id;
    request('https://api.github.com/user/' + id, function(reply){
      var user = reply.body;
      ctx.state.user = user;
      ctx.save();
      next();
    });
  }
}