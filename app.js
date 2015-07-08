/*

  X = Done
  M = Mostly

  X -The app allows one to search GitHub.com for repos by keyword. 
  X -The app caches the results to prevent triggering duplicate network requests. 
  X -The results should show as a list, 
  X   -grouped by "owner" under Angular Material Design "SubHeadings". 
  X -As demo'd in the Angular Material Design SubHeader Demo, 
      the Owner's name should stick to the top of the scrollable area as 
      the user scrolls through the list of repos. 
  X -Each matching repo should be contained inside a Material Design Card. 
  X -Cards should contain the following information on separate rows:
  X   -Repo Name (in bold, linked to the repo)
  X   -Description. If not available, this row is hidden
  M   -Home page. If not available, this row is hidden
  X   -Language
  X   -Forks
  X   -Open Issues

  - * - * - * - * - * - * - * - * - * - *
  Okay. This is done but it is SUPER gross code. I haven't used any slick animations and
    borked in a library to make my life easier for grouping. I'm not proud of this work, 
    but seeing as how I had maybe 2 hours to do it. It'll pass for tonight. 

    5/26/2015 - M@
  - * - * - * - * - * - * - * - * - * - *
*/

var githubApp = angular.module('githubApp', ['ngMaterial', 'angular.filter']);

githubApp.controller('githubController', function ($scope, $http) {
  $scope.searchQuery = "search here!";
  $scope.callRestService= function() {
    var searchURL = 'http://api.github.com/legacy/repos/search/' + this.searchQuery;
    $http({method: 'GET', url: searchURL, cache:true}).
      success(function(data, status, headers, config) {
           $scope.repos = data.repositories;
      })
  }

});
