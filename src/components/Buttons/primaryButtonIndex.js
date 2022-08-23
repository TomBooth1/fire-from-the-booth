import "./primaryButton.css"

function PrimaryButton(props){
    return(
        <button className={props.className} 
                onClick={props.onClick}>
                {props.text}
        </button>
    )
}

export default PrimaryButton