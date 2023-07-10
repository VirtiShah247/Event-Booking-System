var userInfo = JSON.parse(localStorage.getItem("logged_in_user"));

var signedUserName = document.getElementById("signedHistoryUserName");
signedUserName.innerHTML = userInfo.Username;

var bookingHistoryArray = JSON.parse(localStorage.getItem("bookingHistory")).filter(x => x.ContactNo == userInfo.ContactNo);

document.getElementById("history").innerHTML = "";
if(bookingHistoryArray.length <= 0){
    document.getElementById("history").innerHTML += 'No records found';
}
else{
    for(data in bookingHistoryArray){
        document.getElementById("history").innerHTML += '<div class="card mb-3"><div class="card-body"><div class="row"><div class="col-12"><h5>' + bookingHistoryArray[data].event + '<span class="h6 font-weight-normal ml-3" style="color: gray;">' + bookingHistoryArray[data].eventType + '</span> </h5><h5 class="font-weight-normal" style="color: gray;">' + bookingHistoryArray[data].dateOfEvent + '|' + bookingHistoryArray[data].showTiming + '</h5><br><h6 class="font-weight-normal" style="color: gray;">' + bookingHistoryArray[data].eventVenue + '</h6><table class="table table-borderless"><thead><tr><th style="color: gray;" class="font-weight-normal pl-0 pb-0">Tickets</th></tr></thead><tbody><tr><td class="pl-0 pt-0 font-weight-light" style="font-size: 40px;">' + bookingHistoryArray[data].ticketCount + '</td></tr></tbody></table><hr><h5 class="font-weight-normal text-right" style="color: gray;">Amount Paid:Rs. ' + bookingHistoryArray[data].totalAmount + '</h5></div></div></div></div>';
    }
}
