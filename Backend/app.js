const { config } = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;

// Importar coneccion a la DB
const conectarDB = require('./Config/configDB');

conectarDB();

const productRoutes = require('./Routes/productRoutes');



app.use(express.json());
app.use('/api/product', productRoutes);
app.use(cors());

app.get('/', (req, res) => {
    res.send('¡Hola desde el backend!');
  });
/*
mongoose
.connect(
    'mongodb+srv://franconuniez96:r32zeTvtc3FWFKm7@ecommerce2025.nzplc.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce2025'
)
    .then(() => {
    console.log('Conectado a la base de datos');
    })
    .catch((err) => {
        "error al conectar la base de datos: ", err
    });
*/


app.listen(process.env.PORT || PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
});


require('dotenv').config()
