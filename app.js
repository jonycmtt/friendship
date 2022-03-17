
function love() {
    var name1  = document.getElementById("NameOne").value;
var name2  = document.getElementById("NameTwo").value;


if(name1.length<=2) {
    alert("Inter at least 3 character")
}
if(name2.length<=2) {
    alert("Inter at least 3 character")
} else {
    var random = Math.floor(Math.random()*100);
    document.getElementById("print").innerHTML = "Congratulation " +"'" + name1 + "'" + " and " + "'" + name2 + "'" + " = " + "'"  +random + "'" + " %" +" of love";
}
    if (random<=10 || random<=20) {
        document.getElementById("statement").innerHTML = "Need Extra Care";
    }
    else if (random<=21 || random<=50) {
        document.getElementById("statement").innerHTML = "Good Friendship";
    }
    else if (random<=51 || random<=90) {
        document.getElementById("statement").innerHTML = "Lovely Friendship";
    }
    else if (random<=91 || random<=100) {
        document.getElementById("statement").innerHTML = " 100% Pure Friendship";
    }
}

