import "./primaryButton.css"

function PrimaryButton(props){
    return(
        <button className="primary-btn">{props.text}</button>
    )
}

export default PrimaryButton