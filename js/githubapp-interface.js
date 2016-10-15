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

$(document).ready(function() {

  var currentGitHubSearch = new GitHubSearch();


  $("#github-search").submit(function(event) {

    event.preventDefault();

    var username = $("#username").val();

    currentGitHubSearch.userLookup(username, displayResults, displayErrorMessage);


  });



});
