var GitHubSearch = require('./../js/githubapp.js').gitHubModule;

var displayResults = function (username, followers, avatarUrl){

  $("#results").show();

  var profilePicture = $("<img/>", {
    "class": "img-responsive",
    "src": avatarUrl
  });

  // var profilePicture = document.createElement("img");
  // profilePicture.src = avatarUrl;
  // profilePicture.class = "img-responsive";

  $("#username").text("This is" + username + "and has " + followers + "followers.");
  $("#profile_picture").append(profilePicture);

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
