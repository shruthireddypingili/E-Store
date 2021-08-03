let chai = require('chai')
let chaiHttp = require('chai-http')
let expect = chai.expect;
chai.use(chaiHttp);


describe('Testing admin API: ', () => {

    it('Should return status 200 for `/home`', (done) => {
        chai
            .request('http://localhost:8080')
            .get("/api/v1/homepage/products")
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err;
            })
    });

    it('should return status 200 for GET /api/v1/admin/products', function(done){
        chai
        .request('http://localhost:8080')
        .get('/api/v1/products')
        .then(function(res){
            expect(res).to.have.status(200);
            done();
        })
        .catch(function(err){
            throw(err)
        });
    });

    it('should return status 200 for POST /api/v1/users/register', function(done){
        chai
        .request('http://localhost:8080')
        .post('/api/v1/users/register')
        .then(function(res){
            expect(res).to.have.status(200);
            done();
        })
        .catch(function(err){
            throw(err)
        });
    });


 
});
