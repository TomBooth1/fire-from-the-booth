import "./navBar.css"
import PrimaryButton from "../Buttons/primaryButtonIndex"

function NavBar () {

    return (
        <div className="nav-bar-container">
     <img className="nav-logo" src={process.env.PUBLIC_URL + '/logo-flat.png'} alt="logo" />
     <div className="nav-btn-container">
    <PrimaryButton text="Projects"/>
    <PrimaryButton text="Experience"/>
    <PrimaryButton text="About"/>
    <PrimaryButton text="Contact"/>
    </div>
        </div>
    )
}

export default NavBar