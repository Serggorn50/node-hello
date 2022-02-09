var expect  = require("chai").expect;
var request = require("request");
var assert = require('assert');

describe('HelloWorld Module', function() {

    var url = "http://localhost:8093/";

    it("returns proper response", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.equal('Hello from Node!\n');
        done();
      });
    });
   
});
     