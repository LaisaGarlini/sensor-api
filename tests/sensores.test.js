const request = require('supertest');
const app = require('../src/app');

describe('Testes da API de Sensores', () => {
  test('GET /status deve retornar status da API', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status');
  });

  test('GET /leituras_sensores deve retornar um array de sensores', async () => {
    const res = await request(app).get('/leituras_sensores');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('Cada sensor deve ter os campos esperados', async () => {
    const res = await request(app).get('/leituras_sensores');
    const sensor = res.body[0];
    expect(sensor).toHaveProperty('id_sensor');
    expect(sensor).toHaveProperty('tipo');
    expect(sensor).toHaveProperty('localizacao');
    expect(sensor).toHaveProperty('valor');
    expect(sensor).toHaveProperty('timestamp');
    expect(sensor).toHaveProperty('unidade_medida');
  });
});
