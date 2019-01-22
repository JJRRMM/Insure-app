const chai = require('chai');
const chaiHttp = require('chai-http');
const express = require('express');

chai.use(chaiHttp);

const app = express();
chai.should();

describe("GET /", () => {
    it("should get all students",(done) => {
chai.request(app)
    .get('/')
    .end(function(error, result){
        result.should.have.status(404);  
        result.body.should.be.a('object');
        done();
    }); 
});
});

describe("GET /api/profile", () => {
    it("should get all profiles",(done) => {
chai.request(app)
     .get("/api/profile")
     .end(function(error, result){
          result.should.have.status(404);
          result.body.should.be.a('object');
          done();
        });
    });
});
