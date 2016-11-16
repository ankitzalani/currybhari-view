var Knex = require('knex');
var knexConfig = require('./knexfile');
var Model = require('objection').Model;
var registerApi = require('./api');

module.exports = function(app) {
  var knex = Knex(knexConfig.development);

  Model.knex(knex);

  registerApi(app);
};
