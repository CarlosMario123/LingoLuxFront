import { useState, useEffect } from 'react';

//cobtiene los datos de la peticiones que se hacen en servicio para darselo alguna vista que lo requiera
/* 
el useData tiene 3 estados

data: cuando los datos estan listos 
loading: todavia sigue trayendo los datos de la peticion o esperando
error: cuando ocurre traer datos de la peticion
*/
const useData = (fetchData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await fetchData(); // Llamada a la función para obtener los datos
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [fetchData]);

  return { data, loading, error };
};

export default useData;
