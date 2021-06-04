const prizesContainer=document.getElementsByClassName("main__content-participants")[0];
const prizesTitle=document.getElementsByClassName("main__content-title")[1];
const prizesPrize=document.getElementsByClassName("main__content-prize")[0];
const prizesExpire=document.getElementsByClassName("main__content-expire")[0];

var premio="$10.000";
var expireDate="1/12/2021";

function prize(){
    const prizeId=document.getElementById("prizeId").value;

    prizesContainer.classList.add("active");
    prizesTitle.innerHTML="Sorteo "+prizeId;
    prizesPrize.innerHTML=premio;
    prizesExpire.innerHTML=expireDate;
}


const newPrize=document.getElementById("newPrize-button");

newPrize.onclick = function () {
    location.href = "./new_prize.html";
};