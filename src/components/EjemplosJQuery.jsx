import React from 'react';

const EjemploJQuery = () => {
  return (
    <section id="jquery-ejemplo" className="container my-4 p-4 rounded bg-dark text-light">
      <h2 className="text-center mb-4 text-info">Ejemplos de jQuery</h2>
      
      {/* Ejemplo 1: Realizar una solicitud GET con jQuery */}
      <div>
        <h4 className='mb-4 text-info'>Ejemplo 1: Solicitud GET</h4>
        <p>Este ejemplo muestra cómo hacer una solicitud GET a un servidor utilizando jQuery para obtener datos.</p>
        <div className='border p-3 bg-light text-center mb-4'>
          <img src='MecanismosImagenes/GETSolicitudJQuery.png' className="img-fluid" alt="GET Solicitud jQuery" />
        </div>
      </div>
      
      {/* Ejemplo 2: Realizar una solicitud POST con jQuery */}
      <div>
        <h4 className='mb-4 text-info'>Ejemplo 2: Solicitud POST</h4>
        <p>Este ejemplo muestra cómo enviar datos al servidor utilizando jQuery con el método POST.</p>
        <div className='border p-3 bg-light text-center mb-4'>
          <img src='MecanismosImagenes/POSTSolicitudJQuery.png' className="img-fluid" alt="POST Solicitud jQuery" />
        </div>
      </div>
      
      {/* Ejemplo 3: Manejo de errores en solicitudes jQuery */}
      <div>
        <h4 className='mb-4 text-info'>Ejemplo 3: Manejo de Errores</h4>
        <p>Este ejemplo muestra cómo manejar errores en una solicitud AJAX con jQuery.</p>
        <div className='border p-3 bg-light text-center mb-4'>
          <img src='MecanismosImagenes/ManejoJQueryErrores.png' className="img-fluid" alt="Manejo de Errores jQuery" />
        </div>
      </div>
      
    </section>
  );
};

export default EjemploJQuery;
