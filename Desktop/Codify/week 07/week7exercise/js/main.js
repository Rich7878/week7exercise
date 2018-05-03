document.getElementById("first_id").textContent ="My first JS move!";
function getInfo(){
    var secondid = document.getElementById("second-id").value;
    if(secondid !== 'My name') {
        console.log("Rich Williams!");
        document.getElementById("second-id").innerHTML = "I'm the best";
    }
}
var specialId = document.getElementById("specialId").value;
    if (specialId == "I love JS"){
        document.getElementById("specialId").textContent = "I love JS!";
    }
    else {
        document.getElementById("specialId").textContent = "I love JS!";
    }

var names = ["Marla", "Joshua", "Amanda", "Rich"]
    for( i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
var person ={firstName:"Rich", lastName:"Williams", weight:"215lbs"};