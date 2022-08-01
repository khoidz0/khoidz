function InputFC (props) {
    return (
        <input type={props.type} className={props.className} size={props.size ? props.size :"30"} id = {props.id} placeholder={props.placeholder}></input>
    );
}
export default InputFC;