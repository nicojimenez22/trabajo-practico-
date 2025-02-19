const mongoose = require('mongoose');
const Producto = require('./producto');

const CarritoSchema = new mongoose.Schema({
    productos: [
        {
            productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
            cantidad: { type: Number, required: true, default: 1 }
        }
    ],
    precioTotal: { type: Number, default: 1 },
    
});


const Carrito = mongoose.model("Carrito", CarritoSchema);

module.exports = Carrito



/*nombre: { type: String, required: true }, 
precio: { type: Number, required: true },
*/