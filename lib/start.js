var colors = require("colors");
var shell = require("shelljs");
var config = require("../config/paths.js");

module.exports = (function () {
  return {
    execute: function (url) {
      console.log(`Setting up ${url}...`.yellow);
      
      // Check if git is installed on the machine
      if (!shell.which('git')) {
        console.log(`Sorry, in order to start a workshop you require to have installed git`.red);
        shell.exit(1);
      }


      // Clone the workshop to the local machine
      if (shell.exec(`git clone ${url} workshop`).code !== 0) {
        console.log('Error: Cloning the workshop failed'.red);
        shell.exit(1);
      }

      // Create the workshop directory in case it does not exist
      shell.mkdir('-p', `${config.WORKSHOP_HOME}`);

      // Move the workshop to the right directory
      shell.mv('workshop', `${config.WORKSHOP_HOME}/current`);

      // Show a success message.
      console.log();
      console.log(`Workshop stored in ${config.WORKSHOP_HOME}/current`.gray);
      console.log('Successfully setup the workshop'.green);
    }
  }
})()
