var request = require('superagent');

module.exports = function loadUsers(ctx, next){
  if (ctx.state.users){
    next();
  }else{
    request('https://api.github.com/users', function(reply){
      var users = reply.body;
      ctx.state.users = users;
      ctx.save();
      next();
    });
  }
}