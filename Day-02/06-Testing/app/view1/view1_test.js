'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var scope = {}
      var view1Ctrl = $controller('View1Ctrl', {$scope : scope});
      expect(view1Ctrl).toBeDefined();
    }));

    it('should have the count of Scope initalized to 0', inject(function($controller) {
      //spec body
      var scope = {};
      var mockLogService = {
      	log : function(){}
      };
      var view1Ctrl = $controller('View1Ctrl', {$scope : scope, logService : mockLogService});
      expect(scope.count).toBe(0);
    }));

    it('should increment the count when incremented', inject(function($controller) {
      //spec body
      var scope = {};
      var mockLogService = {
      	log : function(){}
      };
      var view1Ctrl = $controller('View1Ctrl', {$scope : scope, logService : mockLogService});
      
      scope.increment();
      expect(scope.count).toBe(1);
    }));

     it('should log the count during increment', inject(function($controller) {
      //spec body
      var scope = {};
      var mockLogService = {
      	log : function(){}
      };
      spyOn(mockLogService,"log");
      var view1Ctrl = $controller('View1Ctrl', {$scope : scope, logService : mockLogService});
      
      scope.increment();
      expect(mockLogService.log).toHaveBeenCalledWith(1);
    }));
  });
});