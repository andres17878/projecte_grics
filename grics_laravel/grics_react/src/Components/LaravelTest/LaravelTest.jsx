import axios from 'axios';
import { useState, useEffect } from 'react';

export default function LaravelTest() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('/api/').then((response) => {
        setData(response.data);
        });
    }, []);
    
    return (
        <div>
        <h1>Laravel Test</h1>
        <ul>
            {data.map((item) => (
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        </div>
    );
    }
