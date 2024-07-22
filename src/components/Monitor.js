import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Monitor(props) {
    const [monitorData, setMonitorData] = useState(null);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Current',
                data: [],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    });

    const fetchData = async () => {
        const mcu_url = "http://10.42.0.1:8080/monitor";
        const local_url = "http://localhost:8080/monitor";
        const response = await fetch(mcu_url);
        const data = await response.json();
        setMonitorData(data);
        updateChartData(data.current);
    };

    const updateChartData = (newData) => {
        setChartData((prevData) => {
            const updatedLabels = [...prevData.labels, new Date().toLocaleTimeString()];
            const updatedData = [...prevData.datasets[0].data, newData];

            if (updatedLabels.length > 50){
                updatedLabels.shift();
                updatedData.shift();
            }

            return {
                ...prevData,
                labels: updatedLabels,
                datasets: [
                    {
                        ...prevData.datasets[0],
                        data: updatedData,
                    },
                ],
            };
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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
        );
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
            <div className="chartContainer">
                <Line data={chartData} />
            </div>
        </div>
    );
}

export default Monitor;
