import React, { useState } from "react";


function ToggleButton(props) {
    const [status, setStatus] = useState(false);
    const text = status ? "Turn Off" : "Turn On";

    const handleToggle = (event) => {
        setStatus(!status);
        const data = {
            require: !status,
            test: "test abb"
        };
        const mcu_url = "http://10.42.0.1:8080/toggle";
        const local_url = "http://localhost:8080/toggle";
        fetch(local_url, {
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
    };

    return (
        <div>
            <button className="toggleButton" onClick={handleToggle}> {text} </button>
        </div>
    );
};

export default ToggleButton;
