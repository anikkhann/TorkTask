import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
          <Link to="/home"><h1 className="text-center mt-5"> <span style={{color:"red"}}>404 Not Found </span> <br/> <br/> Back To Home </h1></Link>  
        </div>
    );
};

export default NotFound;