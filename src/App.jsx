import React, { useState } from 'react';
import AcercaDeMi from './components/AcercaDeMi';
import AcercaDeLaMateria from './components/AcercaDeLaMateria';
import MecanismosDeSeguridadConcepto from './components/MecanismosDeSeguridadConcepto';
import AJAXConcepto from './components/AjaxConcepto';
import JQueryConcepto from './components/JQueryConcepto';
import MooToolsConcepto from './components/MootoolsConcepto';
import PrototypeConcepto from './components/PrototypeConcepto';
import EjemploMecanismos from './components/EjemploMecanismos';
import EjemploAJAX from './components/EjemploAjax';
import EjemploJQuery from './components/EjemplosJQuery';
import EjemploMooTools from './components/EjemploMootools';
import EjemploPrototype from './components/EjemploPrototype';


const App = () => {
  const [mostrarSeccion, setMostrarSeccion] = useState(''); // Estado para controlar qué sección mostrar
  const [subMenuActivo, setSubMenuActivo] = useState(''); // Estado para controlar el submenú activo

  const handleMostrarSeccion = (seccion) => {
    setMostrarSeccion(seccion); // Cambia la sección actual
    setSubMenuActivo(''); // Reinicia el submenú activo
  };

  const handleToggleSubMenu = (submenu) => {
    setSubMenuActivo((prev) => (prev === submenu ? '' : submenu)); // Alterna el submenú activo
  };

  return (
    <div>
      <header className="bg-primary text-white p-3">
        <h1 className="text-center">Mi Proyecto</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Menú</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-decoration-none"
                  onClick={() => handleMostrarSeccion('acercaDeMi')}
                >
                  Acerca de Mí
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-decoration-none"
                  onClick={() => handleMostrarSeccion('acercaDeLaMateria')}
                >
                  Acerca de la Materia
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-decoration-none"
                  onClick={() => handleToggleSubMenu('conceptosBasicos')}
                >
                  Conceptos Básicos
                </button>
              </li>
              {subMenuActivo === 'conceptosBasicos' && (
                <ul className="list-unstyled my-4 text-white">
                  <li>
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={() => handleMostrarSeccion('MecanismosDeSeguridadConcepto')}
                    >
                      Mecanismos de la seguridad en los formularios
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={() => handleMostrarSeccion('AJAXConcepto')}
                    >
                      Introducción a AJAX
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={() => handleMostrarSeccion('JQueryConcepto')}
                    >
                      Introducción a JQuery
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={() => handleMostrarSeccion('MooToolsConcepto')}
                    >
                      Introducción a MooTools
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={() => handleMostrarSeccion('PrototypeConcepto')}
                    >
                      Introducción a Prototype
                    </button>
                  </li>
                </ul>
              )}
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-decoration-none"
                  onClick={() => handleToggleSubMenu('ejemplosBasicos')}
                >
                  Ejemplos Básicos
                </button>
              </li>
              {subMenuActivo === 'ejemplosBasicos' && (
                <ul className="list-unstyled my-4 text-white">
                  <li>
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={() => handleMostrarSeccion('EjemploMecanismos')}
                    >
                      Ejemplos de Mecanismos de seguridad en formularios
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={() => handleMostrarSeccion('EjemploAJAX')}
                    >
                      Ejemplos de AJAX
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={() => handleMostrarSeccion('EjemploJQuery')}
                    >
                      Ejemplos de JQuery
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={() => handleMostrarSeccion('EjemploMootools')}
                    >
                      Ejemplos de Mootools
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={() => handleMostrarSeccion('EjemploPrototype')}
                    >
                      Ejemplos de Prototype
                    </button>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <main className="container my-5">
        {/* Renderiza el componente según la sección seleccionada */}
        {mostrarSeccion === 'acercaDeMi' && <AcercaDeMi />}
        {mostrarSeccion === 'acercaDeLaMateria' && <AcercaDeLaMateria />}
        {mostrarSeccion === 'MecanismosDeSeguridadConcepto' && <MecanismosDeSeguridadConcepto />}
        {mostrarSeccion === 'AJAXConcepto' && <AJAXConcepto />}
        {mostrarSeccion === 'JQueryConcepto' && <JQueryConcepto />}
        {mostrarSeccion === 'MooToolsConcepto' && <MooToolsConcepto />}
        {mostrarSeccion === 'PrototypeConcepto' && <PrototypeConcepto />}
        {mostrarSeccion === 'EjemploMecanismos' && <EjemploMecanismos />}
        {mostrarSeccion === 'EjemploAJAX' && <EjemploAJAX />}
        {mostrarSeccion === 'EjemploJQuery' && <EjemploJQuery />}
        {mostrarSeccion === 'EjemploMootools' && <EjemploMooTools />}
        {mostrarSeccion === 'EjemploPrototype' && <EjemploPrototype />}
        
      </main>
    </div>
  );
};

export default App;
