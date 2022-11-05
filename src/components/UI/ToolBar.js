import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contex/Auth/AuthCotext';

export const ToolBar = () => {
    const authContext = useContext( AuthContext );
    const { logout, user } = authContext;

    return (
        <header>
            <nav className="navbar navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='ms-lg-4'>
                    <a className="navbar-brand" href="/">UniversidadApp</a>
                </div>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active ">
                            <a className="nav-link text-white" href="/" style={{ PointerEvent: 'none', cursor: 'default' }}>
                                Usuario: <span className="user__name text-info">( { user.UserData.nombre } )
                            </span></a>
                        </li>
                        <li className="nav-item active ">
                            <a className="nav-link text-white" href="/" style={{ PointerEvent: 'none', cursor: 'default' }}>
                                Role: <span className="text-info">( { user.UserData.role.description.split('_')[1] } )
                            </span></a>
                        </li>

                        {
                            user.UserData.role.description === 'ROLE_ADMIN'
                            &&
                            <>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Profesores</a>
                                </li>

                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Alumnos</a>
                                </li>
                            </>
                        }

                        {
                            user.UserData.role.description === 'ROLE_ALUMNO'
                            &&
                            <>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Kardex</a>
                                </li>
                            </>
                        }
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
