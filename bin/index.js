#!/usr/bin/env node

const program = require("commander");
const StartCmd = require("../lib/start.js")

/*************************************************************************/

program
  .command('start <url>')
  .action(function (url, args) {
    StartCmd.execute(url, args);
  })

program.parse(process.argv)


