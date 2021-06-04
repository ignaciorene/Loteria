const lotteryTitle=document.getElementsByClassName("main__content__lottery-title")[0];
const lotteryPrize=document.getElementsByClassName("main__content__lottery-prize")[0];
const lotteryTicket=document.getElementsByClassName("main__content__lottery-price")[0];
const lotteryExpire=document.getElementsByClassName("main__content__lottery-expire")[0];
const lotteryPayment=document.getElementById("payment-button");
const paymentContainer=document.getElementsByClassName("main__content__payment")[0];

var premio="$ 10.000";
var ticket="$ 10";
var expireDate="1/12/2021";

function lottery(){
    const lotteryId=document.getElementById("lotteryId").value;
    
    lotteryTitle.innerHTML="Loteria "+lotteryId;
    lotteryPrize.innerHTML=premio;
    lotteryTicket.innerHTML=ticket;
    lotteryExpire.innerHTML=expireDate;
};

const newLottery=document.getElementById("newLottery-button");

newLottery.onclick = function () {
    location.href = "./new_lottery.html";
};

lotteryPayment.onclick=function(){
    paymentContainer.style.display="block";
};