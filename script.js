document.addEventListener("DOMContentLoaded", function() {
    // Sample data for highlights
    const teamRosterHighlight = [
        { name: "Player 1", role: "Batsman" },
        { name: "Player 2", role: "Bowler" }
    ];

    const matchScheduleHighlight = [
        { date: "2024-11-01", opponent: "Team Alpha", location: "Home Ground" },
        { date: "2024-11-15", opponent: "Team Beta", location: "Away" }
    ];

    const teamStatsHighlight = {
        matchesPlayed: { t20: 15, overs35: 10 },
        wins: { t20: 10, overs35: 6 },
        losses: { t20: 5, overs35: 4 }
    };

    // Populate Roster Highlights
    const rosterHighlightElement = document.getElementById("roster-highlight");
    teamRosterHighlight.forEach(player => {
        const listItem = document.createElement("li");
        listItem.textContent = `${player.name} - ${player.role}`;
        rosterHighlightElement.appendChild(listItem);
    });

    // Populate Schedule Highlights
    const scheduleHighlightElement = document.getElementById("schedule-highlight");
    matchScheduleHighlight.forEach(match => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${match.date}</td><td>${match.opponent}</td><td>${match.location}</td>`;
        scheduleHighlightElement.appendChild(row);
    });

    // Populate Stats Highlights
    const statsHighlightElement = document.getElementById("stats-highlight");
    function addStatRow(category, t20Stat, overs35Stat) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${category}</td><td>${t20Stat}</td><td>${overs35Stat}</td>`;
        statsHighlightElement.appendChild(row);
    }

    addStatRow("Matches Played", teamStatsHighlight.matchesPlayed.t20, teamStatsHighlight.matchesPlayed.overs35);
    addStatRow("Wins", teamStatsHighlight.wins.t20, teamStatsHighlight.wins.overs35);
    addStatRow("Losses", teamStatsHighlight.losses.t20, teamStatsHighlight.losses.overs35);
});
