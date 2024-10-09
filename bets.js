
// Load bets from local storage
window.onload = function() {
    const betsTableBody = document.getElementById('betsTable').getElementsByTagName('tbody')[0];
    
    // Retrieve bets from local storage
    const bets = JSON.parse(localStorage.getItem('bets')) || [];

    // Loop through the bets and add them to the table
    bets.forEach(bet => {
        const row = betsTableBody.insertRow();
        row.insertCell(0).innerText = bet.racecourse;
        row.insertCell(1).innerText = bet.horseNumber;
        row.insertCell(2).innerText = `$${parseFloat(bet.betAmount).toFixed(2)}`;
        row.insertCell(3).innerText = bet.betType.join(", ");
        row.insertCell(4).innerText = bet.dateTime;
    });
};
