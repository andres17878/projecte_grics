import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./DashboardCard.css";
import { useNavigate } from "react-router-dom";

const DashboardCard = ({ selectedOption }) => {
    const history = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = "http://localhost:8000/api/";
                switch (selectedOption) {
                    case "Publicacions":
                        url += "allPublicacions";
                        break;
                    case "Membres":
                        url += "allMembres";
                        break;
                    case "Actualitat":
                        url += "allNoticies";
                        break;
                    case "Línies":
                        url += "allLinies";
                        break;
                    case "Projectes":
                        url += "allProjectes";
                        break;
                    case "Contractes":
                        url += "allContractes";
                        break;
                    default:
                        url += "allPublicacions";
                }
                const response = await axios.get(url);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [selectedOption]);

    const handleUpdate = async (id) => {
        try{
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/api/all${selectedOption}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if(response.status === 200){
                history(`/${selectedOption}/${id}`, {state: {data: response.data}})
            }

        } catch (error) {
            console.error("Error fetching item:", error);

        }
        
    }

    const handleDelete = async (id) => {
        try {
            const confirmDelete = window.confirm("Estàs segur que vols eliminar aquest element? Això no es pot desfer. OK per eliminar, Cancel per cancel·lar.");
            if (!confirmDelete) {
                return;
            }
            const token = localStorage.getItem('token'); 
            const deleteResponse = await axios.delete(`http://localhost:8000/api/${selectedOption}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            if (deleteResponse.status === 200) {
                const newData = data.filter((item) => item.id !== id);
                setData(newData);
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }


    };

    return (
        <div className="dashboardCard">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="dashboardCardUl">
                    {data
                    .sort((a, b) => b.id - a.id)
                    .map((item) => (
                        <li key={item.id} className="itemCard">
                            <div className="lineaDash"></div>{" "}
                            <div className="cardContent">
                                {item.foto && (
                                    <img
                                        className="imgDashCard"
                                        src={item.foto}
                                        alt={item.titol}
                                    />
                                )}
                                {selectedOption !== "Publicacions" &&
                                    item.nom && <span>{item.nom}</span>}
                                <span>{item.titol}</span>
                                <div className="itemButtons">
                                    <button
                                        onClick={() => handleUpdate(item.id)}
                                        className="updateButton"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="deleteButton"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DashboardCard;

DashboardCard.propTypes = {
    selectedOption: PropTypes.string.isRequired,
};
