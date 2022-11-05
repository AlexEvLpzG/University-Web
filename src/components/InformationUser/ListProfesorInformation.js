import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contex/Auth/AuthCotext';
import { DataContext } from '../../contex/Data/DataContext';

export const ListProfesorInformation = () => {
    const dataContext = useContext( DataContext );
    const { getAllProdessor, professorList } = dataContext;

    const authContext = useContext( AuthContext );
    const { user } = authContext;

    const[ LoadData, setLoadData ] = useState(false);


    useEffect(() => {
        getAllProdessor( user.Token );
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoadData( true );
        }, 300);
    }, [])

    professorList.sort((a,b) =>{ return a.id - b.id })

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
                        <div className='card-header text-center fs-3'>Lista de profesores Registrados</div>

                        {
                            professorList.length === 0 && <div className='alert alert-info my-4 text-center'>No se pudo encontrar profesores Registrados</div>
                        }

                        {
                            professorList.length != 0
                            &&
                            <table className='table table-bordered table-striped my-4'>
                                <thead className='thead-dark table-dark'>
                                    <tr>
                                        <th>ID</th>
                                        <th className='text-center'>Nombre Completo</th>
                                        <th className='text-center'>Email</th>
                                        <th className='text-center'>Teléfono</th>
                                        <th className='text-center'>Dependencia</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        professorList.map( element => (
                                            <tr key={ element.id }>
                                                <td>{ element.id }</td>
                                                <td>{ element.nombre + ' ' + element.ape_pat + ' ' + element.ape_mat }</td>
                                                <td>{ element.email }</td>
                                                <td>{ element.teléfono }</td>
                                                <td>{ element.nombre_dependencia }</td>
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
