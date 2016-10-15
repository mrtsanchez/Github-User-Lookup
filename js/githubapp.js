var apiKey = require('./../.env').apiKey;

function GitHubSearch() {

}

GitHubSearch.prototype.userLookup = function(username, displayResults, displayErrorMessage){

  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
  console.log(response);
  displayResults(username, response.followers, response.avatar_url, response.location, response.html_url)
  }).fail(function(error){
  displayErrorMessage(username);
  });
};

GitHubSearch.prototype.reposLookup = function(username, displayRepos){

  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
  displayRepos(response);
  }).fail(function(error){
  console.log(error);
  });
};


exports.gitHubModule = GitHubSearch;
