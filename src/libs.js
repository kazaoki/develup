
'use strict'

const fs = require('fs')
const child = require('child_process')
const path = require('path')
const util = require('util');

/**
 * d
 * -----------------------------------------------------------------------------
 * @param {object} ダンプ表示するデータオブジェクト
 */
const d = module.exports.d = data=>console.log(util.inspect(data, {colors: true, compact: false, breakLength: 10, depth: 10}))

/**
 * h
 * -----------------------------------------------------------------------------
 * @param {string} 見出し文字列
 * @param {function} cli-colorメソッド
 */
const h = module.exports.h = (title, clc=color.white)=>console.log('\n  '+clc(title))

/**
 * Repeat
 * -----------------------------------------------------------------------------
 * @param {string} string 繰り返したい文字
 * @param {number} times 繰り返したい回数
 * @return {string} 繰り返した文字列
 */
const Repeat = module.exports.Repeat = (string, times=1)=>{
	if(!times>0) return '';
	let lump = '';
	for(let i=0; i<times; i++) {
		lump += string;
	}
	return lump;
}

/**
 * isWindows
 * -----------------------------------------------------------------------------
 * @return {boolean} Windowsかどうか
 */
const isWindows = module.exports.isWindows = ()=>{return process.platform === 'win32'}

/**
 * isMac
 * -----------------------------------------------------------------------------
 * @return {boolean} MacOSかどうか
 */
const isMac = module.exports.isMac = ()=>{return process.platform === 'darwin'}

/**
 * sleep
 * -----------------------------------------------------------------------------
 * @param {number} msec
 */
const sleep = module.exports.sleep = (msec)=>{
	return new Promise(resole=>{
		setTimeout(resole, msec)
	})
}
