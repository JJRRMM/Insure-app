// Import the dependencies for testing
// import chai from 'chai';
const chai = require('chai');
// import chaiHttp from 'chai-http';
const chaiHttp = require('chai-http');
const app = require ('./routes/api/Profile.js');
// const app = require('./server');
// Configure chai
chai.use(chaiHttp);
chai.should();

    describe("Students", () => {
        describe("GET /", () => {
            // Test to get all students record
            it("should get all students record", (done) => {
                 chai.request(app)
                     .get('/')
                     .end((err, res) => {
                         res.should.have.status(200);
                         res.body.should.be.a('object');
                         done();
                      });
             });
            // Test to get single student record
            it("should get a single student record", (done) => {
                 const id = 1;
                 chai.request(app)
                     .get(`/${id}`)
                     .end((err, res) => {
                         res.should.have.status(200);
                         res.body.should.be.a('object');
                         done();
                      });
             });
    
            // Test to get single student record
            it("should not get a single student record", (done) => {
                 const id = 5;
                 chai.request(app)
                     .get(`/${id}`)
                     .end((err, res) => {
                         res.should.have.status(404);
                         done();
                      });
             });
            // Test the findall in profile controller. 
            it("should get all profiles", (done) => {
                const id = 5;
                chai.request(app)
                    .get(`/api/profile`)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.json;
                        res.body.should.be.a('array');
                        done();
                     });
            });
        });
    });