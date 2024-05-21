let gameseq=[];
let userseq=[];

let btns = ["yellow" , "red", "purple", "green"];

let started = false;
let level = 0;

let h2=document.querySelector("h2");
let h3 =document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash")
    }, 300);
}



function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);
}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 350);
        }
    }  else{
            h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> press any key to continue`;
            h3.innerHTML=`Previous Score :${level}`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function() {
                document.querySelector("body").style.backgroundColor="white";
            }, 250);
            reset();
            }    
}

function btnpress(){
   let btn = this;
   userFlash(btn);
   userColor = btn.getAttribute("id");
   userseq.push(userColor);
   checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnpress);
}


function reset(){
    started = false;
    gameseq=[];
    userseq=[];
    level=0;
}



















