let day = document.getElementById('day')
let hrs = document.getElementById('hrs')
let mint = document.getElementById('mint')
let second = document.getElementById('second')

// Function to calculate and display the countdown
function updateCountdown() {
    // Target date (June 16, 2024)
    var targetDate = new Date('2024-06-16T00:00:00');

    // Current date
    var currentDate = new Date();

    // Calculate the difference in milliseconds
    var difference = targetDate.getTime() - currentDate.getTime();

    // Calculate days, hours, minutes, and seconds
    var days =    Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours =   Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the countdown
    // document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    day.innerHTML = days + ' days '
    hrs.innerHTML = hours + ' hrs'
    mint.innerHTML = minutes + ' M'
    second.innerHTML = seconds + ' S'

    // Update the countdown every second
    setTimeout(updateCountdown, 1000);
}

// Call the function to start the countdown
updateCountdown();


// setTimeout(function(){
// alert('Eid is ')
// },3000)

