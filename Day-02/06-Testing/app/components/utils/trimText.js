angular.module('myApp.utils', []);
angular.module('myApp.utils')
	.filter("trimText", function(){
		return function(data){
			data = data || "";
			return data.length < 15 ? data : data.substr(0,15);
		}
	});