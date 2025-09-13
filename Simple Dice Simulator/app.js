const btnE1=document.getElementById("rolldice");
const diceE1=document.getElementById("dice");
let historylist=[];
const rollHistoryE1=document.getElementById("roll-history");

function rollDice(){
    const rollResult=Math.floor(Math.random()*6)+1;
    console.log(rollResult);
    const diceface=getDiceface(rollResult);
    diceE1.innerHTML=diceface;
    historylist.push(rollResult);
    updateRollHistory();
}
function updateRollHistory(){
    rollHistoryE1.innerHTML="";
    for(let i=0;i<historylist.length;i++){
        const listItem=document.createElement("li");
        listItem.innerHTML=`Roll ${i+1}:<span>${getDiceface(historylist[i])}</span>`;
        rollHistoryE1.appendChild(listItem);
    }
}
function getDiceface(rollResult){
    switch (rollResult) {
        case 1:
            return "&#9856;";
            break;
    
        case 2:
            return "&#9857;";
            break;
    
        case 3:
            return "&#x2682;";
            break;
    
        case 4:
            return "&#9859;";
            break;
    
        case 5:
            return "&#9860;";
            break;
    
        case 6:
            return "&#9861;";
            break;
        default:
            return "";
            
    }

}
btnE1.addEventListener("click",()=>{
    diceE1.classList.add("roll-animation");
    setTimeout(() => {
        diceE1.classList.remove("roll-animation");
        rollDice();
    }, 1000);
})
;