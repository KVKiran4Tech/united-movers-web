import React, { useState } from 'react';
import './Login.css';
import useLoginForm from "./useLoginForm";
import validate from "./LoginFormValidationRules";
import { Navigate  } from 'react-router-dom';

const Login = (props) => {
    const { values, errors, handleChange, handleSubmit } = useLoginForm(
        login,
        validate
    );
    const [loggedIn, setLoggedIn] = useState(false);
    
    function login() {
        setLoggedIn(true);
        props.parentCallback(true);
        return <Navigate replace to="/home" />;
    }

    return (
        <div className="section is-fullheight">
          {loggedIn && <Navigate replace to="/home" />}
          <div className="container">
            <div className="column is-6 is-offset-3">
              <div className="box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="field">
                    <label className="label">Email Address</label>
                    <div className="control">
                      <input
                        autoComplete="off"
                        className={`input ${errors.email && "is-danger"}`}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email || ""}
                        required
                      />
                      {errors.email && (
                        <p className="help is-danger">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        className={`input ${errors.password && "is-danger"}`}
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password || ""}
                        required
                      />
                    </div>
                    {errors.password && (
                      <p className="help is-danger">{errors.password}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="button is-block is-info is-fullwidth"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );

  };
  
export default Login;