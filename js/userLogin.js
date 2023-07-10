if(localStorage.getItem("logged_in_user")){
    var homeSignIn = document.getElementById("homeSignIn");
    homeSignIn.style.display = 'none';

    var homeSignedIn = document.getElementById("homeSignedIn")
    homeSignedIn.style.display = 'block';

    var userInfo = JSON.parse(localStorage.getItem("logged_in_user"));

    var signedUserName = document.getElementById("signedUserName");
    signedUserName.innerHTML = ' Hi, ' + userInfo.Username;
    signedUserName.style.textTransform = 'capitalize';
    signedUserName.style.marginRight = '10px';
    
    var signedUserNameMobile = document.getElementById("signedUserNameMobile");
    signedUserNameMobile.innerHTML = ' Hi, ' + userInfo.Username;
    signedUserNameMobile.style.textTransform = 'capitalize';
    signedUserNameMobile.style.marginRight = '10px';

}
else{
    var homeSignIn = document.getElementById("homeSignIn");
    homeSignIn.style.display = 'block';

    var homeSignedIn = document.getElementById("homeSignedIn")
    homeSignedIn.style.display = 'none';

}

function logout(){
    // var currentPage = window.location.href;
    var homeSignIn = document.getElementById("homeSignIn");
    homeSignIn.style.display = 'block';

    var homeSignedIn = document.getElementById("homeSignedIn")
    homeSignedIn.style.display = 'none';

    localStorage.removeItem("logged_in_user");
    alert("Successfully logged out!!");
    window.location.href = 'file:///D:/Virti%20Program/EBS/EBS/index.html';
    //window.location.reload();
}

function Login(){
    // var currentPage = window.location.href;
    // var loginCategory = document.getElementById("loginCategory").value;
    var loginNo = document.getElementById("loginNo").value;
    var loginPass = document.getElementById("loginPass").value;

    var userFlag=0;

    var userArray = JSON.parse(localStorage.getItem("Users"));
    for(data in userArray){
        if(loginNo == userArray[data].ContactNo && loginPass == userArray[data].Password) {
            
            userFlag = 1;
            alert("Successfully Logged In as " + userArray[data].Username + "!!");
            localStorage.logged_in_user = JSON.stringify(userArray[data]);
            
            window.location.href = 'file:///D:/Virti%20Program/EBS/EBS/index.html'; 
            //window.location.reload();
            return true;
        }
    }
    if(userFlag==0){
        alert("Please provide vaild details");
    }
}

function Register(){
    // var currentPage = window.location.href;
    userName = document.getElementById("userName").value;
    userContact = document.getElementById("userContact").value;
    userPassword = document.getElementById("userPassword").value;
    userConfirm = document.getElementById("userConfirm").value;
    
    flag = 0;

    pat_u=/^[A-z]+$/;
    pat_m=/^[6-9]{1}[0-9]{9}$/;
    pat_p = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(pat_u.test(userName)) {
        if(pat_m.test(userContact)){
            if(pat_p.test(userPassword)){
                if(userPassword!="" && userConfirm!="" && userPassword == userConfirm){
                    flag=1;
                
                    var userArray = JSON.parse(localStorage.getItem("Users"));

                    var user = {
                        "Id": userArray.length + 1, 
                        "Username" : userName, 
                        "ContactNo": userContact,
                        "Password": userPassword
                    }
                    
                    userArray.push(user);
                    //console.log(activityArray);
                
                    localStorage.setItem("Users", JSON.stringify(userArray));
                    alert("You have registered yourself successfully, Please Login yourself now!!");
                    localStorage.logged_in_user = JSON.stringify(user);
                    window.location.href = 'file:///D:/Virti%20Program/EBS/EBS/index.html';
                    //window.location.reload();
                    console.log("success register")
                }
                else{
                    alert("please enter correct password");
                }
            }
            else{
                alert("Please enter strong password of 6-16 letters, a digit, a special character and a Capital letter");
            }
        }
        else{
            alert('Please enter valid contact number');
        }
    }
    else{
        alert("Please enter valid username");
    }
}
