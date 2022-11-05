import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../contex/Data/DataContext';

export const StudentInformation = ({ user }) => {
    const dataContext = useContext( DataContext );
    const { getInformationById, userFound } = dataContext;

    useEffect(() => {
        getInformationById({ id: user.UserData.id, typeRole: user.UserData.role.description, token: user.Token });
    }, [] )

    return (
        <div className="container py-4">
            <div className="card bg-light">
                <div className="card-header">Detalle Alumno: { userFound.nombre + " " + userFound.ape_pat + " " + userFound.ape_mat }</div>

                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item active text-center"> Información del Alumno </li>
                        <li className="list-group-item">Nombre Completo: { userFound.nombre + " " + userFound.ape_pat + " " + userFound.ape_mat }</li>
                        <li className="list-group-item">Matricula: { userFound.id }</li>
                        <li className="list-group-item">Email: { userFound.email }</li>
                        <li className="list-group-item">CURP: { userFound.curp }</li>
                        <li className="list-group-item">Sexo: { userFound.genero == 1 ? 'Hombre' : 'Mujer' }</li>
                        <li className="list-group-item">Estado Civil: { userFound.est_civil }</li>
                        <li className="list-group-item">Celular: { userFound.celular }</li>
                        <li className="list-group-item">Teléfono: { userFound.telefono }</li>
                        <li className="list-group-item">Fecha de nacimiento: { userFound.fec_nacimiento }</li>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item list-group-item-primary">Domicilio Actual: </li>
                            <li className="list-group-item">Dirección: { userFound.direccion } </li>
                            <li className="list-group-item">Colonia: { userFound.colonia } </li>
                            <li className="list-group-item">Municipio: { userFound.municipio } </li>
                            <li className="list-group-item">Estado: { userFound.estado } </li>
                        </ul>
                        <li className="list-group-item">Facultad: { userFound.nombre_dependencia }</li>
                        <li className="list-group-item">Carrera: { userFound.nombre_carrera }</li>
                    </ul>

                    <div className="alert alert-info my-4">
                        text.cliente.detalle.no.facturas + ' ' + cliente.nombre + ' ' + cliente.apellido
                    </div>
                </div>
            </div>
        </div>
    );
}
