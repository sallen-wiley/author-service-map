function getLoggedIn() {
	
	var loggedIn = localStorage.getItem('logged');
	console.log(loggedIn);
	
	if (loggedIn) {
		console.log("you are logged in")
		document.getElementById("login-overlay").classList.add("hidden")
	} else if (!loggedIn) {
		console.log("you are not logged in")
	}
}

function pasuser(form) {
	if (form.username.value == "authorservices") {
		if (form.password.value == "wiley1") {
			localStorage.setItem('logged', true);
			getLoggedIn();
		} else {
			alert("Invalid Password")
		}
	} else {
		alert("Invalid UserID")
	}
}

getLoggedIn();
