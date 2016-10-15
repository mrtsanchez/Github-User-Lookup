var GitHubSearch = require('./../js/githubapp.js').gitHubModule;

var displayResults = function (username, followers){

  $("#results").text("This is" + username + "and has " + followers + "followers.");

};

var displayErrorMessage = function (username) {

  $("#error").text("We couldn’t find any users matching "+"'"+ username +"'");

};

$(document).ready(function() {

  var currentGitHubSearch = new GitHubSearch();


  $("#github-search").submit(function(event) {

    event.preventDefault();

    var username = $("#username").val();

    currentGitHubSearch.userLookup(username, displayResults, displayErrorMessage);


  });



});
