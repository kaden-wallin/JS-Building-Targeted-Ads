// get user's data
// get user's coordinates
async function getCoords() {
    let pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
})
    return [pos.coords.latitude, pos.coords.longitude]
}

// get user's time
function userTime() {
    const now = new Date()
    return now.getHours()
}


// helper functions
// check time of day
function getMealTime() {
    const tod = userTime()
    return tod > 20 ? "late-night snack" : tod > 16 ? "dinner" : tod > 11 ? "lunch" : "breakfast"
}

// build ads
// build ad 1
function buildAd1() {
    const mealTime = getMealTime()
    let content = document.querySelector(".ad1")
    let adPara = document.createElement('p')
    adPara.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.append(adPara)
}

// build ad 2
function buildAd2(coordinates) {
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector('.ad2')
    let adPara = document.createElement('p')
    adPara.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(adPara)
}

// event listeners
// on load, build ads
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}