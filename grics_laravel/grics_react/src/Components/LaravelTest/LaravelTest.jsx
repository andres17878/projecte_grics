import axios from 'axios';
import { useState, useEffect } from 'react';

export default function LaravelTest() {
    // Retrieve data from the Laravel API from the route http://localhost:8000/api/prueba
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/prueba')
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (

        <div>
            <h1>Test Laravel</h1>
            <p>{data.message}</p>
        </div>
    );
}
