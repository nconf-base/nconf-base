var expect = require("chai").expect;

describe("Chai", function(){

  it("should make you happy", function(){
    expect({key:"bar"}).to.have.property("key").with.length(3);
  });

});