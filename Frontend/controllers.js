import axios from 'axios';

// Función para obtener productos
export const getProducts = async () => {
    try {
      const response = await axios.get('/api/product');  // Asegúrate de que esto sea correcto
      return response.data;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      throw new Error('Error al cargar los productos');
    }
  };