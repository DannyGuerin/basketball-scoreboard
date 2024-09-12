let scoreNumHome = document.querySelector(".home-score")
scoreNumHome.textContent = 00

let scoreNumGuest = document.querySelector(".guest-score")
scoreNumGuest.textContent = 00

let hPlusOne = document.querySelector("#hPlusOne")
hPlusOne.textContent

// ****************************

let homeScore = 0

// Home Score
function h_increment_one() {
    homeScore += 1
    scoreNumHome.textContent = homeScore
}

function h_increment_two() {
    homeScore += 2
    scoreNumHome.textContent = homeScore
}

function h_increment_three() {
    homeScore += 3
    scoreNumHome.textContent = homeScore
}


// Guest Score
let guestScore = 0

function g_increment_one() {
    guestScore += 1
    scoreNumGuest.textContent = guestScore
}

function g_increment_two() {
    guestScore += 2
    scoreNumGuest.textContent = guestScore
}

function g_increment_three() {
    guestScore += 3
    scoreNumGuest.textContent = guestScore
}