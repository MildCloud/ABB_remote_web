import React from "react";
import Monitor from "../components/Monitor";
import ToggleButton from "../components/ToggleButton"
import ToggleForm from "../components/ToggleForm";
import { useState } from "react";

function Home() {
    const [status, setStatus] = useState(false);
    return (
        <div className="home">
            <div className="titleWrapper">
                <h1>Welcome</h1>
            </div>
            {/* <div className="paragraph">
                <h2>Mission</h2>
                <div className="paragraphContent">
                    mission
                </div>
            </div> */}
            <Monitor status={status}/>
            <ToggleForm />
            <ToggleButton status={status} setStatus={setStatus}/>
        </div>
    );
}

export default Home;