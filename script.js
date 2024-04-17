function handleFile() {
    const fileInput = document.getElementById('fileInput');
    const fileOutput = document.getElementById('fileOutput');
    
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const contents = event.target.result;
        fileOutput.innerHTML = `<p>File uploaded: ${file.name}</p>`;
        document.getElementById('codeInput').value = contents;
    };

    reader.readAsText(file);
}

function startCalculation() {
    const code = document.getElementById('codeInput').value;
    const complexity = calculateCyclomaticComplexity(code);
    document.getElementById('codeOutput').innerHTML = `<p id="cc">Cyclomatic Complexity: ${complexity}</p>`;
    const ccVar = document.getElementById('cc'); 
    if (complexity <= 4) {
        ccVar.style.color = 'green';
    }
    else if (complexity >= 5 && complexity <= 7) {
        ccVar.style.color = 'purple';
    }
    else if (complexity >= 8 && complexity <= 10) {
        ccVar.style.color = 'orange';
    }
    else if (complexity >= 11) {
        ccVar.style.color = 'red';
    }
}

function calculateCyclomaticComplexity(jscode) {
    let complexity = 1; // Start with 1 for the main function

    // Split  code into lines
    const lines = jscode.split('\n');

    // Iterate over line
    lines.forEach(line => {
        // Check if the line contains any decision points
        if (line.includes('if') || line.includes('else') || line.includes('case') || line.includes('default') 
            || line.includes('for') || line.includes('while') || line.includes('&&') || line.includes('||')) {
            complexity++;
        }
    });

    return complexity;
}

if (localStorage.getItem("loginConfirmed")) {
    localStorage.removeItem("loginConfirmed");
    document.getElementById("loggedIn").innerHTML = "Confirmed";
}
else if (document.getElementById("loggedIn").innerHTML == "") {
    window.location.href = "loginPage.html";
}
else {}
