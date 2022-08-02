import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/users";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async(event) => {
    event.preventDefault()
    try {
      const user = await UsersService.register({ name: name, email: email, password: password})
      setRedirectToLogin(true)
    } catch (error) {
      setError(true)
    }
  }

  if (redirectToLogin) {
    return <Navigate replace to="/login" />;
  }

  return (
    <>
      <div className="container w-25 mt-5">
        <form 
        className="row align-items-center gap-1"
        onSubmit={HandleSubmit}
        >
          <div className="col">
            <label htmlFor="validationServer01" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control is-valid"
              id="validationServer01"
              value={name}
              onChange={e => setName(e.target.value)}
              required  
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="row-4">
            <label htmlFor="validationServerUsername" className="form-label">
              E-mail
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control is-invalid"
                id="validationServerUsername"
                aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
                Please put your e-mail.
              </div>
            </div>
          </div>

          <div className="row-3">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"  
                name="password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input is-invalid"
                type="checkbox"
                value=""
                id="invalidCheck3"
                aria-describedby="invalidCheck3Feedback"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck3">
                Agree to terms and conditions
              </label>
              <div id="invalidCheck3Feedback" className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button 
              className="btn btn-danger" 
              type="submit"
              onClick={e => setRedirectToLogin(true)}
              >
                Login
              </button>
            </div>

            <div className="col">
              <button className="btn btn-danger" type="submit">
                Register
              </button>
            </div>  
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
