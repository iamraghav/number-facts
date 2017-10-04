// //////////\\\\\\\\\\
//      Vanilla JS      
// \\\\\\\\\\//////////
let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input', getFactFetch);

/*
//////////\\\\\\\\\\
    Using Ajax XHR      
\\\\\\\\\\//////////

function getFactAjax() {
  // console.log(123);
  let number = numberInput.value;
  // console.log(number);

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://numbersapi.com/' + number);

  xhr.onload = function() {
    if(this.status == 200 && number != '') {
      // console.log(this.responseText);
      fact.style.display = 'block';
      factText.innerText = this.responseText;
    }
  }

  xhr.send();
}
*/

/*
//////////\\\\\\\\\\
   Using Fetch API     
\\\\\\\\\\//////////
*/

function getFactFetch() {
  let number = numberInput.value;

  fetch("http://numbersapi.com/" + number)
    .then(response => response.text())
    .then(data => {
      // console.log(data);
      if(number != '') {
        fact.style.display = "block";
        factText.innerText = data;
      }
    })
    .catch(err => console.log(err));
}