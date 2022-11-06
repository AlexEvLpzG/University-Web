import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contex/Auth/AuthCotext';
import { DataContext } from '../../contex/Data/DataContext';

export const ListStudentInformation = () => {
    const dataContext = useContext( DataContext );
    const { getAllStudent, studentList } = dataContext;

    const authContext = useContext( AuthContext );
    const { user } = authContext;

    const[ LoadData, setLoadData ] = useState(false);


    useEffect(() => {
        getAllStudent( user.Token );
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoadData( true );
        }, 300);
    }, [])

    return (
        <>
            {
                !LoadData ?
                    <div className='d-flex justify-content-center'>
                        <div className='spinner-border' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                        </div>
                    </div>
                :
                    <div className='container card bg-light mt-4'>
                        <div className='card-header text-center fs-3'>Lista de Alumnos Registrados</div>

                        {
                            studentList.length === 0 && <div className='alert alert-info my-4 text-center'>No se pudo encontrar profesores Registrados</div>
                        }

                        <Link className='btn btn-success btn-xs' to='/nuevo-alumno'>Agregar Nuevo Alumno</Link>
                        
                        {
                            studentList.length != 0
                            &&
                            <table className='table table-bordered table-striped my-4'>
                                <thead className='thead-dark table-dark'>
                                    <tr>
                                        <th>ID</th>
                                        <th className='text-center'>Nombre Completo</th>
                                        <th className='text-center'>Matricula</th>
                                        <th className='text-center'>Email</th>
                                        <th className='text-center'>Teléfono</th>
                                        <th className='text-center'>Dependencia</th>
                                        <th className='text-center'>Carrera</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        studentList.map(( element, i ) => (
                                            <tr key={ element.id }>
                                                <td>
                                                    <Link className='btn btn-primary btn-xs' to={ `../kardex/${ element.id }` }>{ i + 1 }</Link>
                                                </td>
                                                <td>{ element.nombre + ' ' + element.ape_pat + ' ' + element.ape_mat }</td>
                                                <td>{ element.id }</td>
                                                <td>{ element.email }</td>
                                                <td>{ element.telefono }</td>
                                                <td>{ element.nombre_dependencia }</td>
                                                <td>{ element.nombre_carrera }</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        }
                    </div>
            }
        </>
    );
}
