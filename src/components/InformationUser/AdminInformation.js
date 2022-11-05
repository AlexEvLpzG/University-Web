import React from 'react'

export const AdminInformation = ({ user }) => {
    return (
        <div className="container py-4">
            <div className="card bg-light">
                <div className="card-header">Detalle del Administrador: { user.UserData.nombre + " " + user.UserData.ape_pat + " " + user.UserData.ape_mat }</div>

                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item active text-center"> Información del Administrador </li>
                        <li className="list-group-item">Nombre Completo: { user.UserData.nombre + " " + user.UserData.ape_pat + " " + user.UserData.ape_mat }</li>
                        <li className="list-group-item">Correo Institucional: { user.UserData.email }</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
