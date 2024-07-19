import React, { useState } from "react";
import { Form } from "react-router-dom";

function ToggleForm(props) {
    const [num, setNum] = useState(0);
    // console.log("num", num);
    function handleSubmit (event) {
        event.preventDefault()
        const data = {
            'num': num
        };
        console.log(data);
        const mcu_url = "http://10.42.0.1:8080/toggleN";
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

    return (
        <div className="formWrapper">
            <Form className="form" onSubmit={handleSubmit}>
                <p>
                    <label>
                        Input the number of testing here
                    </label>
                </p>
                <p>
                    <input type="number" onChange={e => setNum(e.target.value)} required></input>
                </p>
                <p className="form.actions">
                    <button type="submit">Submit</button>
                </p>
            </Form>
        </div>
    )
}

export default ToggleForm;