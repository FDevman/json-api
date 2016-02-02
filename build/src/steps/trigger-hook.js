"use strict";

var _Promise = require("babel-runtime/core-js/promise")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (resource, hook, registry, frameworkReq, frameworkRes) {
  var fn = registry[hook](resource.type);

  if (!fn) {
    return _Promise.resolve([]);
  }

  return _Promise.resolve(fn(resource, frameworkReq, frameworkRes));
};

module.exports = exports["default"];