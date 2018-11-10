#!/usr/bin/env node

const program = require("commander");
const StartCmd = require("../lib/start.js")
const ChapterListCmd = require("../lib/chapters.js");
const ChapterStartCmd = require("../lib/open.js");
const RunCmd = require("../lib/run.js");
const VerifyCmd = require("../lib/verify.js");

/*************************************************************************/

program
  .command('start <url>')
  .description("Start a new workshop with this command by providing the URL to the workshop repository")
  .action(function (url, args) {
    StartCmd.execute(url, args);
  });

/************************************************************************/

program
  .command('chapters')
  .description("List out the chapters of the current workshop")
  .action(function () {
    ChapterListCmd.execute();
  });


/************************************************************************/

program
  .command('open <chapter>')
  .description("Open a new chapter of the workshop")
  .action(function (branch, arg) {
    ChapterStartCmd.execute(branch, arg);
  });

/************************************************************************/

program
  .command('run <file>')
  .description("Execute a submission for the exercise of the current chapter")
  .action(function (file, args) {
    RunCmd.execute(file, args);
  });

/************************************************************************/

program
  .command('verify <file>')
  .description("Verify the submission for an exercise of the current chapter")
  .action(function (file, args) {
    VerifyCmd.execute(file, args);
  });

program.parse(process.argv);

