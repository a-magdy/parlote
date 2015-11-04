ReportMessageController = [
  '$scope',
  '$mdDialog',
  function($scope, $mdDialog) {

    $scope.report = {
      reason: '',
      typeId: '',
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
      if (!$scope.report || s.isBlank($scope.report.reason)) {
        return;
      }

      $mdDialog.hide($scope.report);
    };
  }
]
