import React, { useState, useEffect } from 'react';


function Monitor(props) {
    const [monitorData, setMonitorData] = useState(null);
    
    const fetchData = async () => {
        const mcu_url = "http://10.42.0.1:8080/monitor";
        const local_url = "http://localhost:8080/monitor";
        const response = await fetch(mcu_url);
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
    if (!monitorData || monitorData.error) {
        return (
            <div className="monitorTable">
                <div className="monitorName">
                    No available data 
                </div>
                <div className="monitorName">
                    Please turn on
                </div>
            </div>
        )
    }
    return (
        <div className="monitorTable">
            <div className="monitorName">
                Forward power: 
                <div className="monitorData">
                    {monitorData.forward_power}
                </div>
            </div>
            <div className="monitorName">
                Backward power: 
            </div>
            <div className="monitorData">
                {monitorData.backward_power}
            </div>
            <div className="monitorName">
                Voltage: 
            </div>
            <div className="monitorData">
                {monitorData.voltage}
            </div>
            <div className="monitorName">
                Current: 
            </div>
            <div className="monitorData">
                {monitorData.current}
            </div>
        </div>
    );
}

export default Monitor