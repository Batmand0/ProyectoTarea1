import React from 'react';

const EjemploMooTools = () => {
  return (
    <section id="mootools-ejemplo" className="container my-4 p-4 rounded bg-dark text-light">
      <h2 className="text-center mb-4 text-info">Ejemplos de MooTools</h2>
      
      {/* Ejemplo 1: Realizar una solicitud GET con MooTools */}
      <div>
        <h4 className='mb-4 text-info'>Ejemplo 1: Solicitud GET</h4>
        <p>Este ejemplo muestra cómo hacer una solicitud GET a un servidor utilizando MooTools para obtener datos.</p>
        <div className='border p-3 bg-light text-center mb-4'>
          <img src='MecanismosImagenes/GETSolicitudMootools.png' className="img-fluid" alt="GET Solicitud MooTools" />
        </div>
      </div>
      
      {/* Ejemplo 2: Realizar una solicitud POST con MooTools */}
      <div>
        <h4 className='mb-4 text-info'>Ejemplo 2: Solicitud POST</h4>
        <p>Este ejemplo muestra cómo enviar datos al servidor utilizando MooTools con el método POST.</p>
        <div className='border p-3 bg-light text-center mb-4'>
          <img src='MecanismosImagenes/POSTSolicitudMootools.png' className="img-fluid" alt="POST Solicitud MooTools" />
        </div>
      </div>
      
      {/* Ejemplo 3: Manejo de errores en solicitudes MooTools */}
      <div>
        <h4 className='mb-4 text-info'>Ejemplo 3: Manejo de Errores</h4>
        <p>Este ejemplo muestra cómo manejar errores en una solicitud AJAX con MooTools.</p>
        <div className='border p-3 bg-light text-center mb-4'>
          <img src='MecanismosImagenes/ManejoErroresMootools.png' className="img-fluid" alt="Manejo de Errores MooTools" />
        </div>
      </div>
      
    </section>
  );
};

export default EjemploMooTools;
