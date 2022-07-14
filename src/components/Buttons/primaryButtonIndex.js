import "./primaryButton.css"

function PrimaryButton(props){
    return(
        <button className="primary-btn" 
                onClick={props.onClick}>
                {props.text}
        </button>
    )
}

export default PrimaryButton