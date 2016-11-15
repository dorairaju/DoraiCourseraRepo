angular.module("myApp",[])
.controller("myController", ['$scope', function ($scope) {

  //$scope.items = "Sudheer, Dorai";


  $scope.checkIfTooMuch = function() {
    var str = $scope.items || '';

    if( str.length == 0){
      $scope.message = "Please enter data first.";
      $scope.color = 'red';
    }
    else {
      var items = str.toString().split(',');
      console.log(items);
      var itemsFinal = [];

      for( var i=0;i<items.length;i++){
        if( items[i].trim() != '') itemsFinal.push(items[i]);
      }

      if( itemsFinal.length == 0){
        $scope.message = "Please enter data first.";
        $scope.color = 'red';
      } else if( itemsFinal.length <= 3){
        $scope.message = "Enjoy!";
        $scope.color = 'green';
      } else {
        $scope.message = "Too much!";
        $scope.color = 'green';
      }


    }

  };

}]);
