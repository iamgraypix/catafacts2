let url = 'https://meowfacts.herokuapp.com/'
let timer = document.querySelector('.timer')
let next = document.querySelector('#btn-next')
let x = 10

// when page the requested, call cat api
catAPI()

// set a timer to load cat api at every 10 seconds
setInterval(function(){

    // decrease the counter by 1
    x = x - 1

    // if the counter reach 0 ...
    if (x == 0)
    {   
        // set back to 10
        x = 10
        // then call the cat api again
        catAPI()
    }

    // while the counter not yet 0 ...
    // display to the browser the current value of the counter
    document.querySelector('span').innerHTML = x

// repeat this process for every 1 second (real time    )
}, 1000)



next.addEventListener('click', function() {

    x = 11
    catAPI()

})


async function catAPI() {

    let response = await fetch(url)
    let facts = await response.json();
    
    document.querySelector('p').innerHTML = facts.data[0]

} 