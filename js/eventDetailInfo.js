var queryStr = window.location.search.substr(1).split('&');

var eventNameArr = queryStr[0].split('=');
var eventName = eventNameArr[1];

var eventIdArr = queryStr[1].split('=');
var eventId = eventIdArr[1];

var eventsArray = JSON.parse(localStorage.getItem("Events"));
var eventDetails = eventsArray.filter(x => x.Category == eventName && x.Id.toString() == eventId.toString());

var eventDetailsDiv = document.getElementById("bigImg");
eventDetailsDiv.src = eventDetails[0].BigImgUrls;

var eventNameDiv = document.getElementById("eventName");
eventNameDiv.innerHTML = eventDetails[0].Name;

var eventSubDetailsDiv = document.getElementById("eventSubDetails");
eventSubDetailsDiv.innerHTML = eventDetails[0].SubCategory + ' | ' + eventDetails[0].Language + ' | ' + eventDetails[0].AgeGroup;

var eventTimeDetailsDiv = document.getElementById("eventTimeDetails");
eventTimeDetailsDiv.innerHTML = eventDetails[0].DateOfEvents + ' at ' + eventDetails[0].Time;

var eventPriceDiv = document.getElementById("eventPrice");
eventPriceDiv.innerHTML = eventDetails[0].Venue + ' | Rs.' + eventDetails[0].TicketPrice;

var eventAboutDiv = document.getElementById("eventAbout");
eventAboutDiv.innerHTML = eventDetails[0].About;

var eventTotalTickDiv = document.getElementById("eventTotalTick");
eventTotalTickDiv.innerHTML = 'Available: ' + eventDetails[0].TotalTickets + ' Tickets';

var eventTickDiv = document.getElementById("eventTick");
eventTickDiv.innerHTML = 'Rs.' + eventDetails[0].TicketPrice;

function doLogin(){
    if(!localStorage.getItem("logged_in_user")){
        alert("Please login to book your show");
    }
    else if(eventDetails[0].TotalTickets < parseInt(document.getElementById("seatSelect").value)){
        alert("Tickets are not available!");
    }
    else{
        // var currentPage = window.location.href;
        window.location.href = 'confirm-event.html'
        localStorage.setItem("bookEventId", eventId);
        localStorage.setItem("noOfSeatsSelected", parseInt(document.getElementById("seatSelect").value))
    }
}
