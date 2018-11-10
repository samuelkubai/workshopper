var config = require("../config/paths.js");
var shell = require("shelljs");

module.exports = (function () {
  return {
    receiveSubmission: function (path) {
      var submissionLocation = `${config.SUBMISSION_FOLDER}/submission.js`;

      // Create the submission folder in case it does not exist.
      shell.mkdir('-p', `${config.SUBMISSION_FOLDER}`);

      // Copy the submission file to the submission directory
      shell.cp(path, submissionLocation);

      shell.cd(`${config.WORKSHOP_HOME}/current`);

      return submissionLocation;
    }
  }
})()
