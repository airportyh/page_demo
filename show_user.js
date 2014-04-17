var mustache = require('mustache');
var template = require('./user_view');

module.exports = function showUser(ctx){
  var user = ctx.state.user;
  content.innerHTML = 
    mustache.render(template, user);
};