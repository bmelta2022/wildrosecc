document.addEventListener("DOMContentLoaded", function() {
    // 35 Overs Match Schedule - Extracted from the CSV file
    const overs35Schedule = [
        { date: "05/05/2024", time: "3:00 PM", teamOne: "Wildrose Cricket Club", teamTwo: "Alpine Cricket Club", ground: "RLCG" },
        { date: "05/19/2024", time: "9:00 AM", teamOne: "Wildrose Cricket Club", teamTwo: "Calgary Eagles", ground: "ESH" },
        { date: "07/01/2024", time: "3:00 PM", teamOne: "Gujarat Lions", teamTwo: "Wildrose Cricket Club", ground: "WCG" },
        { date: "07/06/2024", time: "9:00 AM", teamOne: "Wildrose Cricket Club", teamTwo: "Alpine Cricket Club", ground: "WCG" },
        { date: "07/13/2024", time: "3:00 PM", teamOne: "Alpine Cricket Club", teamTwo: "Wildrose Cricket Club", ground: "ESH" }
        // Add more matches if necessary
    ];

    // Function to render the match schedule for a given element
    function renderSchedule(elementId, schedule) {
        const scheduleElement = document.getElementById(elementId);
        schedule.forEach(match => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${match.date}</td>
                <td>${match.time}</td>
                <td>${match.teamOne}</td>
                <td>${match.teamTwo}</td>
                <td>${match.ground}</td>
            `;
            scheduleElement.appendChild(row);
        });
    }

    // Populate 35 Over Schedule
    renderSchedule("overs35-schedule", overs35Schedule);
});
