
        document.getElementById("outdoorEvents").innerHTML = "";
        document.getElementById("laughterTherapy").innerHTML = "";
        document.getElementById("playsSlider").innerHTML = "";
        document.getElementById("topSports").innerHTML = "";
        document.getElementById("funActivities").innerHTML = "";
        var eventsArray = JSON.parse(localStorage.getItem("Events"));
        for(data in eventsArray){
            if(eventsArray[data].Category == "Outdoor")
            {
                document.getElementById("outdoorEvents").innerHTML += '<div class="col-6 col-md-4 col-lg-3 mb-2"><div><div class="slide-content"><a href="event-details.html?event=Outdoor&id=' + eventsArray[data].Id + '" class="text-decoration-none"><img src="' + 
                eventsArray[data].ImgUrls + '" alt="" loading="lazy" class="w-100 rounded"><h6 style="color: black;" class="pt-3">' 
                + eventsArray[data].Name +'</h6><h6 class="text-muted font-weight-normal d-none d-lg-block">' 
                + eventsArray[data].Venue + '</h6></a></div></div></div>';
            }
            else if(eventsArray[data].Category == "Comedy"){
            document.getElementById("laughterTherapy").innerHTML += '<div class="col-6 col-md-4 col-lg-3 mb-2"><div><div class="slide-content"><a href="event-details.html?event=Comedy&id=' + eventsArray[data].Id + '" class="text-decoration-none"><img src="' + 
            eventsArray[data].ImgUrls + '" alt="sorry" loading="lazy" class="w-100 rounded"><h6 style="color: black;" class="pt-3">' 
            + eventsArray[data].Name +'</h6><h6 class="text-muted font-weight-normal d-none d-lg-block">' 
            + eventsArray[data].SubCategory + '</h6></a></div></div></div>';
            }
            else if(eventsArray[data].Category == "Plays"){
                document.getElementById("playsSlider").innerHTML += '<div class="col-6 col-md-4 col-lg-3 mb-2"><div><div class="slide-content"><a href="event-details.html?event=Plays&id=' + eventsArray[data].Id + '" class="text-decoration-none"><img src="' + 
                eventsArray[data].ImgUrls + '" alt="" loading="lazy" class="w-100 rounded"><h6 style="color: black;" class="pt-3">' 
                + eventsArray[data].Name +'</h6><h6 class="text-muted font-weight-normal d-none d-lg-block">' 
                + eventsArray[data].SubCategory + '</h6></a></div></div></div>';
            }
            else if(eventsArray[data].Category == "Sports"){
                document.getElementById("topSports").innerHTML += '<div class="col-6 col-md-4 col-lg-3 mb-2"><div><div class="slide-content"><a href="event-details.html?event=Sports&id=' + eventsArray[data].Id + '" class="text-decoration-none"><img src="' + 
                eventsArray[data].ImgUrls + '" alt="" loading="lazy" class="w-100 rounded"><h6 style="color: black;" class="pt-3">' 
                + eventsArray[data].Name +'</h6><h6 class="text-muted font-weight-normal d-none d-lg-block">' 
                + eventsArray[data].Venue + '</h6></a></div></div></div>'; 
            }
            else if(eventsArray[data].Category == "Activities"){
                document.getElementById("funActivities").innerHTML += '<div class="col-6 col-md-4 col-lg-3 mb-2"><div><div class="slide-content"><a href="event-details.html?event=Activities&id=' + eventsArray[data].Id + '" class="text-decoration-none"><img src="' + 
                eventsArray[data].ImgUrls + '" alt="" loading="lazy" class="w-100 rounded"><h6 style="color: black;" class="pt-3">' 
                + eventsArray[data].Name +'</h6><h6 class="text-muted font-weight-normal d-none d-lg-block">' 
                + eventsArray[data].Venue + '</h6></a></div></div></div>'; 
            }
        }
