document.addEventListener("DOMContentLoaded", function() {
    const battingStats = [
        { name: "Aamir Nazir", matches: 12, inns: 12, runs: 424, avg: 38.55, sr: 118.77, hs: 128 },
        { name: "Farhan Pervez", matches: 12, inns: 11, runs: 275, avg: 27.50, sr: 70.69, hs: 69 },
        { name: "Abhinav Arora", matches: 10, inns: 10, runs: 251, avg: 27.89, sr: 102.03, hs: 76 }
    ];

    const bowlingStats = [
        { name: "Abhinav Arora", matches: 10, overs: 51.0, wickets: 20, best: "37/4", econ: 4.71, avg: 12.00 },
        { name: "Farhan Pervez", matches: 12, overs: 70.1, wickets: 18, best: "21/3", econ: 5.16, avg: 20.11 },
        { name: "Aamir Nazir", matches: 12, overs: 61.1, wickets: 15, best: "20/3", econ: 5.46, avg: 22.27 }
    ];

    function renderStats(elementId, stats, type) {
        const statsElement = document.getElementById(elementId);
        stats.forEach(player => {
            const row = document.createElement("tr");
            if (type === "batting") {
                row.innerHTML = `
                    <td>${player.name}</td>
                    <td>${player.matches}</td>
                    <td>${player.inns}</td>
                    <td>${player.runs}</td>
                    <td>${player.avg}</td>
                    <td>${player.sr}</td>
                    <td>${player.hs}</td>
                `;
            } else if (type === "bowling") {
                row.innerHTML = `
                    <td>${player.name}</td>
                    <td>${player.matches}</td>
                    <td>${player.overs}</td>
                    <td>${player.wickets}</td>
                    <td>${player.best}</td>
                    <td>${player.econ}</td>
                    <td>${player.avg}</td>
                `;
            }
            statsElement.appendChild(row);
        });
    }

    renderStats("batting-stats", battingStats, "batting");
    renderStats("bowling-stats", bowlingStats, "bowling");
});
