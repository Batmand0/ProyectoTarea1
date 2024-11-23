import React from 'react';

const AJAXConcepto = () => {
  return (
    <section id="ajax-concepto" className="container my-4 p-4 rounded bg-dark text-light">
      <h2 className="text-center mb-4 text-info">Introducción a AJAX</h2>
      <div className="row">
        {/* Definición */}
        <div className="col-md-4">
          <div className="card h-100 border-info bg-secondary text-light">
            <div className="card-header bg-info text-white">
              <h5>¿Qué es AJAX?</h5>
            </div>
            <div className="card-body">
              <p>
                AJAX (Asynchronous JavaScript and XML) es una técnica de desarrollo web que permite actualizar partes de una página web sin necesidad de recargarla completamente. Utiliza JavaScript para comunicarse con el servidor de manera asíncrona.
              </p>
            </div>
          </div>
        </div>
        {/* Usos */}
        <div className="col-md-4">
          <div className="card h-100 border-success bg-secondary text-light">
            <div className="card-header bg-success text-white">
              <h5>¿Para qué se usa?</h5>
            </div>
            <div className="card-body">
              <ul>
                <li>Actualizar contenido dinámico sin recargar la página.</li>
                <li>Enviar y recibir datos del servidor en tiempo real.</li>
                <li>Crear interfaces de usuario más interactivas y rápidas.</li>
                <li>Reducir la carga en el servidor al solicitar solo los datos necesarios.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Ventajas */}
        <div className="col-md-4">
          <div className="card h-100 border-warning bg-secondary text-light">
            <div className="card-header bg-warning text-white">
              <h5>Ventajas</h5>
            </div>
            <div className="card-body">
              <ul>
                <li>Mejora la experiencia del usuario al hacer las aplicaciones más rápidas.</li>
                <li>Reduce el tráfico entre cliente y servidor.</li>
                <li>Permite una carga selectiva de datos.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Información adicional */}
      <div className="mt-4">
        <h5 className="text-info">Ejemplos de uso comunes:</h5>
        <ul>
          <li><strong>Búsquedas dinámicas:</strong> Actualizar resultados a medida que el usuario escribe en un campo de búsqueda.</li>
          <li><strong>Validación de formularios:</strong> Validar datos en tiempo real con el servidor.</li>
          <li><strong>Carga de contenido:</strong> Mostrar nuevas publicaciones en una red social sin recargar la página.</li>
        </ul>
      </div>
      <p>AJAX - Aprende desarrollo web | MDN. (2024, 6 junio). MDN Web Docs. https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data</p>
    </section>
  );
};

export default AJAXConcepto;
