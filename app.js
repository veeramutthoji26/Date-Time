
function showtime(params) {
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var d=date.getDay();
    var m=date.getMonth();
    var y=date.getFullYear();

    switch(d){
        case 0:
            d="sunday";
            break;
        case 1:
            d="monday";
             break;
        case 2:
            d="tuesday";
            break;
        case 3:
            d="wednesday";
            break;
        case 4:
            d="thursday";
            break;
        case 5:
            d="friday";
            break;
        case 6:
            d="saturday";
            break;
    }

h=h < 10 ? "0" + h : h ;
m=m < 10 ? "0" + m : m ;
s=s < 10 ? "0" + s : s ;
var time = h+":"+m+":"+s
var date = d+":"+m+":"+y
document.querySelector("#myclockdisplay").innerHTML=time;
document.querySelector("#mydatedisplay").innerHTML=date;
setTimeout(showtime,1000);


}
showtime();
