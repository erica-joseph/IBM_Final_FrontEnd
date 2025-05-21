/* Place your JavaScript in this file */

function myFunction() {
  const name = document.getElementById('name');
  const rec = document.getElementById('rec');
  const recInput = document.getElementById('recInput');

  const newDiv = document.createElement('div');

  if(name.value !== "Name (Optional)" && recInput.value !== "Message" && recInput.value.trim() !== ""){
    if(name.value.trim() !== ""){
        newDiv.innerHTML = `
        <div class="time" style="border-bottom: black solid 0.01vw; padding: .5vw;">
           ${name.value} 
        </div>
        <br>
            ${recInput.value}
        `;
    }
    else{
        newDiv.innerHTML = `
        <div class="time" style="border-bottom: black solid 0.01vw; padding: .5vw;">
            Anonymous
        </div>
        <br>
            ${recInput.value}
        `;
    }
  alert("Message has been successfully sent. Thank you for your recommendation!");  
  newDiv.setAttribute('class', 'cardRec');

  rec.appendChild(newDiv);

  }
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}