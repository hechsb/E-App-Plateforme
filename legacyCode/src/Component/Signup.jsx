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
    <section className="vh-100" style={{ background: `url("https://media.wired.com/photos/640904ded3cc29b468bd4973/16:9/w_1978,h_1112,c_limit/The-Good-and-Bad-of-ChatGPT-in-Schools-Gear-GettyImages-1256969659.jpg")` }}>
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
                      <div className="w-full max-w-sm">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                          First name
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                          name="firstName"
                          onChange={handleChange}
                          placeholder="Enter your first name"
                        />
                      </div>

                      <div className="w-full max-w-sm mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                          name="lastName"
                          onChange={handleChange}
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div className="w-full max-w-sm">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                          name="email"
                          onChange={handleChange}
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="w-full max-w-sm mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                          name="password"
                          onChange={handleChange}
                          placeholder="Enter your password"
                        />
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