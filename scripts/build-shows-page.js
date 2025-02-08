import { BandSiteApi } from './band-site-api.js';

const apiKey = "9f3187be-cf12-43b4-89d1-cfdc2094e8cb";
const bandsiteApi = new BandSiteApi(apiKey);
const showList = document.querySelector(".show-list");

async function showsDesc(){
    const shows = await bandsiteApi.getShows();
    
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
        const date = new Date(shows[i].date);
        showDate.innerText = date.toLocaleString("en-US",{
            weekday: "short", 
            month: "short",
            day: "2-digit",
            year: "numeric"
        }).replace(/,/g, '');
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
        showVenue.innerText = shows[i].place;
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
        showLocation.innerText = shows[i].location;
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
            document.querySelectorAll('.show-list__item').forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}
showsDesc();

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



