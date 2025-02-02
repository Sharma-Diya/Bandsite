const heading = [
    "DATE", "VENUE", "LOCATION", ""
];

const shows = [
    {
        Dates: "Mon Sept 09 2024",
        Venue: "Ronald Lane",
        Location: "San Francisco, CA",
    },
    {
        Dates: "Tue Sept 17 2024 ",
        Venue: "Pier 3 East",
        Location: " San Francisco, CA",
    },
    {
        Dates: "Sat Oct 12 2024 ",
        Venue: "View Loungue",
        Location: "San Francisco, CA",
    },
    {
        Dates: "Sat Nov 16 2024",
        Venue: "Hyatt Agency",
        Location: "San Francisco, CA",
    },
    {
        Dates: "Fri Nov 29 2024",
        Venue: "Moscow Center",
        Location: "San Francisco, CA",
    },
    {
        Dates: "Wed Dec 18 2024",
        Venue: "Press Club",
        Location: "San Francisco, CA",
    },
];

const showList = document.querySelector(".show-list");

function showTitle() {
    const showTitle = document.createElement("div");
    showTitle.classList.add("show-title");
    showList.appendChild(showTitle);

    const dateTitle = document.createElement("h3");
    dateTitle.innerText = "DATE";
    dateTitle.classList.add("show-title__date");
    showTitle.appendChild(dateTitle);

    const venueTitle = document.createElement("h3");
    venueTitle.innerText = "VENUE";
    venueTitle.classList.add("show-title__venue");
    showTitle.appendChild(venueTitle);

    const locationTitle = document.createElement("h3");
    locationTitle.innerText = "LOCATION";
    locationTitle.classList.add("show-title__location");
    showTitle.appendChild(locationTitle);

    const emptyTitle = document.createElement("h3");
    emptyTitle.innerText = "";
    emptyTitle.classList.add("show-title__empty");
    showTitle.appendChild(emptyTitle);
}
showTitle();


for (let i = 0; i < shows.length; i++) {
    const showListItem = document.createElement("li");
    showListItem.classList.add("show-list__item");

    // Date Section
    const dateSection = document.createElement("div");
    dateSection.classList.add("show-list__date-section");
    showListItem.appendChild(dateSection);

    const dateLabel = document.createElement("h3");
    dateLabel.innerText = "DATE";
    dateLabel.classList.add("show-list__date-label");
    dateSection.appendChild(dateLabel);

    const showDate = document.createElement("h4");
    showDate.innerText = shows[i].Dates;
    showDate.classList.add("show-list__date");
    dateSection.appendChild(showDate);

    // Venue Section
    const venueSection = document.createElement("div");
    venueSection.classList.add("show-list__venue-section");
    showListItem.appendChild(venueSection);

    const venueLabel = document.createElement("h3");
    venueLabel.innerText = "VENUE";
    venueLabel.classList.add("show-list__venue-label");
    venueSection.appendChild(venueLabel);

    const showVenue = document.createElement("p");
    showVenue.innerText = shows[i].Venue;
    showVenue.classList.add("show-list__venue");
    venueSection.appendChild(showVenue);

    // Location Section
    const locationSection = document.createElement("div");
    locationSection.classList.add("show-list__location-section");
    showListItem.appendChild(locationSection);

    const locationLabel = document.createElement("h3");
    locationLabel.innerText = "LOCATION";
    locationLabel.classList.add("show-list__location-label");
    locationSection.appendChild(locationLabel);

    const showLocation = document.createElement("p");
    showLocation.innerText = shows[i].Location;
    showLocation.classList.add("show-list__location");
    locationSection.appendChild(showLocation);

    // Button
    const ticketButton = document.createElement("button");
    ticketButton.classList.add("show-list__button");
    ticketButton.innerHTML = "BUY TICKETS";
    showListItem.appendChild(ticketButton);

    showList.appendChild(showListItem);
}

document.querySelectorAll('.show-list__item').forEach(item => {
    item.addEventListener('click', function () {
        // Remove 'selected' class from all items
        document.querySelectorAll('.show-list__item').forEach(i => i.classList.remove('selected'));

        // Add 'selected' class to the clicked item
        this.classList.add('selected');
    });
});




