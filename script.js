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

function calculateComplexity() {
    const code = document.getElementById('codeInput').value;
    const complexity = calculateCyclomaticComplexity(code);
    document.getElementById('codeOutput').innerHTML = `<p>Cyclomatic Complexity: ${complexity}</p>`;
}

function calculateCyclomaticComplexity(jscode) {
    let complexity = 1; // Start with 1 for the main function

    // Split  code into lines
    const lines = jscode.split('\n');

    // Iterate over line
    lines.forEach(line => {
        // Check if the line contains any decision points
        if (line.includes('if') || line.includes('else') || line.includes('case') || line.includes('default') || line.includes('for') || line.includes('while') || line.includes('&&') || line.includes('||')) {
            complexity++;
        }
    });

    return complexity;
}
