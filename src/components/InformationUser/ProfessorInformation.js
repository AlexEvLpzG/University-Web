import React from 'react';

export const ProfessorInformation = ({ user }) => {
    return (
        <div className="container py-4">
            <div className="card bg-light">
                <div className="card-header">Detalle del Profesor: { user.UserData.nombre + " " + user.UserData.ape_pat + " " + user.UserData.ape_mat }</div>

                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item active text-center"> Información del Profesor </li>
                        <li className="list-group-item">Nombre Completo: { user.UserData.nombre + " " + user.UserData.ape_pat + " " + user.UserData.ape_mat }</li>
                        <li className="list-group-item">Correo Institucional: { user.UserData.email }</li>
                        <li className="list-group-item">Celular: { user.UserData.teléfono }</li>
                        <li className="list-group-item">Facultad: { user.UserData.cve_dependencia.nombre_dependencia }</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
