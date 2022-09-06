function validateForm(){
    var x = document.forms["regform"]["name"].value.trim().length;
    var brand = document.forms["regform"]["brand"].value;
    var phn = document.forms["regform"]["phn"].value;
    if(x<3){    
        window.alert("Name is too short");
        return false;
    }
    else if(brand.search(" ")!=-1){
        window.alert("Please enter atleast 1 Brand name")
        return false;
    }

     else if(phn.search("[^0-9]")!=-1 || phn.length<10)
    {
        window.alert("Invalid Phone Number");
        return false;
    }
    else{
        return true;
    }
}
function myFunction(){
    var a=Math.floor(Math.random() * 10000);   
    window.alert("Thanks for submitting ! Your Coupon code:" +a);
}
function myFunction1() {
  var x = document.getElementById("name");
  x.value = x.value.toUpperCase();
}
function myFunction2(x) {
  x.style.background = "#F0FFF0";
}
function mymessage() {
  alert("DEAR CUSTOMER, Suggest Us on What Sport Apparel you prefer the  most by filling this Form! ");
}