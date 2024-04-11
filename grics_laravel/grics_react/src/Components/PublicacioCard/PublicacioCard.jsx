import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './PublicacioCard.css';

export default function PublicacioCard(props) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/publicacio/${props.id}`)
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, [props.id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <a href={data.link} target="_blank" rel="noreferrer"  id={props.id} className="link_publicacio">
            <div className="publicacioCard" id={props.id}>
                <div className="linia_negra_vertical"></div>
                <div className="publicacioCard_text">
                    <p>{data.cognom}. {data.nom}. {data.anyo}. {data.titol}.
                    {data.revista}. {data.volum}. {data.resum}. {data.data}.</p>
                </div>
            </div>
        </a>
                
            
    );

}

PublicacioCard.propTypes = {
    id: PropTypes.number
}

    


