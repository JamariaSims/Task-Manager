import React from "react";
/*
    Month Generator
    Display months based of the current date.
    So if 6/9/22 is Thursday. Then 6/8 must be Wednesday.
*/
function Calender() {
    const currentDate = new Date.now();
    return (
        <div>
            <h1>{currentDate}</h1>
        </div>
    );
}

export default Calender;
