import { useState, createContext , useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userContext } from "../App";
function Login() {

  const { user, setUser } = useContext(userContext);
  // const [user,setUser]=useState("")
  const [inputs,setInputs]=useState({})

  const navigate = useNavigate()
const handleChange =(e)=>{
  e.preventDefault()
  const name = e.target.name;
  const value = e.target.value;
 
  setInputs(values => ({...values, [name]: value}))

}

const handleSubmit = (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");
  axios.post("http://localhost:3000/User/logUser", inputs)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);

      if (response.data.user.role === "admin") {
        console.log("hello admin");
        navigate("/layout");
      } else {
        console.log("hello from user");
        navigate("/UserLayout");
      }
    })
    .catch((err) => {
      console.log(err);
      alert('Invalid login credentials');
    });
};


  return (
<section className="vh-100" style={{ background: `url("https://media.wired.com/photos/640904ded3cc29b468bd4973/16:9/w_1978,h_1112,c_limit/The-Good-and-Bad-of-ChatGPT-in-Schools-Gear-GettyImages-1256969659.jpg")` }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '5rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://img.freepik.com/photos-gratuite/jeune-homme-etudiant-dans-bibliotheque-aide-ordinateur-portable_23-2149285400.jpg?size=626&ext=jpg&ga=GA1.2.1345089941.1696063536&semt=sph"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '5rem 0 0 5rem' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form >
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-book-open fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <span className="h1 fw-bold mb-0">Welcome to E-LEARNING</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg" name='email' onChange={handleChange} />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" name='password' onChange={handleChange} />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                       <button className="btn btn-dark btn-lg btn-block" type="button" onClick={handleSubmit} style={{ backgroundColor: '#ff6219' }}>
                          Login 
                        </button>
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Don't have an account? <Link to="/signup"><span style={{ color: '#ff6219' }} >Register here</span></Link>
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


export default Login