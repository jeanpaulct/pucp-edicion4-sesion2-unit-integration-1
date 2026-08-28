/**
 * Lógica de negocio para aplicar descuentos en compras.
 * 
 * @param {number} total - El monto total original de la compra.
 * @param {string} code - El código promocional a evaluar.
 * @returns {number} - El total final calculado.
 */
function applyDiscount(total, code) {
  if (code === "PROMO20") {
    return total * 0.8;
  }
  return total;
}

module.exports = { applyDiscount };