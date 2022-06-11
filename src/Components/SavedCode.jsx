import React from "react";

function SavedCode() {
    return <div>SavedCode</div>;
}

export default SavedCode;

/**
 *     let getDay = new Date().getDay();
    let currentDay = DAYS_OF_THE_WEEK[getDay];
    let currentNumOfDay = new Date().getDate();

    let minRangeOfDays = currentNumOfDay - 3;
    let maxRangeOfDays = currentNumOfDay + 3;

    let currentWeek = DAYS_WITH_NUMBER.filter((dayNum) => {
        if (dayNum >= minRangeOfDays && dayNum <= maxRangeOfDays) {
            return dayNum;
        }
    });

    const [daysOfWeek, setDaysOfWeek] = useState(currentWeek);
    return (
        <div className="App">
            
        </div>
    );
 * 
 * <div className="Side_View">
                <p>Login</p>
            </div>
            <div className="Main_View">
                <h1>Dashboard</h1>
                <p>Current Date</p>
                <div className="Date_View_Container">
                    <div className="Week_Container">
                        {daysOfWeek.map((day, index) => {
                            let todayDate = DAYS_OF_THE_WEEK[(index + 1) % 6];
                            return (
                                <div className="Date_Container" key={todayDate}>
                                    <p>{todayDate}</p>
                                    <p>{day}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <h1>Task View</h1>
                <div className="Task_View">
                    {dummyUserData.map((td, index) => {
                        return (
                            <div className="Task_Container" key={index}>
                                <p id="TaskName">{td._todo}</p>
                                <p>Date: {td._date.toDateString()}</p>
                                <p>Priority: {td._priority}</p>
                                <nav>
                                    <button className="TaskButton-Edit">
                                        Edit
                                    </button>
                                    <button className="TaskButton-Complete">
                                        Complete
                                    </button>
                                </nav>
                            </div>
                        );
                    })}
                </div>
            </div>
 */
