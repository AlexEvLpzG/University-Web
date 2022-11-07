import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contex/Auth/AuthCotext';
import { DataContext } from '../../contex/Data/DataContext';

export const StudentKardex = () => {
    const dataContext = useContext( DataContext );
    const { getInformationKardexById, kardexFound, studentSearch } = dataContext;

    const authContext = useContext( AuthContext );
    const { user } = authContext;
    const { id } = useParams();

    const[ LoadData, setLoadData ] = useState(false);

    useEffect(() => {
        getInformationKardexById({ id, token: user.Token });
        setTimeout(() => {
            setLoadData( true );
        }, 300);
        // eslint-disable-next-line
    }, [])

    if( user.UserData.role.description === 'ROLE_ALUMNO' && user.UserData.id !== id  ) {
        return <Navigate to='/' />
    }

    return (
        <div className='container py-4'>
            {
                !LoadData ?
                    <div className='d-flex justify-content-center'>
                        <div className='spinner-border' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                        </div>
                    </div>
                :
                    <div className='card bg-light'>
                        <div className='card-header'>Calificaciones del Alumno: { studentSearch.nombre + ' ' + studentSearch.ape_pat + ' ' + studentSearch.ape_mat }</div>

                        <div className='card-body'>
                            <ul className='list-group'>
                                <li className='list-group-item active text-center'> Información del Alumno</li>
                                <li className='list-group-item'>Nombre Completo: { studentSearch.nombre + ' ' + studentSearch.ape_pat + ' ' + studentSearch.ape_mat }</li>
                                <li className='list-group-item'>Correo Institucional: { studentSearch.email }</li>
                                <li className='list-group-item'>Matricula: { studentSearch.id }</li>
                                <li className='list-group-item'>Facultad: { studentSearch.nombre_dependencia }</li>
                                <li className='list-group-item'>Carrera: { studentSearch.nombre_carrera }</li>
                            </ul>

                            {
                                kardexFound.length === 0 && <div className='alert alert-info my-4 text-center'>No se han registrado calificaciones</div>
                            }

                            {
                                kardexFound.length !== 0
                                &&
                                <table className='table table-bordered table-striped my-4'>
                                    <thead className='thead-dark table-dark'>
                                        <tr>
                                            <th>ID</th>
                                            <th>Materia</th>
                                            <th>Semestre</th>
                                            <th>calificación</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            kardexFound.map(( element, i ) => (
                                                <tr key={ element.id }>
                                                    <td>{ i + 1 }</td>
                                                    <td>{ element.materia }</td>
                                                    <td>{ element.semestre }</td>
                                                    <td>{ element.calificación }</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            }
                        </div>
                    </div>
            }
        </div>
    );
}
