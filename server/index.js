require('./database/index');

module.exports = function(app) {
    require('./apis')(app);
};
