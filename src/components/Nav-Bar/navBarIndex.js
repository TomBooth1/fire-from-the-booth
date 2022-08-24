import "./navBar.css"
import PrimaryButton from "../Buttons/primaryButtonIndex"

import { useState } from "react"



function NavBar (props) {

const [active , setActive] = useState("home")

    return (
        <section className="nav-bar">
        <div className="nav-bar-container">
     <img className="nav-logo" src={process.env.PUBLIC_URL + '/logo-flat.png'} alt="logo" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}} />
     <div className="nav-btn-container">
     <PrimaryButton className={"primary-btn-blue"} text="Home"  onClick={() => {
         window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
         
         }}/>
    <PrimaryButton className={"primary-btn-red"} text="Projects"onClick={() => {document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})}}/>
    <PrimaryButton className={"primary-btn-green"} text="Experience" onClick={() => {document.getElementById('experience').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})}}/>
    <PrimaryButton className={"primary-btn-blue"} text="About" onClick={() => {document.getElementById('about').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})}}/>
    <PrimaryButton className={"primary-btn-red"} text="Contact" onClick={() => {document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})}}/>
    </div>
        </div>
       </section>
    )
}

export default NavBar


// onClick={() => {document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})}}