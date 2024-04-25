import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState("");

    const [currentSection, setCurrentSection] = useState("Publicacions");
    const handleSectionChange = (event) => {
        setCurrentSection(event.target.value);
    };

    useEffect(()=>{
        const fetchUserDetails = async () => {
            try{
                const token = localStorage.getItem("token");

                if(!token){
                    navigate('/login');
                    return ;
                }
    
                const response = await axios.get("http://127.0.0.1:8000/api/userdetail",{
                    headers:{
                        Authorization: `Bearer ${token}`,
                    },
                });
                
                setUserDetails(response.data);
            }catch(error){
                if (error.response && error.response.status === 401) {
                    Swal.fire({
                      icon: "error",
                      title: "Authentication Failed",
                      text: "Please log in again.",
                    }).then(() => {
                      navigate("/");
                    });
                  } else {
                    console.error("Error fetching user details:", error);
                  }
            }
        };
        fetchUserDetails();
    },[navigate])
    return(
        <div className="dashboardContainer">
            <div className="dashboardHeader">
                <div className="dashboardTitle">
                    <h1>{currentSection}</h1>
                    <h2> {userDetails.email} </h2>
            </div>

            <div className="dashboardContent">
                
                <div className="dashboardSelect">
                    <select
                        value={currentSection}
                        onChange={handleSectionChange}
                        className="sectionSelect"
                    >
                        <option value="Publicacions">Publicacions</option>
                        <option value="Membres">Membres</option>
                        <option value="Línies">Línies</option>
                        <option value="Projectes">Projectes</option>
                        <option value="Contractes">Contractes</option>
                        <option value="Actualitat">Actualitat</option>
                    </select>
                </div>
            </div>

            <div className="dashboardCards">
                <DashboardCard selectedOption={currentSection} />
            </div>

            <div className="logoutButton">
                <button
                    onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/");
                    }}
                >
                    Log out
                </button>
            </div>

        </div>
    </div>
    );
}

export default Dashboard;
            