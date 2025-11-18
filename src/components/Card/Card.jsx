import "./styles.css";
// import {card} from "./data";

// function Card(props){
function Card({firstName,lastName,job,hobby,avatar}) {
    // console.log(props);
    // const{firstName,lastName,job,hobby,avatar}=props;
// const{Name,Surname,Profession,Hobby,avatar}=card;
return ( 
<div class="card">

<img className="avatar" src={avatar} alt="Здесь фотка " />
<div className="name"> Name:{firstName}</div>
<div className="surname">Surname: {lastName}</div>

<div className="profession">Profession: {job} </div>
<div className="hobby">Hobby: {hobby} </div>
</div>
);
}
export default Card;
