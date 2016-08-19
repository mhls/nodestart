import angular from 'angular';
import './css/main.css';


const app = angular.module("mapla", []);

app.controller("testController", function($scope){
    $scope.test = "  sdasdsaddddddddxxxxxxxxxxxxxxx sdasda";
});

console.log('test');