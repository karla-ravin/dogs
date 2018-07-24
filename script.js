function woof(){
  alert("woof");
}

function bark() {
    var x = document.getElementsByClassName("woof");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].onclick = woof();
    }
