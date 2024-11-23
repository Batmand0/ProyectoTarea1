import React from 'react';

const PrototypeConcepto = () => {
  return (
    <section id="prototype-concepto" className="container my-4 p-4 rounded bg-dark text-light">
      <h2 className="text-center mb-4 text-info">Introducción a Prototype</h2>
      <div className="row">
        {/* Definición */}
        <div className="col-md-4">
          <div className="card h-100 border-info bg-secondary text-light">
            <div className="card-header bg-info text-white">
              <h5>¿Qué es Prototype?</h5>
            </div>
            <div className="card-body">
              <p>
                Prototype es un framework de JavaScript diseñado para simplificar el desarrollo web. Proporciona herramientas para trabajar con el DOM, realizar solicitudes AJAX y extender las capacidades nativas de JavaScript mediante la adición de nuevas funcionalidades.
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
                <li>Manipulación y extensión del DOM.</li>
                <li>Gestión simplificada de eventos.</li>
                <li>Soporte para AJAX y comunicación con el servidor.</li>
                <li>Extensión de clases y objetos en JavaScript.</li>
                <li>Uso de utilidades para manejar cadenas, arrays y fechas.</li>
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
                <li>Simplifica tareas comunes de desarrollo web.</li>
                <li>Ofrece soporte nativo para solicitudes AJAX y JSON.</li>
                <li>Extiende las funcionalidades nativas de JavaScript.</li>
                <li>Compatible con múltiples navegadores.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Información adicional */}
      <div className="mt-4">
        <h5 className="text-info">Ejemplos de uso comunes:</h5>
        <ul>
          <li><strong>Manipulación del DOM:</strong> Seleccionar y modificar elementos de manera sencilla.</li>
          <li><strong>AJAX:</strong> Realizar solicitudes al servidor y manejar respuestas JSON/XML.</li>
          <li><strong>Eventos:</strong> Añadir y manejar eventos del usuario de forma limpia.</li>
          <li><strong>Extensiones de JavaScript:</strong> Añadir métodos personalizados a arrays, cadenas y otros objetos.</li>
        </ul>
      </div>
      <p>Disennio. (2018, 15 junio). Patrón de diseño Prototype - disennio - Medium. Medium. https://medium.com/@diseniio2016/patr%C3%B3n-de-dise%C3%B1o-prototype-8447ee519165</p>
    </section>
  );
};

export default PrototypeConcepto;
