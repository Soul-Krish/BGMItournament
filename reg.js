
function vfun(){
    var uname=document.forms["myform"]["uname"].value;
    var uname1=document.forms["myform"]["uname1"].value;
    var uname2=document.forms["myform"]["uname2"].value;
    var uname3=document.forms["myform"]["uname3"].value;
    var uname4=document.forms["myform"]["uname4"].value;
    var email1=document.forms["myform"]["email1"].value;
    var num=document.forms["myform"]["num"].value;
    var errorBox=document.getElementById("errorBox");


if(uname==null || uname=="" ){
          document.getElementById("errorBox").value =
           "enter the Team name";
         return false;
}

if(uname1==null || uname1=="" ){
    document.getElementById("errorBox").innerHTML =
     "enter the player 1 IGN";
   return false;
}
if(uname2==null || uname2=="" ){
    document.getElementById("errorBox").innerHTML =
     "enter the player 2 IGN";
   return false;
}
if(uname3==null || uname3=="" ){
    document.getElementById("errorBox").innerHTML =
     "enter the player 3 IGN";
   return false;
}
if(uname4==null || uname4=="" ){
    document.getElementById("errorBox").innerHTML =
     "enter the player 4 IGN";
   return false;
}
if(email1==null || email1==""){
    document.getElementById("errorBox").innerHTML ="enter the valid mail id";
    return false;
}
if(num==null || num==""){
    document.getElementById("errorBox").innerHTML ="enter the valid  number";
    return false;
}

if (uname != '' && uname1 != '' && uname2 !='' && uname3 !==''&& uname4 !='' && email1 !='' && num !=''){
    alert("Registration successfully");
 window.location.href="successreg.html";
 return false;
}
}
