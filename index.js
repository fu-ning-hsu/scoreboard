let homeCount = 0;
let guestCount = 0;
let homeScore = document.getElementById("home-score") 
let guestScore = document.getElementById("guest-score")

function homeAddOne() {
    homeCount += 1;
    homeScore.textContent = homeCount
}

function homeAddTwo() {
    homeCount += 2;
    homeScore.textContent = homeCount
}

function homeAddThree() {
    homeCount += 3;
    homeScore.textContent = homeCount
}

function guestAddOne() {
    guestCount += 1;
    guestScore.textContent = guestCount
}

function guestAddTwo() {
    guestCount += 2;
    guestScore.textContent = guestCount
}

function guestAddThree() {
    guestCount += 3;
    guestScore.textContent = guestCount
}

function reset() {
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount 
}