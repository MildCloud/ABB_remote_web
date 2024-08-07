import React, { useState } from "react";


function ToggleButton({status, setStatus}) {
    const text = status ? "Turn Off" : "Turn On";

    const handleToggle = (event) => {
        setStatus(!status);
        const data = {
            require: !status,
            test: "test abb"
        };
        const mcu_url = "http://10.42.0.1:8080/toggle";
        const local_url = "http://localhost:8080/toggle";
        for (let i = 0; i < 5; i++) {
            fetch(mcu_url, {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
            })
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    };

    return (
        <div>
            <button className="toggleButton" onClick={handleToggle}> {text} </button>
        </div>
    );
};

export default ToggleButton;
