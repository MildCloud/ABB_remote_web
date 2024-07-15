import React from "react";
import Monitor from "../components/Monitor";
import ToggleButton from "../components/ToggleButton"

function Home() {
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
            <Monitor />
            <ToggleButton />
        </div>
    );
}

export default Home;