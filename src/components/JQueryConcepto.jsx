import React from 'react';

const JQueryConcepto = () => {
  return (
    <section id="jquery-concepto" className="container my-4 p-4 rounded bg-dark text-light">
      <h2 className="text-center mb-4 text-info">Introducción a jQuery</h2>
      <div className="row">
        {/* Definición */}
        <div className="col-md-4">
          <div className="card h-100 border-info bg-secondary text-light">
            <div className="card-header bg-info text-white">
              <h5>¿Qué es jQuery?</h5>
            </div>
            <div className="card-body">
              <p>
                jQuery es una biblioteca de JavaScript rápida, pequeña y rica en funcionalidades que simplifica la manipulación del DOM, el manejo de eventos, las animaciones y las solicitudes AJAX, facilitando el desarrollo web.
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
                <li>Manipulación sencilla del DOM.</li>
                <li>Gestión simplificada de eventos.</li>
                <li>Creación de animaciones personalizadas.</li>
                <li>Realizar solicitudes AJAX de manera fácil.</li>
                <li>Compatibilidad con navegadores antiguos.</li>
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
                <li>Sintaxis simple y limpia.</li>
                <li>Reduce la cantidad de código necesario.</li>
                <li>Ofrece una amplia gama de plugins para extender su funcionalidad.</li>
                <li>Compatible con la mayoría de los navegadores.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Información adicional */}
      <div className="mt-4">
        <h5 className="text-info">Ejemplos de uso comunes:</h5>
        <ul>
          <li><strong>Manipulación del DOM:</strong> Cambiar el contenido, atributos o estilos de elementos HTML fácilmente.</li>
          <li><strong>Animaciones:</strong> Crear efectos visuales como deslizamiento, ocultar/mostrar elementos, etc.</li>
          <li><strong>Solicitudes AJAX:</strong> Enviar y recibir datos del servidor sin recargar la página.</li>
          <li><strong>Eventos:</strong> Capturar eventos como clics, movimientos del ratón o cambios en campos de entrada.</li>
        </ul>
      </div>
      <p>Saavedra, J. A. (2023, 17 julio). ¿Qué es jQuery y cómo usarlo? Ebac. https://ebac.mx/blog/que-es-jquery</p>
    </section>
  );
};

export default JQueryConcepto;
