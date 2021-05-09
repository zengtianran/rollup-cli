import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
const version = require('./package.json').version

const banner =
  '/*!\n' +
  ` * jyw-sdk v${version}\n` +
  ` * (c) 2020-${new Date().getFullYear()} yw\n` +
  ' * Released under the MIT License.\n' +
  ' */'
const rollupConfig = {
  input: ['./index.js'],
  output: {
    file: './examples/jyw.min.js', // 输出文件
    format: 'umd', //  五种输出格式：amd /  es6 / iife / umd / cjs
    name: 'yw', // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
    sourcemap: false, // 生成bundle.map.js文件，方便调试
    banner: banner
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    }),
    json(),
    terser()
  ]
}
module.exports = rollupConfig
