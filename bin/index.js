#!/usr/bin/env node

const program = require("commander");
const StartCmd = require("../lib/start.js")
const ChapterListCmd = require("../lib/chapter/list.js");

/*************************************************************************/

program
  .command('start <url>')
  .action(function (url, args) {
    StartCmd.execute(url, args);
  })

/************************************************************************/

program
  .command('chapter list')
  .action(function () {
    ChapterListCmd.execute();
  })
program.parse(process.argv)


