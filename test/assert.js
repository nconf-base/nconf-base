var assert = require("assert");

describe("indexOf()", function(){

  it("should return -1 when value not present", function(){
    assert.equal(-1, [1,2,3].indexOf(5)); 
  });

});