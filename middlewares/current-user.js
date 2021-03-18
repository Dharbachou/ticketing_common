"use strict";
exports.__esModule = true;
exports.currentUser = void 0;
var jwt = require("jsonwebtoken");
var currentUser = function (req, res, next) {
    var _a;
    if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.jwt)) {
        return next();
    }
    try {
        var payload = jwt.verify(req.session.jwt, process.env.JWT_KEY);
        req.currentUser = payload;
    }
    catch (err) { }
    next();
};
exports.currentUser = currentUser;
