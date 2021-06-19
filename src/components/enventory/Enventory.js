import React, { useEffect } from 'react';
import fakeData from '../../fakeData';


const Enventory = () => {
    const uplodeAllActivities = () =>{
        fetch("http://localhost:5000/addActicities", {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    console.log(fakeData);
    return (
        <div>
            <button onClick={uplodeAllActivities}>Uplode All Activities</button>
        </div>
    );
};

export default Enventory;