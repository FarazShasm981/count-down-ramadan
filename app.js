var endDate = ("12 March 2024");
document.getElementById("end-date").innerText = endDate;

var inputs = document.querySelectorAll("input");


function count() {
    var end = new Date(endDate);
    var now = new Date();
    var minus = (end - now) / 1000;
    if(minus < 0) return;
    inputs[0].value = Math.floor(minus / 3600 / 24);
    inputs[1].value = Math.floor((minus / 3600));
    inputs[2].value = Math.floor((minus / 3600) * 60);
    inputs[3].value = Math.floor((minus) % 60);

}

setInterval(function(){
    count();

},1000);