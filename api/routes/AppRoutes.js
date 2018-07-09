'use strict';
module.exports = function (app) {
    var controller = require('../controllers/AuthController');

    app.route('/auth')
        .get(controller.data)
        .post(controller.data)
};
