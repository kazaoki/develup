// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({3:[function(require,module,exports) {

'use strict';

const fs = require('fs');
const child = require('child_process');
const path = require('path');
const util = require('util');

/**
 * d
 * -----------------------------------------------------------------------------
 * @param {object} ダンプ表示するデータオブジェクト
 */
const d = module.exports.d = data => console.log(util.inspect(data, { colors: true, compact: false, breakLength: 10, depth: 10 }));

/**
 * h
 * -----------------------------------------------------------------------------
 * @param {string} 見出し文字列
 * @param {function} cli-colorメソッド
 */
const h = module.exports.h = (title, clc = color.white) => console.log('\n  ' + clc(title));

/**
 * Repeat
 * -----------------------------------------------------------------------------
 * @param {string} string 繰り返したい文字
 * @param {number} times 繰り返したい回数
 * @return {string} 繰り返した文字列
 */
const Repeat = module.exports.Repeat = (string, times = 1) => {
  if (!times > 0) return '';
  let lump = '';
  for (let i = 0; i < times; i++) {
    lump += string;
  }
  return lump;
};

/**
 * isWindows
 * -----------------------------------------------------------------------------
 * @return {boolean} Windowsかどうか
 */
const isWindows = module.exports.isWindows = () => {
  return process.platform === 'win32';
};

/**
 * isMac
 * -----------------------------------------------------------------------------
 * @return {boolean} MacOSかどうか
 */
const isMac = module.exports.isMac = () => {
  return process.platform === 'darwin';
};

/**
 * sleep
 * -----------------------------------------------------------------------------
 * @param {number} msec
 */
const sleep = module.exports.sleep = msec => {
  return new Promise(resole => {
    setTimeout(resole, msec);
  });
};
},{}],1:[function(require,module,exports) {
///usr/bin/env node

'use strict';

const lib = require('./libs.js');
const option = require('optimist');

/**
 * 標準引数定義
 * -----------------------------------------------------------------------------
 */
let argv = option.usage('Usage: develup [Commands] [Options]').options('help', {
	alias: 'h',
	describe: '説明表示'
}).options('coding', {
	describe: 'kazaoki/coding-tool をセットアップする'
}).options('genie', {
	describe: 'kazaoki/genie をセットアップする'
}).argv;
let cmd = argv._.shift();

/**
 * coding
 * -----------------------------------------------------------------------------
 * kazaoki/coding-tool をセットアップする
 */
if (cmd === 'coding') {
	console.log('kazaoki/coding-tool をセットアップする（予定');
}

/**
 * genie
 * -----------------------------------------------------------------------------
 * kazaoki/genie をセットアップする
 */
if (cmd === 'coding') {
	console.log('kazaoki/genie をセットアップする（予定');
}

/**
 * help
 * -----------------------------------------------------------------------------
 */
else {
		option.showHelp();
	}
},{"./libs.js":3}]},{},[1], null)