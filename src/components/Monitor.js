import React, { useState } from "react";
import { useLoaderData, Link } from 'react-router-dom';


function Monitor(props) {
    const monitorData = useLoaderData();
    console.log('monitor data', monitorData);
    return (
        <div className="monitorTable">
            <div className="monitorName">
                Power Data: 
            </div>
            <div className="monitorData">
                {monitorData.power}
            </div>
        </div>
    );
}

export default Monitor

export async function loader({params}) {
    try{
        const mcu_url = "http://10.42.0.1:8080/monitor";
        const local_url = "http://localhost:8080/monitor";
        const response = await fetch(local_url);
        const resData = await response.json();
        return resData;
    } catch(err) {
        console.log(err);
        return null;
    }
}