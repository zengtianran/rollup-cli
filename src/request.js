var utils = require('./utils')
var hasOwn = {}.hasOwnProperty
/**
 * @description: 网络请求
 * @param string {url}
 * @param string {method}  请求方式, POST, GET ...
 * @param object {requestData}  请求数据
 * @param function {successCallback}  成功回调 (data, statusCode, xhr)
 * @param function {errorCallback}  错误回调 (xhr, statusCode, error)
 * @return {*}
 */
module.exports = function(url, method, requestData, successCallback, errorCallback, headers) {
  if (typeof XMLHttpRequest === 'undefined') {
    console.log('Function XMLHttpRequest is undefined.')
    return
  }
  var xhr = new XMLHttpRequest()
  if (typeof xhr.timeout !== 'undefined') {
    xhr.timeout = 6000
  }
  method = method.toUpperCase()

  if (method === 'GET' && typeof requestData === 'object' && requestData) {
    url += '?' + utils.stringifyData(requestData, '', true)
  }
  xhr.open(method, url, true)
  if (typeof headers !== 'undefined') {
    for (var k in headers) {
      if (hasOwn.call(headers, k)) {
        xhr.setRequestHeader(k, headers[k])
      }
    }
  }
  if (method === 'POST') {
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(JSON.stringify(requestData))
  } else {
    xhr.send()
  }
  if (typeof successCallback === 'undefined') {
    successCallback = function() {}
  }
  if (typeof errorCallback === 'undefined') {
    errorCallback = function() {}
  }
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      successCallback(xhr.responseText, xhr.status, xhr)
    }
  }
  xhr.onerror = function(e) {
    errorCallback(xhr, 0, e)
  }
}
