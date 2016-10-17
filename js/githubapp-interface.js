var GitHubSearch = require('./../js/githubapp.js').gitHubModule;

var displayResults = function (username, followers, following, avatarUrl, location, githubUrl, publicRepos, bio, blog, company, email){

  $("#results").show();

  var profilePicture = $("<img/>", {
    "class": "img-responsive",
    "src": avatarUrl
  });

  $("#name").text(username);
  $("#location").text(location);
  $("#profile_picture").append(profilePicture);
  $("#button-link").append('<a class="btn btn-primary" href='+ githubUrl +' role="button">Go to Github Profile</a>');
  $("#followers").text(followers);
  $("#following").text(following);
  $("#bio").text(bio);
  $("#company").text(company);
  $("#blog").text(blog);
  $("#email").text(email);
  $("#public-repos").text(publicRepos);

};

var displayErrorMessage = function (username) {

  $("#error").show().text("Oh Snap! We couldn’t find any users matching "+"'"+ username +"'");

};

function calculateTime(created_at){

  var months = moment().diff(created_at, 'months');
  var years = moment().diff(created_at, 'years');

  if (months === 1){
    return months + " month ago.";
  } else if (months >= 12){
    return years + "years ago.";
  } else {
    return months + " months ago.";
  }

}

function displayDescription(description){

  if(description === null){
    return " ";
  } else {
    return description;
  }

};

function getRepos(repos, length){
  for (var i = 0; i < length; i++) {
    $("#repos").append('<dt><a class="link" id="all-repos" target="_blank" href="'+ repos[i].html_url +'">'+ repos[i].name +'</a></dt><dd class="repos-description"><p id="display-description">'+ displayDescription(repos[i].description) +'</p><p>Created '+ calculateTime(repos[i].created_at)+'</p><p>'+repos[i].language+'</p></dd>');
  }
};

var displayRepos = function(repos){

  $("#repos").append('<dl>');

  if (repos.length < 6){
    getRepos(repos, repos.length);
    } else {
    getRepos(repos, 6);
    $("#repos").append('<a class="link" id="all-repos" href="#">Display all repos</a>');
  }

  $("#repos").append('</dl>');

};

$(document).ready(function() {

  $("#github-search").submit(function(event) {

    event.preventDefault();

    var input_username = $("#username").val();

    var currentGitHubSearch = new GitHubSearch();

    currentGitHubSearch.userLookup(input_username, displayResults, displayErrorMessage);
    currentGitHubSearch.reposLookup(input_username, displayRepos);

  });

  $("#all-repos").click(function(event){

    event.preventDefault();
    $("#repos").append("aqui deberia salir el resto");
  });



});
