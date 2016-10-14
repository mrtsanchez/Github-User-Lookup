var GitHubSearch = require('./../js/githubapp.js').gitHubModule;

var displayResults = function (username, followers){

  $("#results").text("this is " + username + "and has " + followers + "followers.");

};

$(document).ready(function() {

  var currentGitHubSearch = new GitHubSearch();


  $("#github-search").submit(function(event) {

    event.preventDefault();

    var username = $("#username").val();

    currentGitHubSearch.userLookup(username, displayResults);


  });



});
