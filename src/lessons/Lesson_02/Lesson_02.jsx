import {animal, getPlantEaterStatus} from "./data";
import "./styles.css"
import Button from "../../components/Button/Button";
function Lesson_02() {
  console.log (animal);
  console.log(animal.fullName);
  
  return (
    <div class="lesson_02_wrapper">
    <div className="animal_card">
      <p class ="card_title">Animal card: {animal.type}</p>
    <img className="avatar"src={animal.avatarURL} alt="Animal Avatar" />
    <p className="card_info">Name: {animal.fullName}</p>
    <p className="card_info">Age: {animal.age}</p>
    <p className="card_info">Colour: {animal.color}</p>
    <p className="card_info">IsPlantEater: {getPlantEaterStatus(animal.color)}</p>
    {/* <p className="card_info">IsPlantEater: {animal.isPlanteater?"Yes":"No"}</p> */}
    <Button/>
    <Button/>
    <Button/>
    </div>
    </div>
  );
}
export default Lesson_02;
