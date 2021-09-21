setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    ap ="AM"
    if(htime>12){
        dhour = htime%12;
        ap = "PM"
    }
    if(htime==0){
        dhour=12;
    }
    document.getElementById("digi-time").innerHTML=dhour+":"+mtime+":"+stime+" "+ap;
    // document.getElementById("digi-hour").innerHTML=dhour;
    // document.getElementById("digi-minute").innerHTML=mtime;
    // document.getElementById("digi-second").innerHTML=stime;
    // document.getElementById("digi-ap").innerHTML=ap;
}, 1000);

