function showTime() {
    time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();

    hourUnder10 = (h < 10) ? hours = "0" + h : hours = h;
    minuteUnder10 = (m < 10) ? minutes = "0" + m : minutes = m;
    secondUnder10 = (s < 10) ? seconds = "0" + s : seconds = s;

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    m = document.getElementById("meridiem")
    meridiem = (h < 12) ? m.innerHTML = "AM" : m.innerHTML = "PM";
}

setInterval(showTime, 1000);