#!/usr/bin/env node

const program = require("commander");
const StartCmd = require("../lib/start.js")
const ChapterListCmd = require("../lib/chapter/list.js");
const RunCmd = require("../lib/run.js");

/*************************************************************************/

program
  .command('start <url>')
  .action(function (url, args) {
    StartCmd.execute(url, args);
  });

/************************************************************************/

program
  .command('chapter-list')
  .action(function () {
    ChapterListCmd.execute();
  });


/************************************************************************/

program
  .command('chapter-start <branch>')
  .action(function (branch, arg) {
    ChapterStartCmd.execute(branch, arg);
  });

/************************************************************************/

program
  .command('run <file>')
  .action(function (branch, arg) {
    RunCmd.execute(branch, arg);
  });

program.parse(process.argv);

