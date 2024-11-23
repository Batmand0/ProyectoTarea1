import React from 'react';

const MooToolsConcepto = () => {
  return (
    <section id="mootools-concepto" className="container my-4 p-4 rounded bg-dark text-light">
      <h2 className="text-center mb-4 text-info">Introducción a MooTools</h2>
      <div className="row">
        {/* Definición */}
        <div className="col-md-4">
          <div className="card h-100 border-info bg-secondary text-light">
            <div className="card-header bg-info text-white">
              <h5>¿Qué es MooTools?</h5>
            </div>
            <div className="card-body">
              <p>
                MooTools (My Object-Oriented Tools) es un framework ligero y modular de JavaScript que facilita la escritura de código limpio, eficiente y compatible con múltiples navegadores. Es ideal para la creación de interfaces dinámicas y efectos visuales.
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
                <li>Creación de efectos y transiciones avanzadas.</li>
                <li>Gestión de eventos.</li>
                <li>Soporte para clases y herencia en JavaScript.</li>
                <li>Manipulación de solicitudes AJAX.</li>
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
                <li>Ofrece una estructura modular para cargar solo lo necesario.</li>
                <li>Permite escribir código más organizado y reutilizable.</li>
                <li>Compatible con múltiples navegadores, incluso versiones antiguas.</li>
                <li>Fácil integración con otros frameworks o librerías.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Información adicional */}
      <div className="mt-4">
        <h5 className="text-info">Ejemplos de uso comunes:</h5>
        <ul>
          <li><strong>Animaciones avanzadas:</strong> Crear transiciones fluidas para elementos del DOM.</li>
          <li><strong>Manipulación del DOM:</strong> Modificar elementos HTML y sus atributos fácilmente.</li>
          <li><strong>Gestión de eventos:</strong> Capturar y controlar interacciones del usuario.</li>
          <li><strong>AJAX:</strong> Enviar y recibir datos sin recargar la página.</li>
        </ul>
      </div>
      <p>Mootools. (s. f.). Desarrollo Web. https://desarrolloweb.com/home/mootools</p>
    </section>
  );
};

export default MooToolsConcepto;
