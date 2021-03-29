//get time from date object
function clocky(){
    const FullTime = new Date();
    var hrs = FullTime.getHours();
    var mins = FullTime.getMinutes();
    var secs = FullTime.getSeconds();

    if (hrs<10){
        hrs="0"+hrs;
    }
     if(mins<10){
        mins="0"+mins;
    }
     if(secs<10){
        secs="0"+secs;
    }

    document.getElementById('hour').innerHTML=hrs+' :';
    document.getElementById('minute').innerHTML=mins+' :';
    document.getElementById('second').innerHTML=secs;
 }

setInterval(clocky , 1000)