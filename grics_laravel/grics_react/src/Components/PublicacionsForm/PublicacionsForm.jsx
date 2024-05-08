import axios from "axios";
import {useNavigate} from "react-router-dom";
import BACK from "../../assets/BACK/arrow_back.svg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


import "./PublicacionsForm.css";

export default function PublicacionsForm() {
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        cognom: "",
        nom: "",
        anyo: "",
        titol: "",
        revista: "",
        numero: "",
        volum: "",
        resum: "",
        link: "",
    });

    useEffect(() => {
        if (location.state) {
            setFormData(location.state.data);
        }
    }, [location]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            cognom: formData.get("cognom"),
            nom: formData.get("nom"),
            anyo: formData.get("any"),
            titol: formData.get("titol"),
            revista: formData.get("revista"),
            numero: formData.get("numero"),
            volum: formData.get("volum"),
            resum: formData.get("resum"),
            link: formData.get("link"),
        };
        try {
            const token = localStorage.getItem("token");

            // Here check if we are trying to add or edit a publication
            if (location.state) {
                await axios.put("http://localhost:8000/api/PublicacionsUpdate/" + location.state.data.id, data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                Swal.fire({
                    icon: "success",
                    title: "Publicació actualitzada",
                    text: "La publicació s'ha actualitzat correctament",
                }).then(() => {
                    navigate("/dashboard");
                });
            } else {
    

                await axios.post("http://localhost:8000/api/PublicacionsAdd", data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                Swal.fire({
                    icon: "success",
                    title: "Publicació afegida",
                    text: "La publicació s'ha afegit correctament",
                }).then(() => {
                    navigate("/dashboard");
                });
            }

        } catch (error) {
            if (error.response && error.response.status === 401) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No tens permisos per accedir a aquesta pàgina",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No s'ha pogut afegir la publicació",
                });
            }
        }
    }




    return (
        <div className="publicacionsFormContainer">

            <div className="goBackContainer">
                <Link to="/dashboard" className="imgBack"> 
                    <img src={BACK} alt="back" />
                </Link>
            </div>
            
            
            <div className="publicacionsForm">

                <form className="formPublicacions" onSubmit={handleSubmit}>
                    <h1 className="titleNovaPublicacio">  
                        {location.state ? "Editar publicació" : "Nova publicació"}
                    </h1>

                    <label>Cognom</label>
                    <input type="text" name="cognom" value={formData.cognom} onChange={e => setFormData({ ...formData, cognom: e.target.value})} required />

                    <label>Nom</label>
                    <input type="text" name="nom" value={formData.nom} onChange={e => setFormData({ ...formData, nom: e.target.value})} required />

                    <label>Any</label>
                    <input type="number" name="any" value={formData.anyo} onChange={e => setFormData({ ...formData, anyo: e.target.value})} required />

                    <label>Títol</label>
                    <input type="text" name="titol" value={formData.titol} onChange={e => setFormData({ ...formData, titol: e.target.value})} required />

                    <label>Revista</label>
                    <input type="text" name="revista" value={formData.revista} onChange={e => setFormData({ ...formData, revista: e.target.value})} required />

                    <label>Numero</label>
                    <input type="number" name="numero" value={formData.numero} onChange={e => setFormData({ ...formData, numero: e.target.value})} required />

                    <label>Volum</label>
                    <input type="number" name="volum" value={formData.volum} onChange={e => setFormData({ ...formData, volum: e.target.value})} required />

                    <label>Resum</label>
                    <textarea name="resum" value={formData.resum} onChange={e => setFormData({ ...formData, resum: e.target.value})} required />

                    <label>Link</label>
                    <input type="text" name="link" value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value})} required />

                    <button type="submit">Enviar</button>

                </form>
            </div>
        </div>
    );
}
