import React from 'react';

const EjemploAJAX = () => {
  return (
    <section id="ajax-ejemplo" className="container my-4 p-4 rounded bg-dark text-light">
      <h2 className="text-center mb-4 text-info">Ejemplos de AJAX</h2>
      
      {/* Ejemplo 1: Realizar una solicitud GET con AJAX */}
      <div>
        <h4 className='mb-4 text-info'>Ejemplo 1: Solicitud GET</h4>
        <p>Este ejemplo muestra cómo hacer una solicitud GET a un servidor utilizando AJAX para obtener datos.</p>
        <div className='border p-3 bg-light text-center mb-4'>
          <img src='MecanismosImagenes/GETSolicitud.png' className="img-fluid" alt="GET Solicitud AJAX" />
        </div>
      </div>
      
      {/* Ejemplo 2: Realizar una solicitud POST con AJAX */}
      <div>
        <h4 className='mb-4 text-info'>Ejemplo 2: Solicitud POST</h4>
        <p>Este ejemplo muestra cómo enviar datos al servidor utilizando AJAX con el método POST.</p>
        <div className='border p-3 bg-light text-center mb-4'>
          <img src='MecanismosImagenes/POSTSolicitud.png' className="img-fluid" alt="POST Solicitud AJAX" />
        </div>
      </div>
      
      {/* Ejemplo 3: Manejo de errores en AJAX */}
      <div>
        <h4 className='mb-4 text-info'>Ejemplo 3: Manejo de Errores</h4>
        <p>Este ejemplo muestra cómo manejar errores en una solicitud AJAX.</p>
        <div className='border p-3 bg-light text-center mb-4'>
          <img src='MecanismosImagenes/ManejoErrores.png' className="img-fluid" alt="Manejo de Errores AJAX" />
        </div>
      </div>
      
    </section>
  );
};

export default EjemploAJAX;
