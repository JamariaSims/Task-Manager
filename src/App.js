import "./App.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ShareIcon from "@mui/icons-material/Share";
import SearchIcon from "@mui/icons-material/Search";
function App() {
    return (
        <div className="App">
            <div className="Side_View">
                <div className="Side_View_Header">
                    <h1 id="Heading_Name">Task Manager</h1>
                </div>
                <div className="Side_View_Nav">
                    <HomeOutlinedIcon id="SVG" />
                    <a>Home</a>
                    <CheckCircleOutlineOutlinedIcon id="SVG" />
                    <a>My Tasks</a>
                    <NotificationsNoneOutlinedIcon id="SVG" />
                    <a>Inbox</a>
                </div>
                <p id="Title-Reporting">Reporting</p>
                <div className="Reporting_Container">
                    <EqualizerOutlinedIcon id="SVG" />
                    <a>Portfolios</a>
                    <CrisisAlertOutlinedIcon id="SVG" />
                    <a>Goals</a>
                </div>
                <p id="Title-Favorites">Favorites</p>
                <div className="Favorites_Container"></div>

                <button id="Button-Invite">
                    <PersonAddOutlinedIcon id="SVG" />
                    <p>Invite Teammates</p>
                </button>
            </div>
            <div className="Main_View">
                <div className="Main_Header">
                    <div className="Header_Left">
                        <div className="Task_Heading">
                            <div className="Task_Heading-Top">
                                <h2>Customer Stories - Q4</h2>
                                <button>
                                    <KeyboardArrowDownOutlinedIcon id="Heading_Button-Icons" />
                                </button>
                                <button>
                                    <InfoOutlinedIcon id="Heading_Button-Icons" />
                                </button>
                                <button>
                                    <StarPurple500OutlinedIcon id="Heading_Button-Icons" />
                                </button>
                            </div>
                            <div className="Task_Heading-Bottom">
                                <p id="Box-Green"></p>
                                <p id="Task_Status">On Track</p>
                            </div>
                        </div>
                    </div>
                    <div className="Header_Right">
                        <div className="Header_Right-Container">
                            <button id="Button-Share">
                                <ShareIcon id="Icon-Share" />
                                <p id="Tag-Share">Share</p>
                            </button>
                            <input
                                id={"Search-Bar"}
                                type={"text"}
                                placeholder={"  Search"}
                            />
                            <button id={"Button-Add-New"}>
                                <p>+</p>
                            </button>
                            <button id={"Button-Profile"}>
                                <AccountCircleIcon id="Icon-Profile" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Navigation">
                    <div className="Navigation_Container">
                        <a>Overview</a>
                        <a>List</a>
                        <a>Board</a>
                        <a>Timeline</a>
                        <a>Calender</a>
                        <a>Dashboard</a>
                        <a>More...</a>
                    </div>
                    <button id="Button-Add_Chart">
                        <label id="Icon-Add-Chart">+</label>
                        <label id="Tag-Add-Chart">Add Chart</label>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
