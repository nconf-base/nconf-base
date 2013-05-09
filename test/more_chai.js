var expect = require("chai").expect;

describe("Chai", function(){

  it("should have amazeball tests", function(){
    expect(true).to.be.true;
    expect(true).to.not.be.false;
    expect(null).to.be.null;
    expect().to.be.undefined;
    expect().to.not.exist;
    expect([]).to.be.empty;
    expect("foo").to.be.a("string");
    expect([1, 2, 3]).to.be.an("array");
    expect({foo: "bar"}).to.be.an("object");
    expect(5).to.be.at.least(4);
    expect(5).to.be.above(4);
    expect(5).to.be.at.most(6);
    expect(5).to.be.below(6);
    expect(7).to.be.within(5, 10);
  });

});