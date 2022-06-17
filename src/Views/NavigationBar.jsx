import React from "react";

function NavigationBar() {
    return (
        <div className="Navigation_Container">
            <h1>Task Manager</h1>
            <div className="Nav_Links">
                <a href="1">Link1</a>
                <a href="1">Link2</a>
                <a href="1">Link3</a>
                <a href="1">Link4</a>
                <a href="1">Link5</a>
            </div>
            <div className="Nav_Account-Settings">
                <a href="1">My Account</a>
                <a href="1">Sign Out</a>
            </div>
        </div>
    );
}

export default NavigationBar;
