document.addEventListener("DOMContentLoaded", function() {
    // Batting stats data
    const battingStats = [
        { name: "Aamir Nazir", matches: 12, inns: 12, runs: 424, avg: 38.55, sr: 118.77, hs: 128, hundreds: 2, fifties: 1 },
        { name: "Farhan Pervez", matches: 12, inns: 11, runs: 275, avg: 27.50, sr: 70.69, hs: 69, hundreds: 0, fifties: 2 },
        { name: "Abhinav Arora", matches: 10, inns: 10, runs: 251, avg: 27.89, sr: 102.03, hs: 76, hundreds: 0, fifties: 3 },
    ];

    // Bowling stats data
    const bowlingStats = [
        { name: "Abhinav Arora", matches: 10, overs: 51.0, wickets: 20, best: "37/4", econ: 4.71, avg: 12.00, sr: 15.3 },
        { name: "Farhan Pervez", matches: 12, overs: 70.1, wickets: 18, best: "21/3", econ: 5.16, avg: 20.11, sr: 23.4 },
        { name: "Aamir Nazir", matches: 12, overs: 61.1, wickets: 15, best: "20/3", econ: 5.46, avg: 22.27, sr: 24.5 },
    ];

    // Function to render batting stats in table
    function renderBattingStats() {
        const tableBody = document.getElementById("batting-stats");
        battingStats.forEach(player => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.matches}</td>
                <td>${player.inns}</td>
                <td>${player.runs}</td>
                <td>${player.avg}</td>
                <td>${player.sr}</td>
                <td>${player.hs}</td>
                <td>${player.hundreds}</td>
                <td>${player.fifties}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Function to render bowling stats in table
    function renderBowlingStats() {
        const tableBody = document.getElementById("bowling-stats");
        bowlingStats.forEach(player => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.matches}</td>
                <td>${player.overs}</td>
                <td>${player.wickets}</td>
                <td>${player.best}</td>
                <td>${player.econ}</td>
                <td>${player.avg}</td>
                <td>${player.sr}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Render the stats tables
    renderBattingStats();
    renderBowlingStats();

    // Generate charts for batting and bowling using Chart.js
    const ctxBatting = document.getElementById('battingChart').getContext('2d');
    const ctxBowling = document.getElementById('bowlingChart').getContext('2d');

    // Batting chart
    new Chart(ctxBatting, {
        type: 'bar',
        data: {
            labels: battingStats.map(player => player.name),
            datasets: [
                {
                    label: 'Runs',
                    data: battingStats.map(player => player.runs),
                    backgroundColor: 'rgba(0, 123, 255, 0.5)',
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Average',
                    type: 'line',
                    data: battingStats.map(player => player.avg),
                    borderColor: 'rgba(40, 167, 69, 1)',
                    fill: false
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Bowling chart
    new Chart(ctxBowling, {
        type: 'bar',
        data: {
            labels: bowlingStats.map(player => player.name),
            datasets: [
                {
                    label: 'Wickets',
                    data: bowlingStats.map(player => player.wickets),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Average',
                    type: 'line',
                    data: bowlingStats.map(player => player.avg),
                    borderColor: 'rgba(255, 159, 64, 1)',
                    fill: false
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
