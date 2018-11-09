var shell = require("shelljs");
var config = require("../../config/paths.js");
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');

module.exports = (function () {
  return {
    execute: function (branch) {
      // Checkout the new branch
      shell.cd(`${config.WORKSHOP_HOME}/current`);

      // Switch to the branch
      if (shell.exec(`git checkout --quiet ${branch}`).code !== 0) {
        console.log(`Error: Switching to the chapter ${branch} failed`.red);
        shell.exit(1);
      }
      
      // Update the branch
      if (shell.exec(`git pull --quiet origin ${branch}`).code !== 0) {
        console.log(`Error: Updating the chapter ${branch} failed`.red);
        shell.exit(1);
      }

      // Run the `make intro` command on the repository
      marked.setOptions({
        // Define custom renderer
        renderer: new TerminalRenderer()
      });

      // Run the branch start command
      var startOutput = shell.exec(`make start`, {silent: true});
      if (startOutput.code !== 0) {
        console.log(`Error: Starting the chapter ${branch} failed`.red);
        shell.exit(1);
      }

      console.log(marked(startOutput.stdout));
    }
  }
})()
