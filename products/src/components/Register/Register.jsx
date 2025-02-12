import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function () {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('This field is required')
      .min(3, 'Minimum length for name is 3')
      .max(15, 'Maximum length for name is 15'),
    email: Yup.string()
      .required('This field is required')
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        'Please enter a valid email'
      ),
    phone: Yup.string()
      .required('This field is required')
      .matches(/^\d{11}$/, 'Phone number must be exactly 11 digits'),
    password: Yup.string()
      .required('This field is required')
      .min(5, 'Minimum length for password is 5')
      .max(20, 'Maximum length for password is 20'),
    repeatPassword: Yup.string()
      .required('This field is required')
      .oneOf([Yup.ref('password')], "Password doesn't match"),
  });

  async function register(values) {
    try {
      let { data } = await axios.post(
        'http://localhost:8080/auth/register',
        values
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  let registerForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: register,
  });

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <h2 className="mx-3 mb-5">Sign Up:</h2>

          <form className="mx-3" onSubmit={registerForm.handleSubmit}>
            <div>
              <div className="input-group has-validation">
                <div
                  className={`form-floating ${
                    registerForm.errors.name && registerForm.touched.name
                      ? 'is-invalid'
                      : 'mb-4'
                  }`}
                >
                  <input
                    type="text"
                    className={`form-control ${
                      registerForm.errors.name && registerForm.touched.name
                        ? 'is-invalid'
                        : ''
                    }`}
                    id="name"
                    placeholder="Your name..."
                    name="name"
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    value={registerForm.values.name}
                  />
                  <label htmlFor="name">Name</label>
                </div>
                {registerForm.errors.name && registerForm.touched.name && (
                  <div className="invalid-feedback mb-2">
                    {registerForm.errors.name}
                  </div>
                )}
              </div>

              <div className="input-group has-validation">
                <div
                  className={`form-floating ${
                    registerForm.errors.email && registerForm.touched.email
                      ? 'is-invalid'
                      : 'mb-4'
                  }`}
                >
                  <input
                    type="email"
                    className={`form-control ${
                      registerForm.errors.email && registerForm.touched.email
                        ? 'is-invalid'
                        : ''
                    }`}
                    id="email"
                    placeholder="Your email..."
                    name="email"
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    value={registerForm.values.email}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                {registerForm.errors.email && registerForm.touched.email && (
                  <div className="invalid-feedback mb-2">
                    {registerForm.errors.email}
                  </div>
                )}
              </div>

              <div className="input-group has-validation">
                <div
                  className={`form-floating ${
                    registerForm.errors.phone && registerForm.touched.phone
                      ? 'is-invalid'
                      : 'mb-4'
                  }`}
                >
                  <input
                    type="text"
                    className={`form-control ${
                      registerForm.errors.phone && registerForm.touched.phone
                        ? 'is-invalid'
                        : ''
                    }`}
                    id="phone"
                    placeholder="Your phone..."
                    name="phone"
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    value={registerForm.values.phone}
                  />
                  <label htmlFor="phone">Phone</label>
                </div>
                {registerForm.errors.phone && registerForm.touched.phone && (
                  <div className="invalid-feedback mb-2">
                    {registerForm.errors.phone}
                  </div>
                )}
              </div>

              <div className="input-group has-validation">
                <div
                  className={`form-floating ${
                    registerForm.errors.password &&
                    registerForm.touched.password
                      ? 'is-invalid'
                      : 'mb-4'
                  }`}
                >
                  <input
                    type="password"
                    className={`form-control ${
                      registerForm.errors.password &&
                      registerForm.touched.password
                        ? 'is-invalid'
                        : ''
                    }`}
                    id="password"
                    placeholder="Your password..."
                    name="password"
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    value={registerForm.values.password}
                  />
                  <label htmlFor="password">Password</label>
                </div>
                {registerForm.errors.password &&
                  registerForm.touched.password && (
                    <div className="invalid-feedback mb-2">
                      {registerForm.errors.password}
                    </div>
                  )}
              </div>

              <div className="input-group has-validation">
                <div
                  className={`form-floating ${
                    registerForm.errors.repeatPassword &&
                    registerForm.touched.repeatPassword
                      ? 'is-invalid'
                      : 'mb-4'
                  }`}
                >
                  <input
                    type="password"
                    className={`form-control ${
                      registerForm.errors.repeatPassword &&
                      registerForm.touched.repeatPassword
                        ? 'is-invalid'
                        : ''
                    }`}
                    id="repeatPassword"
                    placeholder="Confirm password..."
                    name="repeatPassword"
                    onChange={registerForm.handleChange}
                    onBlur={registerForm.handleBlur}
                    value={registerForm.values.repeatPassword}
                  />
                  <label htmlFor="repeatPassword">Confirm Password</label>
                </div>
                {registerForm.errors.repeatPassword &&
                  registerForm.touched.repeatPassword && (
                    <div className="invalid-feedback mb-2">
                      {registerForm.errors.repeatPassword}
                    </div>
                  )}
              </div>

              <button type="submit" className="btn btn-outline-dark">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
