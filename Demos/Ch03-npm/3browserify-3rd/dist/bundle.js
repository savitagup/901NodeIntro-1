(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

module.exports = function arrayToText(array) {
	return array.join(", ");
}

},{}],2:[function(require,module,exports){
'use strict';

var arrUnion = require("arr-union");
var arrayToText = require("./array-to-text");

document.addEventListener("DOMContentLoaded", function() {
	var arrayOne = [1, 2, 3, 4, 5, 6, 7];
	var arrayTwo = [3, 4, 5, 6, 7, 8, 9];

	var combinedArray = arrUnion(arrayOne, arrayTwo);
	var text = arrayToText(combinedArray);

	document.getElementById("text").innerHTML = text;
});

},{"./array-to-text":1,"arr-union":3}],3:[function(require,module,exports){
'use strict';

module.exports = function union(init) {
  if (!Array.isArray(init)) {
    throw new TypeError('arr-union expects the first argument to be an array.');
  }

  var len = arguments.length;
  var i = 0;

  while (++i < len) {
    var arg = arguments[i];
    if (!arg) continue;

    if (!Array.isArray(arg)) {
      arg = [arg];
    }

    for (var j = 0; j < arg.length; j++) {
      var ele = arg[j];

      if (init.indexOf(ele) >= 0) {
        continue;
      }
      init.push(ele);
    }
  }
  return init;
};

},{}]},{},[2]);
