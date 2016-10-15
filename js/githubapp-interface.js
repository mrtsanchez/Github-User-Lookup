var GitHubSearch = require('./../js/githubapp.js').gitHubModule;

var displayResults = function (username, followers, avatarUrl, location, githubUrl){

  $("#results").show();

  var profilePicture = $("<img/>", {
    "class": "img-responsive",
    "src": avatarUrl
  });

  $("#name").text(username);
  $("#location").text(location);
  $("#profile_picture").append(profilePicture);
  $("#button-link").append('<a class="btn btn-primary" href='+ githubUrl +' role="button">Go to Github Profile</a>');

};

var displayErrorMessage = function (username) {

  $("#error").show().text("Oh Snap! We couldn’t find any users matching "+"'"+ username +"'");

};

function getRepos(repos, length){
  for (var i = 0; i < length; i++) {
    $("#repos").append('<dt>'+ repos[i].name +'</dt><dd class="repos-description">'+ repos[i].description +'</dd>');
  }
}

var displayRepos = function(repos){

  $("#repos").append('<dl>');

  if (repos.length < 6){
    getRepos(repos, repos.length);
    } else {
    getRepos(repos, 6);
    $("#repos").append('<a href="#" id="all-repos">Display all repos</a>');
  }

  $("#repos").append('</dl>');

};

$(document).ready(function() {

  var currentGitHubSearch = new GitHubSearch();


  $("#github-search").submit(function(event) {

    event.preventDefault();

    var username = $("#username").val();

    currentGitHubSearch.userLookup(username, displayResults, displayErrorMessage);
    currentGitHubSearch.reposLookup(username, displayRepos);

  });

  $("#all-repos").click(function(){
    getRepos(repos);
  });



});
