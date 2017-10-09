function clicky(){

	var fstn = document.getElementById('name');
	var lstn = document.getElementById('lname');
	var eml  = document.getElementById('ename');
	var num = document.getElementById('number');


	var fst = "Ariah";
	var lst = "Markle";
	var email = "atmarkle@yahoo.com";
	var num1 = "08125431";

	if (fstn.value == fst && lstn.value == lst && eml.value == email && num.value == num1)
	{
		
		window.alert("Information Received. Thank You! :)");

		window.open("login-page.html");

	}

	else
	{
		window.alert("Error: Incorrect Details/ Form not Complete!");

	}
		

}