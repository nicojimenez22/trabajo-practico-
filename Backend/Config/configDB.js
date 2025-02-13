const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://franconuniez96:r32zeTvtc3FWFKm7@ecommerce2025.nzplc.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce2025',
        );
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('Error al conectar la base de datos:', error.message);
        process.exit(1); // Finaliza el proceso si hay un error en la conexión
    }
};

module.exports = connectDB;