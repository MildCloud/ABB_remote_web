import React from "react";
import ToggleButton from "../components/ToggleButton"

function Home() {
    return (
        <div className="home">
            <div className="titleWrapper">
                <h1>Welcome</h1>
            </div>
            <div className="paragraph">
                <h2>Mission</h2>
                <div className="paragraphContent">
                    mission
                </div>
            </div>
            <ToggleButton />
        </div>
    );
}

export default Home;