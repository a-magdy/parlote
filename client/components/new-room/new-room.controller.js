NewRoomController = [
  '$scope',
  '$mdDialog',
  function($scope, $mdDialog) {

    $scope.room = {
      name: '',
      category: '',
      description: ''
    };

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.save = function() {
      if (!$scope.room || s.isBlank($scope.room.name)) {
        return;
      }

      $mdDialog.hide($scope.room);
    };
  }
]
