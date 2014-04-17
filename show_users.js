var mustache = require('mustache');
var template = require('./users_view');

module.exports = function showUsers(ctx){
  var users = ctx.state.users;

  content.innerHTML = 
      mustache.render(template, users);
}