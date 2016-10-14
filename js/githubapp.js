var apiKey = require('./../.env').apiKey;

function GitHubSearch() {

}

GitHubSearch.prototype.userLookup = function(name){

  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
  console.log(response);
  }).fail(function(error){
  console.log(error.responseJSON.message);
  });

};

exports.gitHubModule = GitHubSearch;
