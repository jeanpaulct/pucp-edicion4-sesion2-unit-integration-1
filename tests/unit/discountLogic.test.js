const { applyDiscount } = require('../../src/services/discountLogic');

/**
 * PRUEBAS UNITARIAS
 * Objetivo: Validar el comportamiento de la función pura de forma aislada.
 */
describe('Pruebas Unitarias: discountLogic', () => {
  it('Debería descontar un 20% al total si el código es PROMO20', () => {
    const result = applyDiscount(100, 'PROMO20');
    expect(result).toBe(80);
  });

  it('Debería retornar el total original si el código es diferente a PROMO20', () => {
    const result = applyDiscount(100, 'OTROCODIGO');
    expect(result).toBe(100);
  });

  it('Debería retornar el total original si no se envía código', () => {
    const result = applyDiscount(100, undefined);
    expect(result).toBe(100);
  });
});