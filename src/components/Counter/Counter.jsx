//Импортируем useState из библиотеки react
import {useState} from "react";
//useState-функция hook use state
//чтобы counter перезагружался 

import Button from "../Button/Button";
import "./styles.css";
function Counter() {
    const [count, setCount]=useState(0);
    console.log(count);//массив с 2 элементами [0] - underfined
    //если передаем в скобки, то он возвращает
    const onPlus=()=>{
        setCount((prevValue)=>{return prevValue+1;});
        //prevValue = counter в момент использования 
    }
    const onMinus=()=>{
         setCount((prevValue)=>{return prevValue-1;});
        
        }
//     let count=0;
//     console.log("в теле компонента counter",count);
//   const onMinus = () => {
// count=count-1;
// console.log("on minus",count);
// // return count;
//   };
//   const onPlus = () => {
//     count=count+1;
//     console.log("onplus",count);
//     // return count;
//   };
  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}
export default Counter;