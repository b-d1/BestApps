angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('myCtrl', function($scope) {
  $scope.tasks = [
    { title: 'Instagram' , category: 'Social Media', avatar: '../img/instagram.png', downloads: 100, rating: '4.5', stars: "✮ ✮ ✮ ✮ ✡"},
    { title: 'Snapchat' , category: 'Social Media',  avatar: '../img/snapchat.png',  downloads: 120, rating: '3', stars: "✮ ✮ ✮ ✮ ✮"},
    { title: 'PokemonGo' , category: 'Games',  avatar: '../img/pokemongo.png', downloads: 10, rating: '5', stars:"✮ ✮ ✮ ✮ ✮"},
    { title: 'TinyScanner' , category: 'Scanner',  avatar: '../img/tinyscanner.png', downloads: 1, rating:'0.5', stars:"✡ ✡ ✡ ✡ ✡"},
    { title: 'Can You Escape?' , category: 'Games',  avatar: '../img/canyouescape.png', downloads: 3, rating: '1', stars: "✮ ✡ ✡ ✡ ✡"},
    { title: 'Skype' ,  category: 'Social Media', avatar: '../img/skype.png',  downloads: 150, rating: '5', stars: "✮ ✮ ✮ ✮ ✮"},
    { title: 'Outlook' ,  category: 'E-mail', avatar: '../img/outlook.png', downloads: 90, rating: '4', stars:"✮ ✮ ✮ ✮ ✡"},
    { title: 'QuizUp' , category: 'Games',  avatar: '../img/quizup.png', downloads: 18, rating:'2', stars:"✮ ✮ ✡ ✡ ✡"},
    { title: 'Backgammon' , category: 'Games',  avatar: '../img/backgammon.png', downloads: 2, rating: '0.2', stars: " ✡ ✡ ✡ ✡ ✡"},
    { title: 'Learn SQL' , category: 'Educational',  avatar: '../img/learnsql.png',  downloads: 3, rating: '1', stars: "✮ ✡ ✡ ✡ ✡"},
    { title: 'Piano Tiles' ,  category: 'Games',  avatar: '../img/pianotiles.png', downloads: 105, rating: '5', stars:"✮ ✮ ✮ ✮ ✮"},
    { title: 'Photoshop Express' , category: 'Photo editor',  avatar: '../img/photoshop.png', downloads: 25, rating:'4.3', stars:"✮ ✮ ✮ ✮ ✡"}
  ];
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('singleAppCtl', function($scope, $stateParams, $ionicModal) {
var vm = this;
console.log("$stateParams", $stateParams);



})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
