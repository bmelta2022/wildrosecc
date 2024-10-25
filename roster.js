document.addEventListener("DOMContentLoaded", function() {
    // Players for both T20 and 35 Overs, from the Excel data
    const sharedRoster = [
        { name: "Shahbaz Khattar", team: "Wildrose Cricket Club" },
        { name: "Shahood Ahmed", team: "Wildrose Cricket Club" },
        { name: "Rabi Arif", team: "Wildrose Cricket Club" },
        { name: "Iqbal Usman", team: "Wildrose Cricket Club" },
        { name: "Mahmood Bilal", team: "Wildrose Cricket Club" },
        { name: "Raja Shakeel", team: "Wildrose Cricket Club" },
        { name: "Nauman Malik", team: "Wildrose Cricket Club" },
        { name: "Kamal Sarna", team: "Wildrose Cricket Club" },
        { name: "Shahbaz Haider", team: "Wildrose Cricket Club" },
        { name: "Sulman Sheikh", team: "Wildrose Cricket Club" },
        { name: "Aamir Nazir", team: "Wildrose Cricket Club" },
        { name: "Farhan Pervez", team: "Wildrose Cricket Club" },
        { name: "Khurram Jarral", team: "Wildrose Cricket Club" },
        { name: "Abhinav Arora", team: "Wildrose Cricket Club" },
        { name: "Sultan Sheikh", team: "Wildrose Cricket Club" },
        { name: "Khurshid Sheikh", team: "Wildrose Cricket Club" },
        { name: "Karan Baath", team: "Wildrose Cricket Club" },
        { name: "Usman Khawaja", team: "Wildrose Cricket Club" },
        { name: "Jawad Hussain", team: "Wildrose Cricket Club" },
        { name: "Daksh Khan Floater", team: "Wildrose Cricket Club" },
        { name: "Abi Floater", team: "Wildrose Cricket Club" },
        { name: "Fahad Floater", team: "Wildrose Cricket Club" },
        { name: "Adi Floater", team: "Wildrose Cricket Club" }
    ];

    // Function to render the roster for a given element and players list
    function renderRoster(elementId, roster) {
        const rosterElement = document.getElementById(elementId);
        roster.forEach(player => {
            const listItem = document.createElement("li");
            listItem.textContent = `${player.name} - ${player.team}`;
            rosterElement.appendChild(listItem);
        });
    }

    // Populate T20 Roster with the shared roster data
    renderRoster("t20-roster", sharedRoster);

    // Populate 35 Over Roster with the shared roster data
    renderRoster("overs35-roster", sharedRoster);
});
