var shell = require("shelljs");
var submissionManager = require("../utils/submissions.js");

module.exports = (function () {
  return {
    execute: function (path) {
      var submissionLocation =  submissionManager.receiveSubmission(path);

      // Run the run command on the workshop
      if (shell.exec(`make verify SUBMISSION_FILE=${submissionLocation}`).code !== 0) {
        shell.exit(1);
      }
    }
  }
})()
