export default function AlertComponent(props) {
    return (
        <alert className ={props.className} key = {props.key}>{props.text}</alert>
    );
}