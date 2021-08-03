let chai = require('chai')
let chaiHttp = require('chai-http')
let expect = chai.expect;
chai.use(chaiHttp);


describe('Testing admin API: ', () => {

    it('Should return status 200 for `/products`', (done) => {
        chai
            .request('http://localhost:8080')
            .get("/api/v1/homepage/banner")
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    });

    it('should return status 200 for PATCH /api/v1/admin/products', function(done){
        chai
        .request('http://localhost:8080')
        .get('/api/v1/homepage/categories')
        .then(function(res){
            expect(res).to.have.status(200);
            done();
        })
        .catch(function(err){
            throw(err)
        });
    });

 
});
