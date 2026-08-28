const express = require('express');
const { applyDiscount } = require('./services/discountLogic');

const app = express();

app.use(express.json());

/**
 * Endpoint: POST /api/discount
 * Propósito: Recibe un total y un código de descuento, y retorna el nuevo total.
 */
app.post('/api/discount', (req, res) => {
  const { total, code } = req.body;

  // Validación de contrato de entrada
  if (typeof total !== 'number') {
    return res.status(400).json({ error: 'El campo total debe ser numérico' });
  }

  const newTotal = applyDiscount(total, code);
  
  return res.status(200).json({ newTotal });
});

module.exports = app;