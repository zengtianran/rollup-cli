const hasOwn = {}.hasOwnProperty
/**
 * @description: 工具类
 * @param {*}
 * @return {*}
 */
module.exports = {
  /**
   * @description: 对象转换成 query string
   * @param {object} data  待转对象
   * @param {*} urlencode 是否需要 urlencode
   * @return {*} string query string
   */
  stringifyData: function(data, urlencode) {
    if (typeof urlencode === 'undefined') {
      urlencode = false
    }
    var output = []
    for (var i in data) {
      if (!hasOwn.call(data, i) || typeof data[i] === 'function') {
        continue
      }
      output.push(i + '=' +
          (urlencode ? encodeURIComponent(data[i]) : data[i]))
    }
    return output.join('&')
  }
}
