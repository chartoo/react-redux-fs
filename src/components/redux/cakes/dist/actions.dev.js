"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCake = exports.buyCake = void 0;

var _type = require("./type");

var buyCake = function buyCake() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    type: _type.BUY_CAKE,
    payload: number
  };
};

exports.buyCake = buyCake;

var addCake = function addCake() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    type: _type.ADD_CAKE,
    payload: number
  };
};

exports.addCake = addCake;