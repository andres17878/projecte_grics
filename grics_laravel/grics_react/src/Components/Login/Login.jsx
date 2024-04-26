import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BACK from "../../assets/BACK/arrow_back.svg";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () =>{
    const navigate = useNavigate();
    const [ formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [validationErrors, setValidationErrors] = useState({});
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
       
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", formData);

            const token = response.data.authorisation.token;

            localStorage.setItem("token", token);

            Swal.fire({
                icon: "success",
                title: "Login correcte",
                text: "Benvingut",
            }).then(() => {
                navigate("/dashboard");
            });
        } catch (error) {
            if (error.response && error.response.status === 401) {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: "Email o contrasenya incorrecte.",
                });
            } else {
                const responseData = error.response.data;
                setValidationErrors(responseData);
                if (responseData) {
                    setValidationErrors(responseData);
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: responseData || "Registration failed.",
                    });
                }
            }
        }
    }

    return(
        <div className="mainLoginContainer">
            <div className="goBackContainer">
                <Link to="/" className="imgBack"> 
                    <img src={BACK} alt="back" />
                </Link>
            </div>
            <div className="formContainer">
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <h1 className="titleText">Login</h1>
                        <input type="text" name="email" placeholder="Email" className="form-control" onChange={handleChange} />
                            {validationErrors.email && <span className="text-danger">{validationErrors.email[0]}</span>}
               
                        <input type="password" name="password" placeholder="Password" className="form-control" onChange={handleChange} />
                            {validationErrors.password && <span className="text-danger">{validationErrors.password[0]}</span>}
                    </div>
                    <button type="submit" className="buttonLogin">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;