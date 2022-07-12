import "./navBar.css"
import PrimaryButton from "../Buttons/primaryButtonIndex"
import Layout from "../../pages/Layout"

function NavBar (props) {

    return (
        <div className="nav-bar-container">
     <img className="nav-logo" src={process.env.PUBLIC_URL + '/logo-flat.png'} alt="logo" />
     <Layout/>
     <div className="nav-btn-container">
     <PrimaryButton text="Home"  onclick={props.home}/>
    <PrimaryButton text="Projects"/>
    <PrimaryButton text="Experience"/>
    <PrimaryButton text="About"/>
    <PrimaryButton text="Contact"/>
    </div>
        </div>
    )
}

export default NavBar