var commentBox = document.getElementById("comment");
var counter = document.getElementById("counter");
var errorMsg = document.getElementById("error-msg");

const maxLength = 140;

commentBox.addEventListener('input', function(event){

  var length = commentBox.value.length;
  if(length>maxLength){
    counter.style.color = 'red';
    errorMsg.style.visibility = 'visible';
  } else {
    counter.style.color = 'black';
    errorMsg.style.visibility = 'hidden';
  }
 
  counter.innerText = length+"/140";
  
});



document.getElementById("form").addEventListener("submit", function (event) {

  event.preventDefault();

  const email = document.getElementById("email").value;
  const userName = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  var length = commentBox.value.length;

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

  else{
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
  
  
    var time = "["+day+"-"+month +"-"+year+"]" +",  "+hours+":"+minutes;
  
  
    let comments = document.getElementById('comments');
  
    const newCommentElement = document.createElement("div");
  
    //create the time element and and append the time
    const timeElement = document.createElement("p");
    const timeNode = document.createTextNode(time);
    timeElement.appendChild(timeNode);
  
    //create the email element and and append the email
    const emailElement = document.createElement("p");
    const emailNode = document.createTextNode(email);
    emailElement.appendChild(emailNode);
  
  
    //create the name element and and append the name
    const nameElement = document.createElement("p");
    const nameNode = document.createTextNode(userName+":");
    nameElement.appendChild(nameNode);
  
    //create the email element and and append the email
    const commentElement = document.createElement("p");
    const commentNode = document.createTextNode(comment);
    commentElement.appendChild(commentNode);
  
    newCommentElement.appendChild(timeElement);
    newCommentElement.appendChild(emailElement);
    newCommentElement.appendChild(nameElement);
    newCommentElement.appendChild(commentElement);
  
    newCommentElement.classList.add("comment");
  
    comments.prepend(newCommentElement);

    document.getElementById("email").value="";
    document.getElementById("name").value="";
    document.getElementById("comment").value="";
  }
});
     
