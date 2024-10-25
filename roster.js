document.addEventListener("DOMContentLoaded", function() {
    // Complete Team Roster for both T20 and 35 Over matches
    const teamRoster = [
        { name: "Farhan Pervez", role: "Captain" },
        { name: "Sulman Sheikh", role: "Vice Captain & Keeper" },
        { name: "Abhinav Arora", role: "All-rounder" },
        { name: "Shahood Ahmed", role: "Bowler" },
        { name: "Rabi Arif", role: "Batsman" },
        { name: "Iqbal Usman", role: "Bowler" },
        { name: "Mahmood Bilal", role: "All-rounder" },
        { name: "Raja Shakeel", role: "Batsman" },
        { name: "Nauman Malik", role: "Bowler" },
        { name: "Kamal Sarna", role: "Batsman" },
        { name: "Shahbaz Haider", role: "Bowler" },
        { name: "Aamir Nazir", role: "Batsman" },
        { name: "Shahbaz Khattar", role: "All-rounder" },
        { name: "Khurshid Sheikh", role: "Batsman" },
        { name: "Usman Khawaja", role: "Batsman" },
        { name: "Jawad Hussain", role: "Bowler" },
        { name: "Daksh Khan Floater", role: "Batsman" },
        { name: "Abi Floater", role: "Bowler" },
        { name: "Fahad Floater", role: "All-rounder" },
        { name: "Adi Floater", role: "Bowler" }
    ];

    // Function to render the roster for a given element and players list
    function renderRoster(elementId, roster) {
        const rosterElement = document.getElementById(elementId);
        roster.forEach(player => {
            const listItem = document.createElement("li");
            listItem.textContent = `${player.name} - ${player.role}`;
            rosterElement.appendChild(listItem);
        });
    }

    // Populate T20 Roster and 35 Over Roster with the same team data
    renderRoster("t20-roster", teamRoster);
    renderRoster("overs35-roster", teamRoster);
});
