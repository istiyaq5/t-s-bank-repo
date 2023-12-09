document.getElementById('depositButton').addEventListener('click', function(){
    // Step 1: Click the button and take input by event handler
    const depositField = document.getElementById('depositInput');
    const depositInputString = depositField.value;
    const depositInput = parseFloat(depositInputString) //converted the input element in number

    // Step 2: Get the innertext from html deposit
    const depositOutputField = document.getElementById('depositOutput');
    const depositOutputString = depositOutputField.innerText;
    const depositOutput = parseFloat(depositOutputString); //converted the innertext element in number
    
    //add the values and update on html
    const currentDeposit = depositInput + depositOutput
    depositOutputField.innerText = currentDeposit
    depositField.value = ''

    //Total Calculation
    const totalOutputField= document.getElementById('totalOutput')
    const totalOutputString = totalOutputField.innerText;
    const totalOutput = parseFloat(totalOutputString)

    totalOutputField.innerText = totalOutput + currentDeposit;
})




