var apiKey = require('./../.env').apiKey;

function GitHubSearch() {

}

GitHubSearch.prototype.userLookup = function(username){

  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
  console.log(response);
  displayResults(username, responseJSON.followers)
  }).fail(function(error){
  console.log(error.responseJSON.message);
  });
};

exports.gitHubModule = GitHubSearch;
