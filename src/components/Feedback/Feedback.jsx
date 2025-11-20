import {useState} from "react";
import Button from "../Button/Button";
import "./styles.css";
function Feedback (){
const [countLikes, setCount]=useState(0);
const [countDislikes, setCount1]=useState(0);
const onPlusLikes=()=>{
setCount(((prevcounter)=>{return prevcounter+1;}))

}
const onPlusDislikes=()=>{
setCount1(((prevcounter)=>{return prevcounter+1;}))

}

const onZero=()=>{
    setCount(((prevcounter)=>{return prevcounter=0;}))
 setCount1(((prevcounter)=>{return prevcounter=0;}))


   
}

return (
<div className="feedback_wrapper">
 <div className="button_control">
<Button name="Like" onClick={onPlusLikes}/>
<div className="feedback">{countLikes}</div>
</div>
<div className="button_control">
 <Button name="Disike" onClick={onPlusDislikes}/>
 <div className="feedback">{countDislikes}</div>
 </div>
<div className="button_control">
<Button name="Reset" onClick={onZero}/>

</div>
</div>
);



   
}
export default Feedback;