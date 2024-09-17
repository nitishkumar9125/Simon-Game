// let gameSeq = [];
// let userSeq = [];
// let colorBox = ["blue","pink","lilac","green"];
// let h2 = document.querySelector("h2");
// let started = false;
// let level = 0;
// let highestScore = 0;
// document.addEventListener("keypress", function(){
//     if(started == false){
//         // console.log("key pressed");
//         started = true;

//         levelup();
//     }
// });
// function btnflash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     }, 250);
// }
// function levelup(){
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     let rand = Math.floor(Math.random() *3);
//     let randcolor = colorBox[rand];
//     gameSeq.push(randcolor);
//     // console.log(gameSeq);
//     let randomBtn = document.querySelector(`.${randcolor}`);
//     btnflash(randomBtn);
// }
// function check(idx){
//     if(userSeq[idx] === gameSeq[idx] ){
//         if(userSeq.length == gameSeq.length){
//             setTimeout(levelup, 1000);
//         }
//     }else{
//         highestScore = Math.max(highestScore , level);
//         h2.innerHTML = `Game Over Your Score was ${level} nad highest Score is ${highestScore}<br> Press any key to start game <br>`;
//         let body = document.querySelector("body");
//         body.style.backgroundColor = "red";
//         setTimeout(() => {
//             body.style.backgroundColor = "white";
//         }, 250);
//         started = false;
//         gameSeq = [];
//         userSeq = [];
//         level = 0;
//     }
// }
// function btnPress(){
//     let btn = this;
//     btnflash(btn);
//     userSeq.push(btn.getAttribute("id"));
//     // console.log(userSeq);
//     check(userSeq.length-1);
// }
// let btns = document.querySelectorAll(".box");
// for(btn of btns){
//     btn.addEventListener("click", btnPress)
// }

let h2 = document.querySelector("h2");
let btns = ["blue", "pink","lilac","green"];
let gameSqu = [];
let userSeq = [];
let started = false;
let level = 0;
let highestScore = 0;
document.addEventListener("keypress", ()=>{
    if(started == false){
        started = true;
        levelup();
    }
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}    

function levelup(){
    level++;
    h2.innerHTML = `Lavel ${level}.`;

    let rand = Math.floor(Math.random()*3);
    let randColor = btns[rand];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSqu.push(randColor);
    btnflash(randbtn);
}
function check(idx){
    if(userSeq[idx] === gameSqu[idx]){
        if(userSeq.length == gameSqu.length){
            setTimeout(()=>{
                levelup();
                userSeq = [];
            },750);
        }
    }else{
        highestScore = Math.max(highestScore , level);
        h2.innerHTML = `Game Over ! Your Score is ${level} And <b>highest Score is ${highestScore}<b> <br> Press Any Key to start the Game.`;
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(()=>{
            body.style.backgroundColor = "white";
        }, 250);
        started = false;
        level = 0;
        userSeq = [];
        gameSqu = [];
    }
}
function pressBtn(){
    let btn = this;
    userSeq.push(btn.getAttribute("id"));
    btnflash(btn);
    check(userSeq.length - 1);
}
let allBtn = document.querySelectorAll(".box");
for(btn of allBtn){
    btn.addEventListener("click", pressBtn);
}