var should = require("chai").should();

describe("indexOf()", function(){

  it("should return -1 when value not present", function(){
    ([1, 2, 3].indexOf(5)).should.equal(-1);
    ([1, 2, 3].indexOf(0)).should.equal(-1);
  });

});
