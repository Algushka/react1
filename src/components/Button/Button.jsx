import "./styles.css";
// function Button({name="Send"}) - Send будет по умолчанию 
function Button ({name})
{
    
return <button className="button_component">{name}</button>;



}
export default Button;