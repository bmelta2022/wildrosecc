document.addEventListener("DOMContentLoaded", function() {
    // Complete Team Roster with player numbers
    const teamRoster = [
        { number: 1, name: "Farhan Pervez", role: "Captain" },
        { number: 2, name: "Sulman Sheikh", role: "Vice Captain & Keeper" },
        { number: 3, name: "Abhinav Arora", role: "All-rounder" },
        { number: 4, name: "Shahood Ahmed", role: "Bowler" },
        { number: 5, name: "Rabi Arif", role: "Batsman" },
        { number: 6, name: "Iqbal Usman", role: "Bowler" },
        { number: 7, name: "Mahmood Bilal", role: "All-rounder" },
        { number: 8, name: "Raja Shakeel", role: "Batsman" },
        { number: 9, name: "Nauman Malik", role: "Bowler" },
        { number: 10, name: "Kamal Sarna", role: "Batsman" },
        { number: 11, name: "Shahbaz Haider", role: "Bowler" },
        { number: 12, name: "Aamir Nazir", role: "Batsman" },
        { number: 13, name: "Shahbaz Khattar", role: "All-rounder" },
        { number: 14, name: "Khurshid Sheikh", role: "Batsman" },
        { number: 15, name: "Usman Khawaja", role: "Batsman" },
        { number: 16, name: "Jawad Hussain", role: "Bowler" },
        { number: 17, name: "Daksh Khan Floater", role: "Batsman" },
        { number: 18, name: "Abi Floater", role: "Bowler" },
        { number: 19, name: "Fahad Floater", role: "All-rounder" },
        { number: 20, name: "Adi Floater", role: "Bowler" }
    ];

    // Function to render the roster as a table with columns for number, name, and role
    function renderRoster(elementId, roster) {
        const rosterElement = document.getElementById(elementId).querySelector("tbody");
        roster.forEach(player => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${player.number}</td>
                <td>${player.name}</td>
                <td>${player.role}</td>
            `;
            rosterElement.appendChild(row);
        });
    }

    // Populate T20 and 35 Over Rosters with the same team data
    renderRoster("t20-roster", teamRoster);
    renderRoster("overs35-roster", teamRoster);
});
