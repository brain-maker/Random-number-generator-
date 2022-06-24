//selectors

const number = document.querySelector('.generate');
const btn = document.querySelector('.reset');

//functions

const generateNumber = () =>{
  const randomNumber= Math.floor(Math.random()*10+1);
  number.innerHTML=randomNumber;
}
 //eventlisteners
 
btn.addEventListener('click', generateNumber);
generateNumber();
