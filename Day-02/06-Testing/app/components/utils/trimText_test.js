describe("Utils module", function(){
	beforeEach(module("myApp.utils"));

	describe("trimText filter", function(){
		it("should return the text if length < 15", inject(function(trimTextFilter){
			//Arrange
			var data = "short text";
			var expectedResult = data;
			//Act
			var result = trimTextFilter(data);

			//Assert
			expect(result).toBe(expectedResult);
		}));
	});
});