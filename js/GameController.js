(function(){

angular
.module('tttApp')
.controller('tttController', tttController);

function tttController(){
  return;

}

})();

// PresidentsController.$inject = ['$scope','$firebaseObject', '$firebaseArray'];

// function tttController($scope, $firebaseObject, $firebaseArray){
//   var self = this;
//   self.presidentsList = getPresidents();
//   self.addPresident = addPresident;
//   self.country = getCountry();
  
//   var ref = new Firebase("https://brilliant-heat-3546.firebaseio.com/binding");
//   var bindingObject = $firebaseObject(ref);
//   bindingObject.$bindTo($scope, 'binding');

//   function getPresidents(){
//   	var ref = new Firebase("https://brilliant-heat-3546.firebaseio.com/country/presidents");
//   	var presidents = $firebaseArray(ref);
//   	return presidents;
//   }
//   function addPresident(presidentName){
//   	self.presidentsList.$add({
//   		name: presidentName
//   	});
//   	self.newPresident = null;
//   }
//   function getCountry(){
// var ref = new Firebase("https://brilliant-heat-3546.firebaseio.com/country");
// var country = $firebaseObject(ref);
// return country;
//   }
//   self.country.name= "The United States of America";
//   self.country.foundingYear = 1776;
//   self.country.population = 317000000;
  	
// self.country.presidents = self.presidentsList;
//   	self.country.$save();
  	
// }