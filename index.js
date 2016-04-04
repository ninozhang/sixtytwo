'use strict';

var s = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var len = s.length;

exports.toString = function (value) {
  if(value < 0) {
    value = 0;
  }

  if(value < len) {
    return s[value];
  }

  var pow = len;
  var maxPow = 0;
  var powValue = 0;
  while(powValue < value) {
    maxPow++;
    powValue = Math.pow(pow, maxPow);
  }

  var str = '';
  var rest = value;
  for(var i = maxPow - 1; i >= 0; i--) {
    var index = Math.floor(rest / Math.pow(pow, i));
    rest -= Math.pow(pow, i) * index;
    str += s[index];
  }
  return str;
};

exports.parseInt = function (str) {
  var arr = str.toString().split('');
  var count = arr.length;
  var num = 0;
  for (var value of arr) {
    --count;
    num += s.indexOf(value) * Math.pow(len, count);
  }
  return num;
};