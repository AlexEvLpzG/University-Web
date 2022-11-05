import React from 'react'

export const ToolBar = () => {
  return (
    <header>
        <nav class="navbar navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='ms-lg-4'>
                <a class="navbar-brand" href="#">UniversidadApp</a>
            </div>

            <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active ">
                        <a class="nav-link" href="#">Usuario: <span class="sr-only user__name">(Alexis)</span></a>
                    </li>
                    <li class="nav-item active ">
                        <a class="nav-link" href="#">Role: <span class="sr-only user__name">(ADMIN)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="adminTexts.html">Profesores</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="adminDocuments.html">Alumnos</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="adminDocuments.html">Kardex</a>
                    </li>
                </ul>

                <a class="btn btn-outline-success button__log-out m-lg-3" href="#" >Cerrar Sesión</a>
            </div>
        </nav>
    </header>
  );
}
