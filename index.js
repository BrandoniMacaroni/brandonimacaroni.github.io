/*
*Brandon Harris
*Flatiron School
*Phase 1 Project
*/

//make sure the DOM is loaded
const init = () => {
  //declare/assign variables 
  const inputForm = document.querySelector('form');
  var activityType;

  //Assign the correct value to 'activityType'
  var divs = document.querySelectorAll('input').forEach(occurence => {
    let id = occurence.getAttribute('id');
    occurence.addEventListener('click', function () {
      activityType = id;
    });
  });

  //bored button toggles light/dark mode
  const btn2 = document.getElementById('boredButton');
  btn2.addEventListener('click', function onClick(event) {
    const backgroundColor = document.body.style.backgroundColor;
    if (backgroundColor === 'grey') {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = 'grey';
    }
  });

  let mail = document.getElementById("mailIcon");
  mail.addEventListener("mouseover", function( event ) {
  alert("You looking cute today")
  , false});


  //know when a button is clicked
  inputForm.addEventListener('click', (event) => {
    event.preventDefault();

    //search through the api and assign the correct values
    fetch(`http://www.boredapi.com/api/activity?type=${activityType}`)
      .then(response => response.json())
      .then(data => {
        const activity = document.querySelector('section#activityDetails h4');
        const accessibility = document.querySelector('section#activityDetails p1');
        const participants = document.querySelector('section#activityDetails p3');
        const price = document.querySelector('section#activityDetails p4');

        activity.innerText = data.activity;
        accessibility.innerText = "Accessibility: " + data.accessibility;
        participants.innerText = "Participants: " + data.participants;
        price.innerText = "Price: " + data.price;
      });
  });

}

document.addEventListener('DOMContentLoaded', init);