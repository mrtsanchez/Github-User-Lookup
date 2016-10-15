var apiKey = require('./../.env').apiKey;

function GitHubSearch() {

}

GitHubSearch.prototype.userLookup = function(username, displayResults, displayErrorMessage){

  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
  console.log(response);
  displayResults(username, response.followers, response.avatar_url)
  }).fail(function(error){
  displayErrorMessage(username);
  });
};

exports.gitHubModule = GitHubSearch;
