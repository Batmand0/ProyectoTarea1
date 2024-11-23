import React from 'react';

const MecanismosDeSeguridadConcepto = () => {
  return (
    <section id="mecanismos-de-seguridad" className="container my-4 p-4 rounded bg-dark text-light">
      <h2 className="text-center mb-4 text-info">Mecanismos de Seguridad en Formularios</h2>
      <div className="row">
        {/* Definición */}
        <div className="col-md-4">
          <div className="card h-100 border-info bg-secondary text-light">
            <div className="card-header bg-info text-white">
              <h5>¿Qué son?</h5>
            </div>
            <div className="card-body">
              <p>
                Los mecanismos de seguridad en formularios son técnicas y herramientas diseñadas para proteger los datos ingresados por los usuarios y evitar vulnerabilidades como inyección de código, ataques CSRF o accesos no autorizados.
              </p>
            </div>
          </div>
        </div>
        {/* Usos */}
        <div className="col-md-4">
          <div className="card h-100 border-success bg-secondary text-light">
            <div className="card-header bg-success text-white">
              <h5>¿Para qué se usan?</h5>
            </div>
            <div className="card-body">
              <ul>
                <li>Proteger la integridad de los datos enviados al servidor.</li>
                <li>Evitar accesos no autorizados.</li>
                <li>Prevenir ataques como inyección SQL o XSS.</li>
                <li>Asegurar la autenticidad de las solicitudes realizadas por los usuarios.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Cuándo se usan */}
        <div className="col-md-4">
          <div className="card h-100 border-warning bg-secondary text-light">
            <div className="card-header bg-warning text-white">
              <h5>¿Cuándo se usan?</h5>
            </div>
            <div className="card-body">
              <p>
                Estos mecanismos deben implementarse siempre que se utilicen formularios en aplicaciones web, especialmente en situaciones donde:
              </p>
              <ul>
                <li>Los formularios recogen datos sensibles (contraseñas, datos bancarios).</li>
                <li>Se permite el registro o autenticación de usuarios.</li>
                <li>Los formularios interactúan con bases de datos.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Información adicional */}
      <div className="mt-4">
        <h5 className="text-info">Ejemplos de mecanismos comunes:</h5>
        <ul>
          <li><strong>Validación del lado del cliente:</strong> Uso de JavaScript para verificar que los datos ingresados cumplan con los requisitos antes de enviarlos al servidor.</li>
          <li><strong>Validación del lado del servidor:</strong> Verificación de datos en el servidor para garantizar que sean seguros y válidos.</li>
          <li><strong>Uso de tokens CSRF:</strong> Previenen ataques en los que se realizan solicitudes maliciosas en nombre de un usuario autenticado.</li>
          <li><strong>Encriptación de datos:</strong> Los datos sensibles se cifran antes de enviarse al servidor.</li>
        </ul>
      </div>
      <p>Grachiano. (2024, 30 abril). Mejores Prácticas para la Seguridad en Formularios Web. La Divina Proporción. https://ladivinaproporcion.es/mejores-practicas-para-la-seguridad-en-formularios-web/</p>
    </section>

  );
};

export default MecanismosDeSeguridadConcepto;
