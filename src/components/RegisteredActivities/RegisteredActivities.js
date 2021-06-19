import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

const RegisteredActivities = () => {
    const [registeredData, setRegisteredData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/registeredActivities")
        .then(res => res.json())
        .then(data => setRegisteredData(data))
    },[]);

    const loadAfterDelete = (id) => {
        const afterDeletedata = registeredData.filter(data => data._id !== id)
        setRegisteredData(afterDeletedata);
    }

    const style = {border:"1px solid gray", padding:"15px", margin:"20px 200px"};
    
    const handleDeletaActivities = (id,) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data, id))
        loadAfterDelete(id)
    }

    return (
        <div>
            <Header></Header>
            <div>
                {
                    registeredData.map(e => <div style={style}><h1>${e.activitiesName}</h1> <p>{e.date}</p><button onClick={() => handleDeletaActivities(e._id)}>Cancel</button></div>)
                }
            </div>
        </div>
    );
};

export default RegisteredActivities;