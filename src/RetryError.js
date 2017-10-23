'use strict';

module.exports = class RetryError extends Error {
    constructor (response, status) {
        // Calling parent constructor of base Error class.
        var statusCode = response.statusCode;
        var body = response.body && typeof response.body.toString === 'function' ? response.body.toString().replace(/\n/g, '\\n') : '';
        var message = `${statusCode} - "${body}"`;
        super(message);

        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name;

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);
    }
};