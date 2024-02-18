const urlParams = new URLSearchParams(window.location.search);
const section = urlParams.get('section');
const subject = urlParams.get('subject');

const testInputs = document.querySelector(".test-inputs");
for (let i = 1; i <= 5; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.className = "test-input";
    input.placeholder = `Test ${i} (${subject})`;
    input.min = 0;
    input.max = 100;
    testInputs.appendChild(document.createTextNode(`Test ${i}: `));
    testInputs.appendChild(input);
}

function calculateInternal() {
    const inputs = document.querySelectorAll(".test-input");
    let totalMarks = 0;
    inputs.forEach(input => {
        totalMarks += parseInt(input.value) || 0;
    });
    const internalMark = totalMarks / 5; // Assuming each test is out of 100
    const internalMarkDiv = document.getElementById("internalMark");
    internalMarkDiv.textContent = `Your internal mark for ${subject} is ${internalMark.toFixed(2)}`;
}
