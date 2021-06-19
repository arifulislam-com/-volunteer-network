import React, { useEffect, useState } from 'react';
import Volunteer from '../Volunteer/Volunteer';
import './VolunteerActivities.css'


const VolunteerActivities = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/acticities")
        .then(res => res.json())
        .then(data => setData(data))
    },[]);
    return (
        <div >
            {
                data.map(volunteerObj => <Volunteer volunteerObj = {volunteerObj} key = {volunteerObj.id}/>)
            }
        </div>
    );
};

export default VolunteerActivities;