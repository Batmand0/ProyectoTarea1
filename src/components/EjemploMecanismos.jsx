import React from 'react';

const EjemploMecanismos = () => {
  return (
    <section id="mecanismos-de-seguridad-ejemplo" className="container my-4 p-4 rounded bg-dark text-light">
      <h2 className="text-center mb-4 text-info">Mecanismos de Seguridad en Formularios</h2>
      <div>
        <h4 className='mb-4 text-info'>Validación del lado del cliente (JavaScript)</h4>
        <p>Esto asegura que los datos ingresados por el usuario cumplan ciertos criterios antes de enviarse al servidor.</p>
            <div className='border p-3 bg-light text-center mb-4'>
                <img src='MecanismosImagenes/VerificacionCliente.png' className="img-fluid" />
            </div>
      </div>
      <div>
        <h4 className='mb-4 text-info'> Validación del lado del servidor</h4>
        <p>Valida y limpia los datos en el servidor para evitar inyecciones SQL y XSS. <br/> <b>PHP Ejemplo:</b></p>
            <div className='border p-3 bg-light text-center mb-4'>
                <img src='MecanismosImagenes/VerificacionServidor.png' className="img-fluid" />
            </div>
      </div>
      <div>
        <h4 className='mb-4 text-info'>Encriptación de datos</h4>
        <p>Utiliza HTTPS para garantizar que los datos se envíen de forma segura.
        Además, puedes usar el cifrado en el servidor para proteger datos sensibles.
        <br />
        <b>Ejemplo con Node.js:</b>
        </p>
            <div className='border p-3 bg-light text-center mb-4'>
                <img src='MecanismosImagenes/Encriptacion.png' className="img-fluid" />
            </div>
      </div>
    </section>

  );
};

export default EjemploMecanismos;
