process.env['stage'] = 'local';

var expect = require("chai").expect,
    nconf  = require('../lib/nconf-base.js');

describe("Defaults", function(){

    before(function(){ });
    after(function(){ });

    it("Expected local stage state values", function(){
        expect(nconf.get('host')).to.equal('localhost');
        expect(nconf.get('name')).to.equal('nconf-base');
    });
});
