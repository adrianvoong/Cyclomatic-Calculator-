function calculateCyclomaticComplexityJS(input) {
    // Count the number of decision points (if, switch, for, while, ||, &&)
    // Cyclomatic complexity = E - N + 2P

    const jsCode = typeof input === 'string' ? input : input.value;

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
    

}
    