var commentBox = document.getElementById("comment");
var counter = document.getElementById("counter");
var errorMsg = document.getElementById("error-msg");

const maxLength = 140;

// set the counter text referring to the defined maxLength
counter.innerText = length+`/${maxLength}`;

// add listener listener to the comment box to update the counter and to alert the user when exceeding 140 chars
commentBox.addEventListener('input', function(event){

  var length = commentBox.value.length;
  // if the comment exceed maxLength the errer is shown and the word counter turns red
  if(length>maxLength){
    counter.style.color = 'red';
    errorMsg.style.visibility = 'visible';
  } else {
    counter.style.color = 'black';
    errorMsg.style.visibility = 'hidden';
  }
 
  // update the counter on each input event
  counter.innerText = length+`/${maxLength}`;
  
});


// on submitting the form
document.getElementById("form").addEventListener("submit", function (event) {

  event.preventDefault();

  const email = document.getElementById("email").value;
  const userName = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  var length = commentBox.value.length;

  // prevent the user from postion if any of the following details is missing or if comment length exceeds maxLength
  if(email==""){
    alert("Please write your email");
  }
  else if(userName==""){
    alert("Please write your name");
  }
  else if(comment==""){
    alert("Please write a comment");
  }
  else if(length>maxLength) {
    alert("Your comment exceeds the allowed maximum length and connot be submitted");
  }

  // if everything is fine proceed with posting the comment with user details and date+time
  else{
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
  
    // forming the comment time and date to be attached to the comment
    var time = "["+day+"-"+month +"-"+year+"]" +",  "+hours+":"+minutes;
  
    let comments = document.getElementById('comments');
  
    //create the time element and append the time into it
    const timeElement = document.createElement("p");
    const timeNode = document.createTextNode(time);
    timeElement.appendChild(timeNode);
  
    //create the email element and append the email into it
    const emailElement = document.createElement("p");
    const emailNode = document.createTextNode(email);
    emailElement.appendChild(emailNode);
  
  
    //create the name element and append the name into it
    const nameElement = document.createElement("p");
    const nameNode = document.createTextNode(userName+":");
    nameElement.appendChild(nameNode);
  
    //create the comment element and append the comment into it
    const commentElement = document.createElement("p");
    const commentNode = document.createTextNode(comment);
    commentElement.appendChild(commentNode);
  
    // create a new comment package element which will be a package of time + date + email + name + comment, to be added to the comments section
    const commentPackageElement = document.createElement("div");
    commentPackageElement.appendChild(timeElement);
    commentPackageElement.appendChild(emailElement);
    commentPackageElement.appendChild(nameElement);
    commentPackageElement.appendChild(commentElement);
  
    // add the relative styling to the comment package
    commentPackageElement.classList.add("comment");
  
    //add the comment package to the comments section
    comments.prepend(commentPackageElement);

    // clear all the comment text input for the next comment 
    document.getElementById("comment").value="";

    //clear the counter
    counter.innerText = `0/${maxLength}`;
  }
});
     
