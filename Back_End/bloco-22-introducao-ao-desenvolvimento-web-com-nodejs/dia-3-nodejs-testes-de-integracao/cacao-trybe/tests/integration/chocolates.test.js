const chai = require('chai');
const chaiHttp = require('chai-http');
// const sinon = require('sinon');
// const fs = require('fs').promises;
const app = require('../../src/app');
// const cacaoTrybe = require('./../src/cacaoTrybe');

chai.use(chaiHttp);
const { expect } = chai;

// const mockFile = require('./data/mockFile');

describe('Usando o método GET em /chocolates/total', () => {
  it('Retorna a quantidade total de chocolates', async () => {
    const response = await chai.request(app).get('/chocolates/total');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ totalChocolates: 4 });
  });
});