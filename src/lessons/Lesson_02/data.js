// export 

const animal = {
  type: "Tiger",
  fullName: "Marti",
  age: 10,
  color: "Orange Striped",
  isPlanteater: false,
  avatarURL:
    "https://i.pinimg.com/originals/c4/d2/a6/c4d2a6e63e12776b98001e03541b1bc3.jpg",
};
const getPlantEaterStatus=(isPlantEater)=>{
 if ( isPlantEater) {return "Yes";

 } else {
  return "No";
 }

  };
  // 2 способ : экспорт всех переменных в одном месте 
  export {animal, getPlantEaterStatus};