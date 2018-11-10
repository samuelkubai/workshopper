var colors = require("colors");
var config = require("../config/paths.js");
var shell = require("shelljs");

module.exports = (function () {

  return {
    execute: function (path) {
      var submissionLocation = `${config.SUBMISSION_FOLDER}/submission.js`;

      // Create the submission folder in case it does not exist.
      shell.mkdir('-p', `${config.SUBMISSION_FOLDER}`);

      // Copy the submission file to the submission directory
      shell.cp(path, submissionLocation);

      shell.cd(`${config.WORKSHOP_HOME}/current`);

      // Run the run command on the workshop
      if (shell.exec(`make run SUBMISSION_FILE=${submissionLocation}`).code !== 0) {
        shell.exit(1);
      }
    }
  }
})()
