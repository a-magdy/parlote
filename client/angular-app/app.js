angular.module('parlote', ['angular-meteor', 'ui.router']);

angular.module('parlote')
.directive('chatRooms', function(){
  return {
   templateUrl: 'client/rooms/rooms.ng.html'
   //templateUrl: '<div>Hello World</div>'
 };
});
