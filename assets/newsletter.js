// Define variables
var submitButton = document.getElementById("subscribe");
var emailElement = document.getElementById("newsletter_email");
var feedbackElement = document.getElementById("feedback");

function submit(event) {
  // Get value from input box
  var emailInput = emailElement.value;
  if (emailInput == "") {
    feedbackElement.textContent = "Please enter your email!";
    emailElement.value = "";
  } else {
  //Get JSON item from local storage and call it emailList, change into javascript object or else empty string
    var emailList = JSON.parse(localStorage.getItem("emailList")) || [];
    // Add newinput to the current list
    emailList.push(emailInput);
    // Change the new list back to JSON item and add back to local storage 
    localStorage.setItem("emailList", JSON.stringify(emailList));
    feedbackElement.textContent = "Successful!"
    setTimeout(function () {
      feedbackElement.setAttribute("class", "hide");
    }, 1000);
  }
  emailElement.value = "";
};


// Event Listener button
submitButton.addEventListener("click", submit);
