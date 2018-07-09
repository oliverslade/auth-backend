var axios = require('axios');
var data = require('../resources/token.json')

exports.data = async (req, res) => {
    res.json(data);
}
