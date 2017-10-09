function redirect(){

var usern = document.getElementById('username');
var pass = document.getElementById('Password');
 
 var righte ="atmarkle@yahoo.com";
 var rightp = "2019";
if (usern.value == righte)
{
             if(pass.value == rightp){
	         window.alert("You are logged in!!");
	         window.open("personal-details.html");	
            }
            else 
           {
      	alert("Incorrect password/email");

            }

}
else 
{
window.alert("Incorrect password/email");
}

}