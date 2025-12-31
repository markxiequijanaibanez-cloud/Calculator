 
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");


 
let current = "";
let operator = "";
let previous = "";


 
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;


  
    if (value === "C") {
      current = "";
      previous = "";
      operator = "";
      display.textContent = "0";
      return;
    }

 
    if (["+", "−", "×", "÷"].includes(value)) {
      operator = value;
      previous = current;
      current = "";
      return;
    }


    
    if (value === "=") {
      let result = 0;
      const a = parseFloat(previous);
      const b = parseFloat(current);

      if (operator === "+") result = a + b;
      if (operator === "−") result = a - b;
      if (operator === "×") result = a * b;
      if (operator === "÷") result = b !== 0 ? a / b : "Error";

      display.textContent = result;
      current = result.toString();
      operator = "";
      return;
    }


     
    current += value;
    display.textContent = current;
  });
});
