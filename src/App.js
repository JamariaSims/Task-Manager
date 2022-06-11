import "./App.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
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
            <div className="Main_View"></div>
        </div>
    );
}

export default App;
