// >>>>>>>> DEFINICION DE ELEMENTOS 

const astronaut=document.querySelector('.astronaut');

const space=document.querySelector('#space');

const btnmove=document.querySelector('.button');

const btncolor=document.querySelector(".colorBtn");

const btnfloat=document.querySelector('.floatBtn');

// >>>>>>>> DEFINICION DE METODOS 

function Mover_Uno (){
    astronaut.style.left = "700px";
    astronaut.style.transform= "Scale(0.6)";
};

function Mover_Dos (){
    astronaut.style.left = "0";
    astronaut.style.transform= "Scale(1.2)";
    astronaut.style.top= 'auto';
};

function Flotar (){
    astronaut.style.top= '10px';
};

function CambiarFondo (){
    space.style.background="#420a8d"
};

function VolverNegro (){
    space.style.background="#000000"
};

// >>>>>>>> DEFINICION DE EVENTOS 

btnmove.addEventListener('click',()=>{
        Mover_Dos ()
});

btnmove.addEventListener('dblclick',()=>{
    Mover_Uno()
});

btncolor.addEventListener('click',()=>{
    CambiarFondo ()
});

btncolor.addEventListener('dblclick',()=>{
    VolverNegro ()
});

btnfloat.addEventListener('click',()=>{
    Flotar ()
});

window.addEventListener('keydown',(event)=>{
    if (event.key == ' '){
        Mover_Uno()
    }

    if (event.key == 'Enter'){
        alert('Hello Space!');
    }

    if (event.key == 'r' || event.key == 'R'){
        alert('NO FUNCIONA MOVE');
        btnmove.removeEventListener('click', myFunction);
    }
});