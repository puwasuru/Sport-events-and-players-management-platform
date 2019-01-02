process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

const server = require("../server");
let news = require('../models/news');


describe('News endpoint', () => {
    beforeEach((done) => { //Before each test we empty the database
        news.deleteMany({}, (err) => { 
           done();         
        });     
    });

    describe('/GET news', () => {
        it('it should GET empty response', (done) => {
          chai.request(server)
              .get('/api/news')
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
              });
        });
    });

    describe('/POST news', () => {

        it('it should not POST a news without a required field', (done) => {
            let news = {
                name: "Inter-university Rugby"
            }
          chai.request(server)
              .post('/api/news')
              .send(news)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('description');
                    res.body.errors.description.should.have.property('kind').eql('required');
                done();
              });
        });

        it('it should POST a news', (done) => {
            let news = {
                name: "Inter-university Rugby" ,
                description: "University of Peradeniya vs University of Moratuwa"
            }
          chai.request(server)
              .post('/api/news')
              .send(news)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('News successfully added!');
                    res.body.news.should.have.property('name');
                    res.body.news.should.have.property('description');
                    res.body.news.should.have.property('imageURL');
                done();
              });
        });

    });
});