//factory function
var spinner = (function(){
	var count = 0;
	function increment(){
		return ++count;
	}
	function decrement(){
		return --count;
	}
	return {
		up : increment,
		down : decrement
	}
})();

//constructor function
function Spinner(){
	var count = 0;
	this.up = function (){
		return ++count;
	}
	this.down = function (){
		return --count;
	}
}
/*

var spinner= new Spinner();
*/

spinner.up(); //=> 1
spinner.up(); //=> 2
spinner.up(); //=> 3
spinner.up(); //=> 4

spinner.down(); //=> 3
spinner.down(); //=> 2
spinner.down(); //=> 1
spinner.down(); //=> 0
spinner.down(); //=> -1