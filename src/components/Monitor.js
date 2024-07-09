import React, { useState } from "react";
import { useLoaderData, Link } from 'react-router-dom';


function Monitor(props) {
    const monitorData = useLoaderData();
    console.log('monitor data', monitorData);
    return (
        <div></div>
    );
}

export default Monitor

export async function loader({params}) {
    try{
        const response = await fetch('http://10.42.0.1:8080/monitor');
        const resData = await response.json();
        return resData;
    } catch(err) {
        console.log(err);
        return null;
    }
}