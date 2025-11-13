import "./styles.css";
import {card} from "./data";

function Card(){

return ( 
<div class="card">

<img className="avatar" src={card.avatarURL} alt="Здесь фотка " />
<div className="name"> Name:{card.Name}</div>
<div className="surname">Surname:{card.Surname} </div>

<div className="profession">Profession: {card.Profession} </div>
<div className="hobby">Hobby: {card.Hobby} </div>
</div>
);
}
export default Card;
