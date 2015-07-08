/*
  Scripts Application 

  A simple application to list my scripts for people on the internet to see them 

  - User Should be able to see details about a script
    - Logline
    - Description
    - A Review if there is one. 
    - Download link for the script. 
    - concept images. 
  - User should be able to write a review about the script.
  - There should be a button at the top to get my contact information 
    - Contact has my picture
    - my email
    - my phone number
  - there should be a pop out panel on the left to filter scripts. 
*/

var scripts = [
  {
    name:"Dignity; Trust", 
    logline:"foo, bar", 
    description:"lkajsdlfkjasdf", 
    review:{
      score: 7, 
      positives: "Good Stuff", 
      negatives: "Bad Stuff", 
      link: "http://blcklst.com"
    },
    download_link:"http://mattmoeller.com",
    concept_images:[],
    price: 5000
  },
  {
    name:"Locke and Lowde", 
    logline:"foo, bar", 
    description:"lkajsdlfkjasdf", 
    review:{
      score: 7, 
      positives: "Good Stuff", 
      negatives: "Bad Stuff", 
      link: "http://blcklst.com"
    },
    download_link:"http://mattmoeller.com",
    concept_images:[],
    price: 5000
  }
];
var scriptApp = angular.module('scriptApp', ['ngMaterial', 'angular.filter']);
scriptApp.name = "Matt Moeller's Scripts";

scriptApp.controller('scriptController', function ($scope, $http) {
  $scripts = scripts;
});

