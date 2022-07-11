const Request = require("../lib/Request");

const makeRequest = (url) => new Request(url);

module.exports = makeRequest;
module.exports = {
    Request,
    default: makeRequest,
    request: makeRequest,
};
