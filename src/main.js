const version = require('./version').v
const author = require('../package.json').author
/**
 * @description: 主方法
 * @param {*}
 * @return {*}
 */
const YWSDK = function() {
  const _test = 'rollup, 我是测试'
  console.log('我是主函数 :>> ', _test)
}
// 作者
YWSDK.prototype.author = author
// 版本号
YWSDK.prototype.version = version
// 网络请求
YWSDK.prototype.request = require('./request')
module.exports = new YWSDK()
