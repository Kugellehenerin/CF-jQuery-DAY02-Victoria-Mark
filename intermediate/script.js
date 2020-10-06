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
    <img name="photo" id="photo_${index}" src=${peopleArray[index].image}.jpg></img><br>
    <label>${peopleArray[index].name}</label><br>
    <label>${peopleArray[index].relation}</label></br>
    <p class="result" id="hobby${index}">My favorite hobby is ${peopleArray[index].hobby}</p>
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

//Some styling
$("img").css({
    "width": "20em",
    "height" : "20em",
    "object-fit" : "cover"
});

$("div").css({
    "margin": "1em",
    "padding": "1em"
});

$(".result").css({
    "display": "none",
    "font-weight" : "bold"
});

//Solution #1: jQuery to show (and hide) additional information
$(`img`).click(showHobby);
function showHobby() {
    $(this).siblings('.result').css("display","block");
};

$(`img`).dblclick(hideHobby);
function hideHobby() {
    $(this).siblings('.result').css("display","none");
};

//Solution #2: jQuery to import additional information from JSON (.result needs to be visible to work)
/*
var images = $("img")
for (let i = 0; i < images.length; i++) {

    $(`#photo_${i}`).on("click", function () {
        $(this).siblings('.result').text(`My favorite hobby is ${peopleArray[i].hobby}`);
    });
}
*/

//olution #3: Javascript to import additional information from JSON (.result needs to be visible to work)
/*
var images = document.getElementsByName("photo");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function(){
        showHobby(i)}, false)
}

function showHobby(x){
    document.getElementById(`hobby${x}`).innerHTML = `My favorite hobby is ${peopleArray[x].hobby}`;
}
*/

//Make weird uncle disappear
$('div:last').append(`<button type="submit" id="kick_me_out">Kick me out</button>`)

$('#kick_me_out').click(kickOut)
function kickOut() {
    $(this).parent('div').hide()
};

});