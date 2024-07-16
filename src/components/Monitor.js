import React, { useState, useEffect } from 'react';


function Monitor(props) {
    const [monitorData, setMonitorData] = useState(null);
    
    const fetchData = async () => {
        const mcu_url = "http://10.42.0.1:8080/monitor";
        const local_url = "http://localhost:8080/monitor";
        const response = await fetch(local_url);
        const data = await response.json();
        console.log('data', data)
        setMonitorData(data);
    };
    useEffect(() => {
        const interval = setInterval(() => {
          fetchData();
        }, 1000);
    
        return () => clearInterval(interval); 
    }, []);
    
    console.log('monitor data', monitorData);
    return (
        <div className="monitorTable">
            <div className="monitorName">
                Power Data: 
            </div>
            <div className="monitorData">
                {monitorData && monitorData.power}
            </div>
        </div>
    );
}

export default Monitor