document.addEventListener("DOMContentLoaded", function() {
    // 35 Over Match Schedule
    const overs35Schedule = [
        { date: "2024-11-01", opponent: "Team Alpha", location: "Home Ground" },
        { date: "2024-11-15", opponent: "Team Beta", location: "Away" },
        { date: "2024-12-05", opponent: "Team Gamma", location: "Home Ground" }
        // Add additional matches as needed
    ];

    // T20 Match Schedule
    const t20Schedule = [
        { date: "2024-11-03", opponent: "Team Delta", location: "Home Ground" },
        { date: "2024-11-18", opponent: "Team Epsilon", location: "Away" },
        { date: "2024-12-07", opponent: "Team Zeta", location: "Home Ground" }
        // Add additional matches as needed
    ];

    // Function to render schedule data into tables
    function renderSchedule(elementId, schedule) {
        const scheduleElement = document.getElementById(elementId).querySelector("tbody");
        schedule.forEach(match => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${match.date}</td>
                <td>${match.opponent}</td>
                <td>${match.location}</td>
            `;
            scheduleElement.appendChild(row);
        });
    }

    // Populate 35 Over and T20 Schedules
    renderSchedule("overs35-schedule", overs35Schedule);
    renderSchedule("t20-schedule", t20Schedule);
});
