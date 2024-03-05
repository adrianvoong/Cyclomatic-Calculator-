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

function calculateCyclomaticComplexity(javaCode) {
    let complexity = 1;
    let regex = /if\s*\(|while\s*\(|for\s*\(|case\s*\w*\s*:|catch\s*\(|&&|\|\|/g;
    let match;

    while ((match = regex.exec(javaCode)) !== null) {
        complexity++;
    }

    return complexity;
}
