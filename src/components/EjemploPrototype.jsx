import React from 'react';

const EjemploPrototype = () => {
  return (
    <section id="prototype-ejemplo" className="container my-4 p-4 rounded bg-dark text-light">
      <h2 className="text-center mb-4 text-info">Ejemplos de Prototype</h2>
      
      {/* Ejemplo 1: Realizar una solicitud GET con Prototype */}
      <div>
        <h4 className='mb-4 text-info'>Ejemplo 1: Solicitud GET</h4>
        <p>Este ejemplo muestra cómo hacer una solicitud GET a un servidor utilizando Prototype para obtener datos.</p>
        <div className='border p-3 bg-light text-center mb-4'>
          <img src='MecanismosImagenes/GETSolicitudPrototype.png' className="img-fluid" alt="GET Solicitud Prototype" />
        </div>
      </div>
      
      {/* Ejemplo 2: Realizar una solicitud POST con Prototype */}
      <div>
        <h4 className='mb-4 text-info'>Ejemplo 2: Solicitud POST</h4>
        <p>Este ejemplo muestra cómo enviar datos al servidor utilizando Prototype con el método POST.</p>
        <div className='border p-3 bg-light text-center mb-4'>
          <img src='MecanismosImagenes/POSTSolicitudPrototype.png' className="img-fluid" alt="POST Solicitud Prototype" />
        </div>
      </div>
      
      {/* Ejemplo 3: Manejo de errores en solicitudes Prototype */}
      <div>
        <h4 className='mb-4 text-info'>Ejemplo 3: Manejo de Errores</h4>
        <p>Este ejemplo muestra cómo manejar errores en una solicitud AJAX con Prototype.</p>
        <div className='border p-3 bg-light text-center mb-4'>
          <img src='MecanismosImagenes/ManejoErroresPrototype.png' className="img-fluid" alt="Manejo de Errores Prototype" />
        </div>
      </div>
      
    </section>
  );
};

export default EjemploPrototype;
