import React, { useContext } from 'react';
import { AuthContext } from '../../contex/Auth/AuthCotext';
import { DataContext } from '../../contex/Data/DataContext';
import { useForm } from '../hooks/useForm';

export const FormNewStudent = () => {
    const dataContext = useContext( DataContext );
    const { addNewStudent, listMessageError, typeMessage, message } = dataContext;

    const authContext = useContext( AuthContext );
    const { user } = authContext;

    const [ formValues, handleInputChange  ] = useForm({
        matricula: '',
        nombre: '',
        ape_pat: '',
        ape_mat: '',
        email: '',
        password: '',
        estado: '',
        municipio: '',
        colonia: '',
        direccion: '',
        telefono: '',
        celular: '',
        cve_dependencia: '',
        cve_carrera: 0,
        curp: '',
        genero: 0,
        est_civil: '',
        fec_nacimiento: ''
    });
    const {
        matricula,
        nombre,
        ape_pat,
        ape_mat,
        email,
        password,
        estado,
        municipio,
        colonia,
        direccion,
        telefono,
        celular,
        cve_dependencia,
        cve_carrera,
        curp,
        genero,
        est_civil,
        fec_nacimiento
    } = formValues;

    const onSubmit = ( e ) => {
        e.preventDefault();
        addNewStudent({ student: formValues, token: user.Token });
    }

    return (
        <div className='container w-50 mt-4 card p-5'>
            <h2 className='text-center'>Agregar Nuevo Alumno</h2>
            <form className='mt-3' onSubmit={ onSubmit }>
                <div className="mb-3">
                    <label className="form-label">Matricula</label>
                    <input
                        type="text"
                        className="form-control"
                        name='matricula'
                        value={ matricula }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name='nombre'
                        value={ nombre }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido Paterno</label>
                    <input
                        type="text"
                        className="form-control"
                        name='ape_pat'
                        value={ ape_pat }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido Materno</label>
                    <input
                        type="text"
                        className="form-control"
                        name='ape_mat'
                        value={ ape_mat }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name='email'
                        value={ email }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name='password'
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Estado</label>
                    <input
                        type="text"
                        className="form-control"
                        name='estado'
                        value={ estado }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Municipio</label>
                    <input
                        type="text"
                        className="form-control"
                        name='municipio'
                        value={ municipio }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Colonia</label>
                    <input
                        type="text"
                        className="form-control"
                        name='colonia'
                        value={ colonia }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        name='direccion'
                        value={ direccion }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input
                        type="text"
                        className="form-control"
                        name='telefono'
                        value={ telefono }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Celular</label>
                    <input
                        type="text"
                        className="form-control"
                        name='celular'
                        value={ celular }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">curp</label>
                    <input
                        type="text"
                        className="form-control"
                        name='curp'
                        value={ curp }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Clave de la Dependencia</label>
                    <input
                        type="text"
                        className="form-control"
                        name='cve_dependencia'
                        value={ cve_dependencia }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Clave de la Carrera</label>
                    <input
                        type="text"
                        className="form-control"
                        name='cve_carrera'
                        value={ cve_carrera }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Genero</label>
                    <select className="form-control form-control-lg mb-4" aria-label="Default select example" name="genero" onChange={ handleInputChange } value={ genero }>
                        <option defaultValue={ 0 }>--- Seleccione ---</option>
                        <option value="1">Hombre</option>
                        <option value="2">Mujer</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label className="form-label">Estado Civil</label>
                    <select className="form-control form-control-lg mb-4" aria-label="Default select example" name="est_civil" onChange={ handleInputChange } value={ est_civil }>
                        <option defaultValue={ 0 }>--- Seleccione ---</option>
                        <option value="CASADO">CASADO</option>
                        <option value="SOLTERO">SOLTERO</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Decha de nacimiento</label>
                    <input
                        type="date"
                        className="form-control"
                        name='fec_nacimiento'
                        value={ fec_nacimiento }
                        onChange={ handleInputChange }
                    />
                </div>
                {
                    typeMessage === 'alert-ok'
                        &&
                    <div className="alert alert-success " role="alert">
                        { message }
                    </div>
                }
                {
                    listMessageError.length > 0
                        &&
                    <div className="alert alert-danger" role="alert">
                        <ul>
                            {
                                listMessageError.map( error => (
                                    <li>{ error.msg }</li>
                                ))
                            }
                        </ul>
                    </div>
                }
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
