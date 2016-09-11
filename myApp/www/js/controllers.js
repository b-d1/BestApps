angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  // $scope.loginData = {};

  // // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
})

.controller('singleAppCtl', function($scope, $stateParams, $ionicModal, bestAppsApi) {
var vm = this;
var id = $stateParams.id;
$scope.app = bestAppsApi.getApp(id);

$scope.addColor = function(rating) {

if(rating >= 6) {
return "rt-good";
}
else if(rating >= 3 && rating < 6) {
return "";
}
else {
return "rt-bad";
}

}

$ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})


.controller('myCtrl', function($scope, bestAppsApi) {
  $scope.apps = bestAppsApi.getApps();

  $scope.checkSubCategory = function(subCatSelect, subCategory) {
console.log(subCatSelect + " " + subCategory);
    if(subCatSelect === subCategory || subCatSelect === "All") {
      return true;
    }
    else {
      return false;
    }
  }


})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});
