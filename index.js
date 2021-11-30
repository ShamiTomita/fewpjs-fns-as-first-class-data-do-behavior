/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const nT = time.split(':')
  const newTime = parseInt(nT[0])
  if (newTime < 12) {
    return "Good Morning"
  }
  else if (newTime > 12 && newTime < 17) {
    return "Good Afternoon"
  }
  else if (newTime > 17) {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string){
  let greeting = document.querySelector('#greeting')
  greeting.innerHTML = (`${string}`)
}
