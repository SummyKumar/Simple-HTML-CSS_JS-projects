const buttonsE1=document.querySelectorAll('button');
const inputE1=document.getElementById('result');
let isLocked=false;
console.log(buttonsE1);

for(let i=0;i<buttonsE1.length;i++){
    buttonsE1[i].addEventListener("click",()=>{
        console.log(`value :`,buttonsE1[i].textContent);
        const buttonValue=buttonsE1[i].textContent;
        if (buttonValue === "C") {
          clearResult();
          return;
        }

        

        if (buttonValue === "=") {
          calculateResult();
        } else {
          appendValue(buttonValue);
        }
    });
}
function clearResult(){
    inputE1.value="";
    isLocked = false; // 🔓 Unlock
}
function calculateResult(){
    inputE1.value=eval(inputE1.value);
    
}

function appendValue(buttonValue){
    inputE1.value=inputE1.value+buttonValue;
}