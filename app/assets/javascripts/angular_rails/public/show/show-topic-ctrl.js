( function() {
 'use strict';

 angular.module("public.ctrl.topicPageCtrl", [])
 .controller('topicPageController', [ '$scope', '$routeParams', '$filter', 'Topic', 
     function($scope, $routeParams, $filter, Topic) {
     $scope.topic = {};
     Topic.get({ id: $routeParams.topic_id }).$promise.then(function(data) {
       $scope.topic = data;
     });
     
    }
 ]);
})();