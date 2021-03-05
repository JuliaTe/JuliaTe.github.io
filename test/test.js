var supertest = require("supertest");

var server = supertest.agent("http://localhost:8000");

describe("Integration test initial setup", function() {
  it("Should return home page"), function(done) {
    server
      .get('/')
      .expect(200)
      .end(function(err, res) {
        done();
      })
  }
});