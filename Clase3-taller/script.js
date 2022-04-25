const astronaut = document.querySelector('.astronaut');
const button = document.querySelector(".button");
const colorBtn = document.querySelector(".colorBtn");
const spaceDiv = document.querySelector("#space");

//handler function

const smaller = ()=>{
    astronaut.style.transform='scale(0.6)'
}

const bigger =()=>{
    astronaut.style.transform = "scale(1.2)";
}

const move = () => {
  astronaut.style.left = "700px";
  smaller();
};

const goBack =()=>{
    astronaut.style.left = "0px";
    bigger();
}


const space =()=>{
    spaceDiv.style.backgroundColor = "#420a8d";
}

const spaceOut = () => {
  spaceDiv.style.backgroundColor = "#000";
};

const float =()=>{ 
     astronaut.style.top = "10px";
     bigger();
}
//Eventos directamente en el elemento => no es la mas recomendable
/* button.onclick = move; */

//AddEventListener

/* button.addEventListener('click', move); */
button.addEventListener('mousedown',move);
button.addEventListener("mouseup", goBack);
colorBtn.addEventListener("mousedown", space); 


document.addEventListener('keydown',move);
document.addEventListener("keyup", float);

window.addEventListener("keydown", (event)=>{
    if (event.key =="Enter") {
        alert("Hello Space!"); 
    }
})



//Remover evento

    window.addEventListener("keydown", (event) => {
      if (event.key == "r") {
         button.removeEventListener("mousedown", move);
         button.removeEventListener("mouseup", goBack);
      }
    });
    



