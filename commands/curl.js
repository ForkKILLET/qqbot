const axios = require('axios');
exports.sudo = true;
exports.exec = async (args, e, context) => {
    console.log(args);
    let res = await axios.get(args);
    return res.data;
}