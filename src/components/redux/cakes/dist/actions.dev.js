"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCake = exports.buyCake = void 0;

var _type = require("./type");

var buyCake = function buyCake() {
  console.log("enter buycake");
  return {
    type: _type.BUY_CAKE
  };
};

exports.buyCake = buyCake;

var addCake = function addCake() {
  return {
    type: _type.ADD_CAKE
  };
};

exports.addCake = addCake;