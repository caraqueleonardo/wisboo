import { Link } from "react-router-dom";
import "../LandingPage/LandingPage.css"

function LandingPage () {
    return (
        <div className="body">
            <div className="landing">
                <h2>Wisboo</h2>
            </div>
            <div className="btnLanding">
                <Link to="/home">
                    <button type="submit"> Enter </button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;