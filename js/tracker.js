

//Buttons
const btnDaily = document.querySelector("#daily");
const btnWeekly = document.querySelector("#weekly");
const btnMonthly = document.querySelector("#monthly");




// addEventListeners


// starts with weekly values


window.addEventListener('load' , () => {
    fetch('../data.json')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        console.log(createCardTimers("daily",response))
        
    })
})




// daily 
btnDaily.addEventListener('click', () => {

    fetch('../data.json')
    .then(response => response.json())
    .then(response => console.log(response))

    
})


// weekly


//Monthly


/*
<div class="card">
            <div class="card__header"></div>
            <div class="card__content">
                <div id="work-card" class="topic">
                    <h2 class="topic__title">Work</h2>
                    <img src="points-icon.svg" alt="" class="point">
                </div>
                <div class="timers">
                    <p class="quantity">12hs</p>
                    <p class="lastTime"> otro dia</p>
                </div>
            </div>
        </div>
*/

function createCardTimers(interval , data){

    /*
const card = `<div class="card">
<div class="card__header"></div>
<div class="card__content">
    <div id="work-card" class="topic">
        <h2 class="topic__title">${data.title}</h2>
        <img src="points-icon.svg" alt="" class="point">
    </div>
    <div class="timers">
        <p class="quantity">${data.timeframes.interval.current}</p>
        <p class="lastTime">${data.timeframes.interval.previous}</p>
    </div>
</div>
</div>`
*/
    let card = null;
    if(interval === "daily"){
         card = `<div class="card">
        <div class="card__header"></div>
        <div class="card__content">
            <div id="work-card" class="topic">
                <h2 class="topic__title">${data[0].title}</h2>
                <img src="points-icon.svg" alt="" class="point">
            </div>
            <div class="timers">
                <p class="quantity">${data[0].timeframes.daily.current}</p>
                <p class="lastTime">${data[0].timeframes.daily.current}</p>
            </div>
        </div>
    </div>`
    }

return card;

}