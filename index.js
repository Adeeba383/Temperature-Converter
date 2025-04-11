
function Convert() {

const temp1 = document.getElementById("Temp1").value;
const result = document.getElementById("result");
const from = document.getElementById("drop").value;
const to = document.getElementById("down").value;
   
let temp = Number(temp1);

if (from === to) {  
      result.textContent = temp;
      return;
}

switch (from) {
      case "Celsius":
         switch (to) {
            case "Kelvin":
               temp = temp + 273.15;
               break;
            case "Fahrenheit":
               temp = (temp * 9/5) + 32;
               break;
           }
      break;

      case "Fahrenheit":
         switch (to) {
            case "Kelvin":
               temp = (temp + 459.67) * 5/9;
               break;
            case "Celsius":
               temp = (temp - 32) * 5/9;
               break;
           }
      break;

      case "Kelvin":
         switch (to) {
            case "Celsius":
               temp = temp - 273.15;
               break;
            case "Fahrenheit":
               temp = (temp * 9/5) - 459.67;
               break;
           }
         break;
   }
   
result.textContent = temp.toFixed(2);
}

function Clear(){
   document.getElementById("Temp1").value = "";
   document.getElementById("result").textContent = "Output";
}
