//Parsing the JSON
var peopleArray = JSON.parse(people);


$(document).ready(function() {

//Setting up the container
$("body").append('<main></main>')
$("main").css({
    "display":"flex",
    "flex-flow": "row wrap",
    "justify-content": "center"
});

//Filling main with divs containing images and labels
for (let index = 0; index < peopleArray.length; index++) {
    $("main").append(`<div id="div${index}">
    <img name="photo" src=${peopleArray[index].image}.jpg></img><br>
    <label>${peopleArray[index].name}</label><br>
    <label>${peopleArray[index].relation}</label></br>
    <p class="result" id="hobby${index}"></p>
    </div>`)
}

//Coloring the divs based on relation
for (let index = 0; index < peopleArray.length; index++) {
    if (peopleArray[index].close_family) {
        $(`#div${index}`).css("background-color","blue");
    } else {
        $(`#div${index}`).css("background-color","pink");
    }   
}

/* alternative for coloring the divs based on relation
var boxes = $("main > div");
for (let index = 0; index < peopleArray.length; index++) {
    if (peopleArray[index].close_family) {
        boxes[index].style.backgroundColor = "blue";
    } else {
        boxes[index].style.backgroundColor = "pink";
    }   
}
*/

$("img").css({
    "width": "20em",
    "height" : "20em",
    "object-fit" : "cover"
});

$("div").css({
    "margin": "1em",
    "padding": "1em"
});


$('img').click(showHobby);
function showHobby() {
  //$(this).append(`<br><p>My favorite hobby is TBD</p>`);
    $(".result").text("My favorite hobby is TBD");
};

/*Javascript Lösung
var images = document.getElementsByName("photo");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function(){
        showHobby(i)}, false)
}

function showHobby(x){
    document.getElementById(`hobby${x}`).innerHTML = `My favorite hobby is ${peopleArray[x].hobby}`;
}
*/

});





