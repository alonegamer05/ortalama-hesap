function calculate() {
    const credits = [7, 10, 7, 6, 8, 6, 8];
    const grades = [
        parseFloat(document.getElementById('grade1').value),
        parseFloat(document.getElementById('grade2').value),
        parseFloat(document.getElementById('grade3').value),
        parseFloat(document.getElementById('grade4').value),
        parseFloat(document.getElementById('grade5').value),
        parseFloat(document.getElementById('grade6').value),
        parseFloat(document.getElementById('grade7').value)
    ];

    let totalCredits = 0;
    let weightedSum = 0;
    
    for (let i = 0; i < grades.length; i++) {
        totalCredits += credits[i];
        weightedSum += grades[i] * credits[i];
    }

    const committeeAverage = weightedSum / totalCredits;
    const committeeContribution = committeeAverage * 0.6;
    const finalNeeded = (60 - committeeContribution) / 0.4;

    document.getElementById('result').innerText = `Final sınavından geçmek için almanız gereken minimum not: ${finalNeeded.toFixed(2)}`;
}
