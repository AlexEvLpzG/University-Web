import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contex/Auth/AuthCotext';

export const ToolBar = () => {
    const authContext = useContext( AuthContext );
    const { logout } = authContext;

    const handleSubmit = () => {
        logout();
    }

    return (
        <header>
            <nav className="navbar navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='ms-lg-4'>
                    <a className="navbar-brand" href="/">UniversidadApp</a>
                </div>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active ">
                            <a className="nav-link" href="/">Usuario: <span className="sr-only user__name">(Alexis)</span></a>
                        </li>
                        <li className="nav-item active ">
                            <a className="nav-link" href="/">Role: <span className="sr-only user__name">(ADMIN)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Profesores</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Alumnos</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Kardex</a>
                        </li>
                    </ul>

                    <NavLink
                        className='btn btn-outline-success button__log-out m-lg-3'
                        to='/login'
                        onClick={ logout }
                    >
                        <a>Cerrar Sesión</a>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
