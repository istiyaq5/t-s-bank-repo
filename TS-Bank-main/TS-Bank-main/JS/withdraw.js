document.getElementById('withdrawButton').addEventListener('click', function () {
    // Step 1: Click the button and take input by event handler
    const withdrawField = document.getElementById('withdrawInput');
    const withdrawInputString = withdrawField.value;
    const withdrawInput = parseFloat(withdrawInputString) //converted the input element in number

    // Step 2: Get the innertext from html deposit
    const withdrawOutputField = document.getElementById('withdrawOutput');
    const withdrawOutputString = withdrawOutputField.innerText;
    const withdrawOutput = parseFloat(withdrawOutputString); //converted the innertext element in number

    //add the values and update on html
    const currentwithdraw = withdrawInput + withdrawOutput
    withdrawOutputField.innerText = currentwithdraw
    withdrawField.value = ''

    //Total Calculation
    const totalOutputField = document.getElementById('totalOutput')
    const totalOutputString = totalOutputField.innerText;
    const totalOutput = parseFloat(totalOutputString)

    totalOutputField.innerText = totalOutput - currentwithdraw;
    if (withdrawOutputField.innerText < totalOutputField.innerText) {
        totalOutputString = totalOutput
    }
    else {
        alert('u dont have enough balance');

    }
})