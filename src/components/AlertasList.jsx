import React, { useEffect, useState } from 'react';
import { getAlertas } from '../services/api';

function AlertasList() {
  const [alertas, setAlertas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getAlertas()
      .then(res => {
        setAlertas(res.data);
        setError(null);
      })
      .catch(err => {
        console.error('Error cargando alertas:', err);
        setError('Hubo un problema al cargar las alertas.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Cargando alertas...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>Listado de Alertas</h2>
      {alertas.length === 0 ? (
        <p>No hay alertas disponibles.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {alertas.map(a => (
            <li
              key={a.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                marginBottom: '10px',
              }}
            >
              <strong>{a.titulo}</strong>: {a.descripcion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AlertasList;