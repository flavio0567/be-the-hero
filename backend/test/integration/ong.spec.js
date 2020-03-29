const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })

  afterAll(async () => {
    connection.destroy();
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "Transparent Hands",
        email: "fmrocha@gmail.com",
        whatsapp: "19255499193",
        city: "Arlington",
        uf: "VA"
      });

      console.log(response.body);
  })
})