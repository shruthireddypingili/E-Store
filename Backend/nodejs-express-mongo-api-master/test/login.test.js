let chai = require('chai')
let chaiHttp = require('chai-http')
let expect = chai.expect;
chai.use(chaiHttp);


describe('Testing admin API: ', () => {

    it('Should return status 200 for `/checkout`', (done) => {
        chai
            .request('http://localhost:8080')
            .post("/api/v1/users/login")
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    });

   

 
});
