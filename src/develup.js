#!/usr/bin/env node

'use strict'

const lib = require('./libs.js')
const option = require('optimist')

/**
 * 標準引数定義
 * -----------------------------------------------------------------------------
 */
let argv = option
	.usage('Usage: develup [Commands] [Options]')
	.options('help', {
		alias: 'h',
		describe: '説明表示'
	})
	.argv
;
let cmd = argv._.shift()

/**
 * coding
 * -----------------------------------------------------------------------------
 * kazaoki/coding-tool をセットアップする
 */
if(cmd==='coding') {
	console.log('kazaoki/coding-tool をセットアップする（予定')
}

/**
 * genie
 * -----------------------------------------------------------------------------
 * kazaoki/genie をセットアップする
 */
else if(cmd==='genie') {
	console.log('kazaoki/genie をセットアップする（予定')
}


/**
 * help
 * -----------------------------------------------------------------------------
 */
else {
	console.log()
	option.showHelp()
	console.log('Commands:')
	console.log('  coding    kazaoki/coding-tool をセットアップする（予定')
	console.log('  genie    kazaoki/genie をセットアップする（予定')
	console.log()
}
