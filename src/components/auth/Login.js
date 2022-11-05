import React, { useContext } from 'react';
import { AuthContext } from '../../contex/Auth/AuthCotext';
import { useForm } from '../hooks/useForm';

export const Login = () => {
    const [ formValues, handleInputChange  ] = useForm({ email: '', password: '', typeRole: 0 });
    const { email, password, typeRole } = formValues;

    const authContext = useContext( AuthContext );
    const { login } = authContext;

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password, typeRole });
    }

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        {/* eslint-disable-next-line */}
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image"/>
                    </div>

                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={ handleSubmit }>
                            <div className="divider d-flex align-items-center my-5">
                                <p className="text-center fw-bold mx-3 mb-0">Welcome</p>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="email" id="form3Example3"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    name='email'
                                    value={ email }
                                    onChange={ handleInputChange }
                                />
                                <label className="form-label mt-2">Email address</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    id="form3Example4"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    name='password'
                                    value={ password }
                                    onChange={ handleInputChange }
                                />
                                <label className="form-label mt-2" >Password</label>
                            </div>

                            <div form-outline mb-3>
                                <select name="typeRole" onChange={ handleInputChange } value={ typeRole } className="form-control form-control-lg mb-4" aria-label="Default select example">
                                    <option selected>Type Role</option>
                                    <option value="1">Administrador</option>
                                    <option value="2">Alumno</option>
                                    <option value="3">Profesor</option>
                                </select>
                            </div>


                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                <label className="form-check-label">
                                    Remember me
                                </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    className="link-danger">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
