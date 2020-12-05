function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

    if(hou == 0){
        hou = 12;
        pe = 'AM';
    }
    if(hou > 12){
        hou = hou - 12;
        pe = 'PM';
    }
    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0+n);
        return n;
    }


    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var ids = ['dayName', 'month', 'dayNum', 'year', 'hour', 'minutes', 'seconds', 'shift'];
    var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
    for(var i = 0; i<ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock(){
    updateClock();
    window.setInterval("updateclock()", 1);
}




const billAmount = document.querySelector("#billAmount");
const tipPercentage = document.querySelector("#tipPercentage");
const tipAmount = document.querySelector("#tipAmount");
const totalAmount = document.querySelector("#totalAmount");
const calculate = document.querySelector("#calculate");

calculate.addEventListener("click", ()=>{
    if(billAmount.value !== "" && tipPercentage.value !== ""){
        tipAmount.value = Number(tipPercentage.value)/100*Number(billAmount.value)
        totalAmount.value = Number(billAmount.value) + Number(tipAmount.value);
    }else{
        confirm("please enter correct value");
    }
})