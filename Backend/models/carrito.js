const mongoose = require('mongoose');
const Producto = require('./product');

const CarritoSchema = new mongoose.Schema({
    productos: [
        {
            productoId: { type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true },
            nombre: { type: String, required: true }, 
            precio: { type: Number, required: true },
            cantidad: { type: Number, required: true, default: 1 }
        }
    ]
    
});

module.exports = mongoose.model("Carrito", CarritoSchema);