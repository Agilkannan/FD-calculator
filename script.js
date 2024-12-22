function CalculateMaturityAmount() {

    const Principal = parseFloat(document.getElementById('Principal').value);
    const InterestRate = parseFloat(document.getElementById('InterestRate').value);
    const Tenure = parseFloat(document.getElementById('Tenure').value);

    const MaturityAmount = Principal + (Principal * InterestRate * Tenure / 100);

    document.getElementById('result').innerText = `Maturity Amount: ${MaturityAmount.toFixed(2)}`;
}

document.getElementById('calc-btn').addEventListener('click', CalculateMaturityAmount);
