process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

const server = require("../server");
let admin = require('../models/admin');


describe('Admin endpoint', () => {
    beforeEach((done) => { //Before each test we empty the database
        admin.deleteMany({}, (err) => {
            done();
        });
    });

    describe('/POST admin jwt token ', () => {
        it('it should not POST without a required field', (done) => {
            let admin = {
                auth: {
                    username: "anonym"
                }
            }
            chai.request(server)
                .post('/api/admin_token')
                .send(admin)
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.body.should.have.property('response').eql('Something failed!');
                    done();
                });
        });

        it('it should POST', (done) => {
            let regAdmin = {
                user: {
                    name: "anonymous",
                    username: "anonym",
                    password: "testpassword"
                }
            }
            chai.request(server)
                .post('/api/admin_register')
                .send(regAdmin)
                .then((res) => {
                    let admin = {
                        auth: regAdmin.user
                    }
                    chai.request(server)
                        .post('/api/admin_token')
                        .send(admin)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('jwt');
                            done();
                        });
                });

        });

        it('it should not POST a admin that doesnt exists', (done) => {
            let admin = {
                auth: {
                    username: "anonym",
                    password: "testpassword"
                }
            }
            chai.request(server)
                .post('/api/admin_token')
                .send(admin)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('res').eql(false);
                    res.body.should.have.property('response').eql('Admin does not exist');
                    done();
                });
        });

    });

    describe('/POST admin_register', () => {

        it('it should successfuly POST register admin', (done) => {
            let admin = {
                user: {
                    name: "anonymous",
                    username: "anonym",
                    password: "testpassword"
                }
            }
            chai.request(server)
                .post('/api/admin_register')
                .send(admin)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Sucessfully Registered');
                    res.body.should.have.property('name');
                    res.body.should.have.property('username');
                    done();
                });
        });

        it('it should not POST register admin which is already registered', (done) => {
            let admin = {
                user: {
                    name: "anonymous",
                    username: "anonym",
                    password: "testpassword"
                }
            }
            chai.request(server)
                .post('/api/admin_register')
                .send(admin)
                .then((res) => {
                    chai.request(server)
                        .post('/api/admin_register')
                        .send(admin)
                        .end((err, res) => {
                            res.should.have.status(422);
                            res.body.should.be.a('object');
                            res.body.should.have.property('error').eql('User already Registered');
                            done();
                        });
                });
        });

        it('it should not POST register admin without a required field', (done) => {
            let admin = {
                user: {
                    name: "anonymous",
                    username: "anonym",
                }
            }
            chai.request(server)
                .post('/api/admin_register')
                .send(admin)
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error').eql('Something failed!');
                    done();
                });
        });

    });
});