

//Buttons
const btnDaily = document.querySelector("#daily");
const btnWeekly = document.querySelector("#weekly");
const btnMonthly = document.querySelector("#monthly");


//TimerBoxesHTML

const timers = document.querySelectorAll(".timers");




// addEventListeners


//event onLoad starts with weekly values


window.addEventListener('load', () => {
    fetch('../data.json')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            displayTimers("weekly", response);
        })
})




// daily 
btnDaily.addEventListener('click', () => {

    fetch('../data.json')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            displayTimers("daily", response)
        })



})


// weekly

btnWeekly.addEventListener('click', () => {

    fetch('../data.json')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            displayTimers("weekly", response)
        })



})

btnMonthly.addEventListener('click', () => {

    fetch('../data.json')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            displayTimers("monthly", response)
        })



})


//Monthly


//the interval will be "daily", weekly and "monthly, by default it displays weekly values "

function displayTimers(interval, data) {

    switch (interval) {
        case "daily":


            for (let i = 0; i < timers.length; i++) {
                let element = data[i];
                timers[i].innerHTML = `<p class="quantity">${element.timeframes.daily.current}hs</p>
                                    <p class="lastTime">Yesterday ${timers[i].innerHTML = data[i].timeframes.daily.previous}hs</p>`

            }


            break;

        case "weekly":
            for (let i = 0; i < timers.length; i++) {
                let element = data[i];
                timers[i].innerHTML = `<p class="quantity">${element.timeframes.weekly.current}hs</p>
                                        <p class="lastTime">last week ${timers[i].innerHTML = data[i].timeframes.weekly.previous}hs</p>`

            }
            break;

        case "monthly":
            for (let i = 0; i < timers.length; i++) {
                let element = data[i];
                timers[i].innerHTML = `<p class="quantity">${element.timeframes.monthly.current}hs</p>
                                    <p class="lastTime">last month ${timers[i].innerHTML = data[i].timeframes.monthly.previous}hs</p>`

            }
            break;

            default:
                for (let i = 0; i < timers.length; i++) {
                    let element = data[i];
                    timers[i].innerHTML = `<p class="quantity">${element.timeframes.weekly.current}hs</p>
                                            <p class="lastTime">last week ${timers[i].innerHTML = data[i].timeframes.weekly.previous}hs</p>`
    
                }
                break;

    }

}

