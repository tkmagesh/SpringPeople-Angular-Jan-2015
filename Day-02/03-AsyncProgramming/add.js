function addSync(x,y){
   return x + y;
}

function useAddSync(){
   var n1 = 100,
       n2 = 200;
   console.log("triggering add");
   var result = addSync(100,200);
   console.log("Result = ", result);
}
//---------------------------------------
function addAsync(x,y){
	setTimeout(function(){
		return x + y;
	},4000)
}

function useAddAsync(){
   var n1 = 100,
       n2 = 200;
   console.log("triggering add");
   var result = addAsync(100,200);
   console.log("Result = ", result);
}

//--------------------------------------- Using callbacks
function addAsync(x,y, onResult){
	setTimeout(function(){
		var result =  x + y;	
		if (typeof onResult === "function"){
			onResult(result);
		}
	},4000)
}

function useAddAsync(){
   var n1 = 100,
       n2 = 200;
   console.log("triggering add");
   addAsync(100,200, function(result){
   		console.log("Result = ", result);	
   });
}

//-------------------------------------- Using Events

var addAsync = (function(){
	var events = [];
	return {
		addEvent : function(subscriptionFn){
			events.push(subscriptionFn)
		},
		add : function(x,y){
			setTimeout(function(){
				var result = x + y;
				events.forEach(function(evt){
					evt(result);
				})
			},4000)
		}
	}
})();

function useAddAsync(){
   var n1 = 100,
       n2 = 200;
   console.log("triggering add");

   addAsync.add(100,200);
   addAsync.addEvent(function(result){
   		console.log("Result = ", result);	
   });
}

//-------------------------------------- Using Primise
function addAsync(x,y){
   var promise = new Promise(function(resolve, reject){
	setTimeout(function(){
		var result =  x + y;
		console.log("result calculated");
		resolve(result);
	},4000);
  });
  return promise;
}

var p = addAsync(100,200);
p.then(function(result){
	console.log("Result = ", result);
});