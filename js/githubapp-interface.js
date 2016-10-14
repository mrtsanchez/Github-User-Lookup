var GitHubSearch = require('./../js/githubapp.js').gitHubModule;

$(document).ready(function() {

  var currentGitHubSearch = new GitHubSearch(name);

  $("#github-search").submit(function(event) {



    event.preventDefault();
    var name = $("#name").val();

    currentGitHubSearch.userLookup(name);

    $("#results").text("test");


  });



});
