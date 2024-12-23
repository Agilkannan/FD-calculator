function CalculateMaturityAmount() {
    
    const Principal = parseFloat(document.getElementById('Principal').value);
    const InterestRate = parseFloat(document.getElementById('InterestRate').value);
    const Tenure = parseFloat(document.getElementById('Tenure').value);
    const InterestType = document.getElementById('InterestType').value;

    let MaturityAmount = 0;

    if (InterestType === 'simple') {
        // Simple Interest Calculation
        MaturityAmount = Principal + (Principal * InterestRate * Tenure / 100);
    }

    else if (InterestType === 'compound') {
        MaturityAmount = Principal * Math.pow((1 + InterestRate / 100), Tenure);
    }

    document.getElementById('result').innerText = `Maturity Amount: ₹${MaturityAmount.toFixed(2)}`;
}

document.getElementById('calc-btn').addEventListener('click', CalculateMaturityAmount);
