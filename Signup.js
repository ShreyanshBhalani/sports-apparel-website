function validateusername(){
    var USERNAME = document.getElementById("loginUser").value;
    var t1= /^[A-Za-z\s\'\-]{3,20}$/;
    if(t1.test(USERNAME))
    {
        document.getElementById("loginUser").style.color=" green";
        document.getElementById("loginUser").innerHTML="<strong>Valid</strong>";
        return true;
    }    
    else
    {
        document.getElementById("loginUser").style.color="red";
        document.getElementById("loginUser").innerHTML="Please enter 3 to 20 characters"; 
        return false;
    }   
}
function validatemail(){
    var MAIL = document.getElementById("email").value;
    var t2=  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(t2.test(MAIL))
    {
        document.getElementById("email").style.color="green";
        document.getElementById("email").innerHTML="<strong>Valid</strong>";
        return true;
    }    
    else
    {
        document.getElementById("email").style.color="red";
        document.getElementById("email").innerHTML="Please enter Valid E-mail"; 
        return false;
    }   
}

function validatepassword(){
    var pass = document.getElementById("loginPassword").value;
    var t3= /^(?=.\d)(?=(.\W){1})(?=.[a-zA-Z])(?!.\s).{8,30}$/
    if(t3.test(pass))
    {
        document.getElementById("loginPassword").style.color=" green";
        document.getElementById("loginPassword").innerHTML="<strong>Valid</strong>";
        return true;
    }    
    else
    {
        document.getElementById("loginPassword").style.color="red";
    }
}
function validatecpassword(){
    var pass1 = document.getElementById("confirmPassword").value;
    var t4= /^(?=.\d)(?=(.\W){1})(?=.[a-zA-Z])(?!.\s).{8,30}$/
    if(t4.test(pass1))
    {
        document.getElementById("confirmPassword").style.color=" green";
        document.getElementById("confirmPassword").innerHTML="<strong>Valid</strong>";
        return true;
    }    
    else
    {
        document.getElementById("confirmPassword").style.color="red";
    }
}


function mymessage() {
    alert("You are signed in successfully!");
  }