/*!
 * jyw-sdk v1.0.0
 * (c) 2020-2020 yw
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.yw = factory());
}(this, (function () { 'use strict';

  /**
   * @description: SDK版本
   * @param {*}
   * @return {*}
   */
  var version = {
    v: '1.0.0'
  };

  var name = "ztr-rollup";
  var version$1 = "1.0.0";
  var description = "rollup-cli";
  var main = "index.js";
  var directories = {
  	example: "examples"
  };
  var scripts = {
  	test: "echo \"Error: no test specified\" && exit 1",
  	dev: "rollup -w -c rollup.config.js",
  	build: "rollup -c rollup.build.config.js"
  };
  var keywords = [
  ];
  var author = "ztr";
  var license = "ISC";
  var devDependencies = {
  	"@babel/core": "^7.12.9",
  	"@babel/plugin-external-helpers": "^7.12.1",
  	"@babel/plugin-transform-runtime": "^7.12.1",
  	"@babel/preset-env": "^7.12.7",
  	"@babel/runtime": "^7.12.5",
  	"@rollup/plugin-babel": "^5.2.1",
  	"@rollup/plugin-commonjs": "^16.0.0",
  	"@rollup/plugin-json": "^4.1.0",
  	"@rollup/plugin-node-resolve": "^10.0.0",
  	"rollup-plugin-eslint": "^7.0.0",
  	"rollup-plugin-terser": "^7.0.2"
  };
  var dependencies = {
  };
  var require$$1 = {
  	name: name,
  	version: version$1,
  	description: description,
  	main: main,
  	directories: directories,
  	scripts: scripts,
  	keywords: keywords,
  	author: author,
  	license: license,
  	devDependencies: devDependencies,
  	dependencies: dependencies
  };

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  var hasOwn = {}.hasOwnProperty;
  /**
   * @description: 工具类
   * @param {*}
   * @return {*}
   */

  var utils = {
    /**
     * @description: 对象转换成 query string
     * @param {object} data  待转对象
     * @param {*} urlencode 是否需要 urlencode
     * @return {*} string query string
     */
    stringifyData: function stringifyData(data, urlencode) {
      if (typeof urlencode === 'undefined') {
        urlencode = false;
      }

      var output = [];

      for (var i in data) {
        if (!hasOwn.call(data, i) || typeof data[i] === 'function') {
          continue;
        }

        output.push(i + '=' + (urlencode ? encodeURIComponent(data[i]) : data[i]));
      }

      return output.join('&');
    }
  };

  var hasOwn$1 = {}.hasOwnProperty;
  /**
   * @description: 网络请求
   * @param string {url}
   * @param string {method}  请求方式, POST, GET ...
   * @param object {requestData}  请求数据
   * @param function {successCallback}  成功回调 (data, statusCode, xhr)
   * @param function {errorCallback}  错误回调 (xhr, statusCode, error)
   * @return {*}
   */

  var request = function request(url, method, requestData, successCallback, errorCallback, headers) {
    if (typeof XMLHttpRequest === 'undefined') {
      console.log('Function XMLHttpRequest is undefined.');
      return;
    }

    var xhr = new XMLHttpRequest();

    if (typeof xhr.timeout !== 'undefined') {
      xhr.timeout = 6000;
    }

    method = method.toUpperCase();

    if (method === 'GET' && _typeof_1(requestData) === 'object' && requestData) {
      url += '?' + utils.stringifyData(requestData, '', true);
    }

    xhr.open(method, url, true);

    if (typeof headers !== 'undefined') {
      for (var k in headers) {
        if (hasOwn$1.call(headers, k)) {
          xhr.setRequestHeader(k, headers[k]);
        }
      }
    }

    if (method === 'POST') {
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      xhr.send(JSON.stringify(requestData));
    } else {
      xhr.send();
    }

    if (typeof successCallback === 'undefined') {
      successCallback = function successCallback() {};
    }

    if (typeof errorCallback === 'undefined') {
      errorCallback = function errorCallback() {};
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        successCallback(xhr.responseText, xhr.status, xhr);
      }
    };

    xhr.onerror = function (e) {
      errorCallback(xhr, 0, e);
    };
  };

  var version$2 = version.v;
  var author$1 = require$$1.author;
  /**
   * @description: 主方法
   * @param {*}
   * @return {*}
   */

  var YWSDK = function YWSDK() {
    var _test = 'rollup, 我是测试';
    console.log('我是主函数 :>> ', _test);
  }; // 作者


  YWSDK.prototype.author = author$1; // 版本号

  YWSDK.prototype.version = version$2; // 网络请求

  YWSDK.prototype.request = request;
  var main$1 = new YWSDK();

  /**
   * @description:
   * @param {*}
   * @return {*}
   */

  var ztrRollup = main$1;

  return ztrRollup;

})));
//# sourceMappingURL=jyw.js.map
