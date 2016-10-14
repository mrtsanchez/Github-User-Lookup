var apiKey = require('./../.env').apiKey;

function GitHubSearch() {

}

GitHubSearch.prototype.userLookup = function(username, displayResults){

  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
  console.log(response);
  displayResults(username, response.followers)
  }).fail(function(error){
  console.log(error.responseJSON.message);
  });
};

exports.gitHubModule = GitHubSearch;
