const app = require('../app.js')
const { expect }= require('chai').expect
const supertest = require('supertest')

describe('make sure app calls produce correct responses', () => {
	it('response returns an array of objects', () =>{
		supertest(app)
			.get('/playstore')
			.expect('Content-Type', /json/)
			.then(res => {
				expect(res.body).to.be.an('array')})
	})
	it('sort endpoint should throw an error when wrong value used', ()=>{
		supertest(app)
			.get('/playstore')
			.query({sort: 'WRONG'})
			.expect('sort must be by either App or Rating')
			})
	it('should sort array by app when sort endpoint is "App"', () =>{
		supertest(app)
			.get('playstore')
			.query({sort: "App"})
			.then(res =>{
				expect(res.body).to.be.an('array')
				expect(res.body[0].App).to.equal("Angry Birds Rio")
			})
	})
	})