import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import fakeData from '../../fakeData';
import Logo from '../Logo/Logo';

const Register = () => {
    const user = useContext(userContext);
    const [loggedInUser, setLoggedInuser] = user;
    console.log(loggedInUser);
    const {id} = useParams();
    const [singleData, setSingleData] = useState({});

    useEffect(()=> {
        fetch("http://localhost:5000/acticitie/" + id)
        .then(res => res.json())
        .then(data => setSingleData(data[0]))
    },[]);
    return (
        <div>
            <div>
                <Logo/>
            </div>
            
            <div className="form">
                <h2>Register as a Volunteer</h2>
                <form action="http://localhost:5000/addRegisteredActivities" method="POST">
                    <input type="text" placeholder="Full Name" name="name" required/>
                    <br/>
                    <input type="text" value={loggedInUser} placeholder="Username or Email" name="email required"/>
                    <br/>
                    <input type="text" placeholder="Date" name="date" required/>
                    <br/>
                    <input type="text" placeholder="Deaicription" name="deaicription" required/>
                    <br/>
                    <input type="text" value = {singleData.name} placeholder="Organize books at the library" name="activitiesName" required/>
                    <br/>
                    <input type="submit" value="Registration"/>
                </form>
            </div>
        </div>
    );
};

export default Register;