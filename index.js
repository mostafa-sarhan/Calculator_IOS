const buttons = document.querySelectorAll(".container button");
const input = document.querySelector(".container input");

let result = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerHTML;

        if (value === "=") {
            // Evaluate the result and display it
            try {
                result = eval(result); // Evaluate the expression
                input.value = result; // Display the result
            } catch {
                input.value = "Error"; // Handle invalid expressions
                result = ""; // Reset the result
            }
        }else if(value === "AC"){
            result = ""
            input.value = result;
        }
        else if(value === "DEL"){
            result = result.slice(0, -1); // Remove the last character
            input.value = result;
        }
        else {
            // Append the value to the result
            result += value;
            input.value = result;
        }
    });
});




