import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
function Signup() {
  const [inputs, setInputs] = useState({})
  const navigate = useNavigate()
  const handleChange = (e) => {
    e.preventDefault()
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }))

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/User/addUser", inputs)
      .then((response) => {
        console.log("user added successfully")
        console.log(response.data)
        navigate("/")
      }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <section className="vh-100" style={{ background: `url("https://www.danielmcclure.com/wp-content/uploads/Jordan1-large-620x380.jpg")` }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '5rem' }}>
              <div className="row g-0">
                <div className="col-md-5 col-lg-5 d-none d-md-block">
                  <img
                    src="https://img.freepik.com/photos-gratuite/jeune-homme-etudiant-dans-bibliotheque-aide-ordinateur-portable_23-2149285400.jpg?size=626&ext=jpg&ga=GA1.2.1345089941.1696063536&semt=sph"
                    alt="signup form"
                    className="img-fluid "
                    style={{ borderRadius: '5rem 0 0 5rem', height: "100%" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form >
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fas fa-book-open fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <span className="h1 fw-bold mb-0">Welcome to E-LEARNING</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Create your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input type="text" id="form2Example17" className="form-control form-control-lg" name="firstName" onChange={handleChange} />
                        <label className="form-label" htmlFor="form2Example17">
                          First name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form2Example17" className="form-control form-control-lg" name="lastName" onChange={handleChange} />
                        <label className="form-label" htmlFor="form2Example17">
                          Last name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg" name="email" onChange={handleChange} />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" name="password" onChange={handleChange} />
                        <label className="form-label" htmlFor="form2Example27"  >
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit" style={{ backgroundColor: '#ff6219' }} onClick={handleSubmit} > Signup
                        </button>
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Already have a account? <Link to="/"><span style={{ color: '#ff6219' }} >Login here</span></Link>
                      </p>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Signup;