angular.module('starter.controllers', [])

  .controller('singleAppCtl', function ($scope, $stateParams, $ionicModal, bestAppsApi) {
    var vm = this;
    var id = $stateParams.id;
    $scope.app = bestAppsApi.getApp(id);
    $scope.addColor = function (rating) {
      if (rating >= 6) {
        return "rt-good";
      }
      else if (rating >= 3 && rating < 6) {
        return "";
      }
      else {
        return "rt-bad";
      }
    }

    $scope.openPage = function (page) {
      try {
        window.open(page, '_system');
      } catch (err) {
        alert(err);
      }
    }


    $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function () {
      $scope.modal.show();
    };
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });
    $scope.overallRating = function (usabityRating, uxRating) {
      var num = (usabityRating + uxRating) / 2;
      return num.toFixed(1);
    }
  })

.controller('myCtrl', function($scope, bestAppsApi, $location, $ionicScrollDelegate) {
  $scope.scrollTo = function(target){
    $location.hash(target);   
    var handle = $ionicScrollDelegate.$getByHandle('homeHandle');
    handle.anchorScroll(true);  
  };

$scope.showSearch2 = function() {
  $scope.location = $location.path();
  if($scope.location == '/app/top-downloaded' || $scope.location == '/app/top-rated' || $scope.location == '/app/all-apps' || $scope.location == '/app/all-games') {
      return true;
  }
  else {
      return false;
  }
}

  $scope.apps = bestAppsApi.getApps();
  $scope.mySelect = 5;
  if($scope.showH == null || $scope.showH == undefined) {
$scope.showH = true;
  }
  $scope.obj = {query : ''};
  $scope.showHeader = function() {
    console.log($scope.showH);
    $scope.showH = !$scope.showH;
    console.log($scope.obj.query);
  }

  $scope.checkSubCategory = function(subCatSelect, subCategory) {
    if(subCatSelect === subCategory || subCatSelect === "All") {
      return true;
    }
    else {
      return false;
    }
  }
})

