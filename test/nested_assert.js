var assert = require("assert");

describe("Native JavaScript:", function(){

  describe("indexOf()", function(){
    var arr = [1, 2, 3] 
      , str = "foobar"
      ;
      
    it("should return -1 when value not present", function(){
      assert.equal(-1, arr.indexOf(5)); 
      assert.equal(-1, str.indexOf("s")); 
    });

    it("should return position when value present", function(){
      assert.equal(2, arr.indexOf(3)); 
      assert.equal(3, str.indexOf("b")); 
    });
  });

});