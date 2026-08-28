const request = require('supertest');
const app = require('../../src/app');

/**
 * PRUEBAS DE INTEGRACIÓN
 * Objetivo: Validar el enrutamiento HTTP y la respuesta global del endpoint.
 */
describe('Pruebas de Integración: POST /api/discount', () => {
  it('Debería retornar status 200 y el nuevo total con descuento aplicado', async () => {
    const response = await request(app)
      .post('/api/discount')
      .send({ total: 100, code: 'PROMO20' });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('newTotal', 80);
  });

  it('Debería retornar status 200 y el total original con un código inválido', async () => {
    const response = await request(app)
      .post('/api/discount')
      .send({ total: 100, code: 'FALSO123' });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('newTotal', 100);
  });

  it('Debería retornar status 400 si el total no es un número', async () => {
    const response = await request(app)
      .post('/api/discount')
      .send({ total: 'cien', code: 'PROMO20' });
    
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});