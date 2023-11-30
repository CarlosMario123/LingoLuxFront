export const obtenerLibrosVocabulario = async () => {
    try {
      const response = await fetch('http://localhost:3000/API/libroVocabulario');
  
      if (!response.ok) {
        throw new Error('Error al obtener los libros de vocabulario');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };