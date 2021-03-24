import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
const Home = () => {
    const [allUserData, setAllUserData] = useState([])
    useEffect ( () => {
        fetch("https://examplebd.com/api/get-csrf-token")
        .then(response => response.json())
        .then(data => setAllUserData(data))
    }, [])
    return (
        <div className="container">
            <div className="py-4">
                <h1>
                    Token: 

                    {
                        allUserData.csrf_token
                    }
                </h1>
              
                

            </div>

        </div>
    );
};

export default Home;