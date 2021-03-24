import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
const About = () => {
    const [responseData, setResponseData] = useState([])
    console.log(responseData);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {

        const Order = { ...data }
        fetch("https://examplebd.com/api/live-classes?user_id=10089", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setResponseData(data);
                alert(' order send');
                e.target.reset();
            })
    }
    return (
        <div className="container mt-5">
            <div className="formSubmit d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input name="company" style={{ width: '570px', padding: '20px 10px' }} placeholder='Your name / company’s name' className='form-control' ref={register({ required: true })} />
                    {errors.name && <span className="error">Name is required</span>}
                    <br />
                    <input name="email" style={{ width: '570px', padding: '20px 10px' }} placeholder='Your email address' className='form-control' ref={register({ required: true })} />
                    {errors.name && <span className="error">Email is required </span>}
                    <br />
                    <input name="ID" style={{ width: '570px', padding: '20px 10px' }} placeholder='Your ID' className='form-control' ref={register({ required: true })} />
                    {errors.name && <span className="error">ID is required</span>}
                    <br />
                    <textarea name="details" style={{ width: '570px', padding: '20px 10px', resize: 'none' }} placeholder='Your Details' className='form-control' ref={register({ required: true })} />
                    {errors.name && <span className="error">Details is required</span>}
                    <br />
                    <input type="submit" value='Send' style={{ width: '150px', height: '40px', fontSize: '16px', background: '#111430', color: '#FFFFFF', borderRadius: '10px', marginTop: '20px' }} />
                </form>
            </div>

                <table className="table border shadow mt-5">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Live_Type</th>
                            <th scope="col">Title</th>
                            <th scope="col">User_ID</th>
                            <th scope="col">User_Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           responseData.map((data) => (
                               <tr>
                                   <th scope="row">{data.id}</th>
                                   <td >{data.live_type}</td>
                                   <td >{data.title}</td>
                                   <td >{data.user_id}</td>
                                   <td>
                                     {data.user_name} 
                                   </td>
                                  
                               </tr>
                           ))
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default About;