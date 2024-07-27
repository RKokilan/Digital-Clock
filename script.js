let ampm = document.getElementById('ampm')
function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = Zero(dateTime.getMinutes());
    let sec = Zero(dateTime.getSeconds());
    if(hr>12){
        hr = hr - 12
        ampm.innerHTML = 'PM'
    }
       
    document.getElementById('hours').innerHTML =Zero(hr)
    document.getElementById('mins').innerHTML = min
    document.getElementById('seconds').innerHTML = sec
}

function Zero(num){
    return num<10?"0"+num:num
}

setInterval(displayTime,500)