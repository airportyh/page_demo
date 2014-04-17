var page = require('page');
var showUsers = require('./show_users');
var showUser = require('./show_user');
var loadUser = require('./load_user');
var loadUsers = require('./load_users');

page('/', loadUsers, showUsers);
page('/user/:id', loadUser, showUser);

page.start();