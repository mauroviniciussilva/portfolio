const { getMessage } = require('../helpers/messages.js');

const TYPE_JSON = 'application/json';
const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_UNAUTHORIZED = 401;
const STATUS_CODE_NOT_FOUND = 404;
const STATUS_CODE_SERVER_ERROR = 500;

const jsonOK = function (data, message, metadata, language = 'en') {
    const status = STATUS_CODE_OK;
    message = getMessage(language, (message ? message : 'response.json_ok'));
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({
        message,
        data,
        metadata,
        status: status
    });
}

const jsonBadRequest = function (data, message, metadata, language = 'en') {
    const status = STATUS_CODE_BAD_REQUEST;
    message = getMessage(language, (message ? message : 'response.json_bad_request'));
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON); 
    return this.json({
        message,
        data,
        metadata,
        status: status
    });
}

const jsonUnauthorized = function (data, message, metadata, language = 'en') {
    const status = STATUS_CODE_UNAUTHORIZED;
    message = getMessage(language, (message ? message : 'response.json_unauthorized'));
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({
        message,
        data,
        metadata,
        status: status
    });
}

const jsonNotFound = function (data, message, metadata, language = 'en') {
    const status = STATUS_CODE_NOT_FOUND;
    message = getMessage(language, (message ? message : 'response.json_not_found'));
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({
        message,
        data,
        metadata,
        status: status
    });
}

const jsonServerError = function (data, message, metadata, language = 'en') {
    const status = STATUS_CODE_SERVER_ERROR;
    message = getMessage(language, (message ? message : 'response.json_server_error'));
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({
        message,
        data,
        metadata,
        status: status
    });
}

const response = (req, res, next) => {
    res.jsonOK = jsonOK;
    res.jsonBadRequest = jsonBadRequest;
    res.jsonUnauthorized = jsonUnauthorized;
    res.jsonNotFound = jsonNotFound;
    res.jsonServerError = jsonServerError;

    next();
};

module.exports = response;