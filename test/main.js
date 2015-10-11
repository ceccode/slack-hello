var should = require('chai').should(),
  expect = require('chai').expect,
  supertest = require('supertest');

var api = supertest('http://localhost:1337');

describe('/hello', function() {

  it('should return a 200 response', function(done) {
    api.post('/hello')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        done();
      });
  });

});
