var config = require("../config/paths.js");
const octokit = require('@octokit/rest')()

module.exports = (function () {
  return {
    execute: function () {
      // Retrieve the repository information
      var repoInfo = {};

      try {
        repoInfo = require(`${config.WORKSHOP_HOME}/current/workshopper.js`);
      } catch (e) {}

      octokit.repos.getBranches({owner: repoInfo.owner, repo: repoInfo.repository})
        .then(function(result) {
          // List out the chapters for the workshop
          console.log(`Chapters for ${repoInfo.repository}`.underline.yellow);
          console.log();

          result.data.forEach(function(branch, index) {
            console.log(`${index + 1}. ${branch.name}`);
          })         
        });

    }
  }
})()
