var assert = require("assert");

describe("indexOf()", function(){

  before(function(){
    console.log("Do some stuff before the tests.");
  });

  after(function(){
    console.log("Clean up our stuff after the tests.");
  });

  it("should return -1 when value not present", function(){
    assert.equal(-1, [1,2,3].indexOf(5));
  });

});