document.addEventListener("DOMContentLoaded", function() {
    const scheduleData = [
        { date: "5/5/2024", time: "3:00 PM", team: "Wildrose Cricket Club", opponent: "Alpine Cricket Club", location: "RLCG" },
        { date: "5/19/2024", time: "9:00 AM", team: "Wildrose Cricket Club", opponent: "Calgary Eagles", location: "ESH" },
        { date: "7/1/2024", time: "3:00 PM", team: "Gujarat Lions", opponent: "Wildrose Cricket Club", location: "WCG" },
        { date: "7/6/2024", time: "9:00 AM", team: "Wildrose Cricket Club", opponent: "Alpine Cricket Club", location: "WCG" },
        { date: "7/13/2024", time: "3:00 PM", team: "Alpine Cricket Club", opponent: "Wildrose Cricket Club", location: "ESH" },
        { date: "7/21/2024", time: "3:00 PM", team: "Calgary Eagles", opponent: "Wildrose Cricket Club", location: "RLCG" },
        { date: "7/27/2024", time: "3:00 PM", team: "Wildrose Cricket Club", opponent: "Markhor", location: "WCG" },
        { date: "8/5/2024", time: "3:00 PM", team: "Markhor", opponent: "Wildrose Cricket Club", location: "WCG" },
        { date: "8/10/2024", time: "9:00 AM", team: "Wildrose Cricket Club", opponent: "Gujarat Lions", location: "ESH" },
        { date: "9/1/2024", time: "3:00 PM", team: "Markhor", opponent: "Wildrose Cricket Club", location: "WCG" },
        { date: "9/29/2024", time: "10:00 AM", team: "Calgary Eagles", opponent: "Wildrose Cricket Club", location: "ESH" },
        { date: "10/5/2024", time: "10:00 AM", team: "Gujarat Lions", opponent: "Wildrose Cricket Club", location: "ESH" }
    ];

    const scheduleTable = document.getElementById("schedule-table");

    scheduleData.forEach(match => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${match.date}</td>
            <td>${match.time}</td>
            <td>${match.team}</td>
            <td>${match.opponent}</td>
            <td>${match.location}</td>
        `;
        scheduleTable.appendChild(row);
    });
});