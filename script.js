let start = document.getElementById("startbutton");
let result = document.getElementById("result");


start.addEventListener('click', (e) => {

    //Update the countdown every second
    let countdown = setInterval(() => {
        let value = document.getElementById('input').value;               // To get user selected date and time 
        let distance = new Date(value).getTime() - new Date().getTime();  //Converts the date and time into miliseconds

        //Calculates days , Hours, minites and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        //Show result on display
        result = document.getElementById("result")
            .innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

        if (distance < 0) {
            clearInterval(countdown); // Stop when date is passed
            result = document.getElementById("result").innerHTML = "Countdown Finished!";
        }
    }, 1000)





})