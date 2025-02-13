const mongoose = require('mongoose');

// esquema producto
const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: true },
    stock: { type: Number, default: 0 },
    baje: { type: Boolean, default: false },
});

//crear el modelo del producto
const Product = mongoose.model('Product', productSchema);
module.exports = Product;