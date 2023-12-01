"use strict";

 let dayOfWeek ="Monday"
console.log(dayOfWeek)
 dayOfWeek="Friday"
 console.log(`I can't wait for ${dayOfWeek}`);

 let animalInput= prompt("What is your favorite animal?");

    

 let colorInput=prompt("What is your favorite color?");

 console.log(`I have never seen a ${colorInput} ${animalInput}`);
 // Pancakes, Salad, Pasta

  let timeOfDay="2200"
  let myFavorite="favoriteMeal"
  

 if(timeOfDay<=1200){
 console.log('{myFavorite}=$Pancakes');
  } else if(timeOfDay >= 1200 &&  timeOfDay <=1700){
    console.log('${myFavorite}=Salad');
 } else if(timeOfDay >=1700){
    console.log('${myFavorite}=Pasta');
 }
   
let number=Math.floor(Math.random() * 11);


if (number >=0 && number <=3){
    console.log("Beatles");
} else if (number >=3 && number <= 5){
    console.log("Stones");
} else if(number>=6 && number<=8){
    console.log("Floyd");
}else if (number === 9 || number === 10 ){
    console.log("Hendrix");
}

for(let i=0;i<10; i++){
console.log("JavaScript is cool!")
}