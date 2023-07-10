var eventsArray = JSON.parse(localStorage.getItem("Events"));
var eventDetails = eventsArray.filter(x => x.Id.toString() == localStorage.getItem("bookEventId").toString());

var eventNameDiv = document.getElementById("eventName");
eventNameDiv.innerHTML = eventDetails[0].Name;

var eventSubDetailsDiv = document.getElementById("eventSubDetails");
eventSubDetailsDiv.innerHTML = eventDetails[0].SubCategory + ' | ' + eventDetails[0].Language + ' | ' + eventDetails[0].AgeGroup;

var eventTimeDetailsDiv = document.getElementById("eventTime");
eventTimeDetailsDiv.innerHTML = 'On ' + eventDetails[0].DateOfEvents + ' at ' + eventDetails[0].Time;

var eventPriceDiv = document.getElementById("eventVenue");
eventPriceDiv.innerHTML = eventDetails[0].Venue + ' | Rs.' + eventDetails[0].TicketPrice;

var eventTotalTickDiv = document.getElementById("eventTickets");
eventTotalTickDiv.innerHTML = 'Total tickets: ' + localStorage.getItem("noOfSeatsSelected");

var eventTotalDiv = document.getElementById("eventTotal");
eventTotalDiv.innerHTML = 'Amount Payable: Rs.' + (parseInt(localStorage.getItem("noOfSeatsSelected")) * eventDetails[0].TicketPrice)

function cancelBooking(){
    // var currentPage = window.location.href;
    var isCancel = confirm("Are you sure, you want to cancel booking?")
    if(isCancel){
        localStorage.removeItem("bookEventId")
        localStorage.removeItem("noOfSeatsSelected")
        window.location.href = 'file:///D:/Virti%20Program/EBS/EBS/index.html'
    }
}

function doBooking(){
    // var currentPage = window.location.href;
    var userInfo = JSON.parse(localStorage.getItem("logged_in_user"));

    eventDetails[0].TotalTickets = eventDetails[0].TotalTickets - parseInt(localStorage.getItem("noOfSeatsSelected"))

    alert("Successfully completed booking!!");

    if(!localStorage.getItem("bookingHistory")){
        var bookingData = '{"dateOfEvent": "' + eventDetails[0].DateOfEvents.toString() + '", "Username" : "' + userInfo.Username.toString() + '", "ContactNo": "' + userInfo.ContactNo.toString() + '","event": "' + eventDetails[0].Name.toString() +'", "eventType": "' + eventDetails[0].SubCategory.toString() + '", "eventVenue": "' + eventDetails[0].Venue.toString() + '", "showTiming": "' + eventDetails[0].Time.toString() + '", "ticketCount": "' + localStorage.getItem("noOfSeatsSelected").toString() + '", "ticketPrice": "' + eventDetails[0].TicketPrice + '", "totalAmount": "' + (eventDetails[0].TicketPrice * parseInt(localStorage.getItem("noOfSeatsSelected"))) + '"}';
        localStorage.setItem("bookingHistory", '[' + bookingData + ']');
    }
    else{
        var bookingHistoryArray = JSON.parse(localStorage.getItem("bookingHistory"));
        var bookingData = '{"dateOfEvent": "' + eventDetails[0].DateOfEvents.toString() + '", "Username" : "' + userInfo.Username.toString() + '", "ContactNo": "' + userInfo.ContactNo.toString() + '","event": "' + eventDetails[0].Name.toString() +'", "eventType": "' + eventDetails[0].SubCategory.toString() + '", "eventVenue": "' + eventDetails[0].Venue.toString() + '", "showTiming": "' + eventDetails[0].Time.toString() + '", "ticketCount": "' + localStorage.getItem("noOfSeatsSelected").toString() + '", "ticketPrice": "' + eventDetails[0].TicketPrice + '", "totalAmount": "' + (eventDetails[0].TicketPrice * parseInt(localStorage.getItem("noOfSeatsSelected"))) + '"}';
        bookingHistoryArray.push(JSON.parse(bookingData));
        localStorage.setItem("bookingHistory", JSON.stringify(bookingHistoryArray));
    }
    localStorage.setItem("Events", JSON.stringify(eventsArray));
    localStorage.removeItem("bookEventId")
    localStorage.removeItem("noOfSeatsSelected")
    window.location.href = 'file:///D:/Virti%20Program/EBS/EBS/booking-history.html'
}
