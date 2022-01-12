
function check(){

  let fname = document.forms["form-1"]["username"].value;
  let lname = document.forms["form-1"]["password"].value;

  if(fname == "riya" && lname == "1234") return true;
  else {alert("Invalid User");return false;}
}  
