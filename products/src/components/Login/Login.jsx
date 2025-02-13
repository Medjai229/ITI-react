import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../../context/TokenContext';

export default function Login() {
  let { setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('This field is required')
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        'Please enter a valid email'
      ),
    password: Yup.string()
      .required('This field is required')
      .min(5, 'Minimum length for password is 5')
      .max(20, 'Maximum length for password is 20'),
  });

  async function login(values) {
    try {
      let { data } = await axios.post(
        'http://localhost:8080/auth/login',
        values
      );
      localStorage.setItem('token', data.token);
      setToken(data.token);
      navigate('/home');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  let loginForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: login,
  });

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <h2 className="mx-3 mb-5">Login:</h2>

          <form className="mx-3" onSubmit={loginForm.handleSubmit}>
            <div>
              <div className="input-group has-validation">
                <div
                  className={`form-floating ${
                    loginForm.errors.email && loginForm.touched.email
                      ? 'is-invalid'
                      : 'mb-4'
                  }`}
                >
                  <input
                    type="email"
                    className={`form-control ${
                      loginForm.errors.email && loginForm.touched.email
                        ? 'is-invalid'
                        : ''
                    }`}
                    id="email"
                    placeholder="Your email..."
                    name="email"
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    value={loginForm.values.email}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                {loginForm.errors.email && loginForm.touched.email && (
                  <div className="invalid-feedback mb-2">
                    {loginForm.errors.email}
                  </div>
                )}
              </div>

              <div className="input-group has-validation">
                <div
                  className={`form-floating ${
                    loginForm.errors.password && loginForm.touched.password
                      ? 'is-invalid'
                      : 'mb-4'
                  }`}
                >
                  <input
                    type="password"
                    className={`form-control ${
                      loginForm.errors.password && loginForm.touched.password
                        ? 'is-invalid'
                        : ''
                    }`}
                    id="password"
                    placeholder="Your password..."
                    name="password"
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    value={loginForm.values.password}
                  />
                  <label htmlFor="password">Password</label>
                </div>
                {loginForm.errors.password && loginForm.touched.password && (
                  <div className="invalid-feedback mb-2">
                    {loginForm.errors.password}
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-outline-dark">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
