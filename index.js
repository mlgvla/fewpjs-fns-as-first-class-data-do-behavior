/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
    let timeStringArray = timeString.split(":")
    let hour = parseInt(timeStringArray[0], 10)

    if (hour < 12) {
        return "Good Morning"
    }
    if (hour >= 12 && hour < 17) {
        return "Good Afternoon"
    }
    return "Good Evening"
}
/* Write your implementation of displayMessage() */
function displayMessage(greetingMessage) {
    let h1 = document.getElementById('greeting')
    h1.innerHTML = greetingMessage
}
