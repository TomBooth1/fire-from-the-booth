import "./navBar.css"
import PrimaryButton from "../Buttons/primaryButtonIndex"


// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


function NavBar (props) {

    return (
        <section className="nav-bar">
        <div className="nav-bar-container">
     <img className="nav-logo" src={process.env.PUBLIC_URL + '/logo-flat.png'} alt="logo" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}} />
     <div className="nav-btn-container">
     <PrimaryButton className={"primary-btn-red"} text="Home"  onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}/>
    <PrimaryButton className={"primary-btn-green"} text="Projects" onClick={() => {window.scrollTo({top: 1150, left: 0, behavior: 'smooth'})}}/>
    <PrimaryButton className={"primary-btn-blue"} text="Experience"/>
    <PrimaryButton className={"primary-btn-red"} text="About"/>
    <PrimaryButton className={"primary-btn-green"} text="Contact"/>
    </div>
        </div>
       </section>
    )
}

export default NavBar


// onClick={() => {document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})}}