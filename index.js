alert("Welcome to the RGB color picking game!!!");

var colors = generateRandomColor(6);
var container = document.getElementById("container");
var squareBox = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easybtn");
var hardButton = document.querySelector("#hardbtn");
var stripeDiv = document.querySelector("#stripe");

var pickedColor = colorPicked();
colorDisplay.textContent = pickedColor;

h1Display.classList.add("selected");

//resetButton.addEventListener()
for(i= 0; i < squareBox.length; i++){
    squareBox[i].style.backgroundColor = colors[i];

    squareBox[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        
        
        if(clickedColor === pickedColor){
           //squareBox[i].style.backgroundColor = pickedColor;
            messageDisplay.textContent = "Correct!";
            changedColor(clickedColor);
            resetButton.textContent = "Play Again?";
            h1Display.style.backgroundColor= clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            
        }
    });
};

function changedColor(color){
    for(i=0; i< squareBox.length; i++){
        squareBox[i].style.backgroundColor = color;
    };
};

function colorPicked(){
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
};

function generateRandomColor(num){
    
    var arr = [];

    for(var i=0; i < num; i++){
        arr.push(randomColor());

    };
    return arr;
};

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+ r + ", " + g +", " + b + ")";
};

resetButton.addEventListener("click", function(){
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    easyButton.classList.remove("selected");

    colors = generateRandomColor(6);
    
    pickedColor = colorPicked();
    
    colorDisplay.textContent = pickedColor;

    h1Display.classList.add("selected");
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";

    for(i= 0; i < squareBox.length; i++){
        squareBox[i].style.display = "block";
    squareBox[i].style.backgroundColor = colors[i];
    
    }
});

function displayNone(){
    squareBox[3].style.backgroundColor = "#232323";
    squareBox[4].style.backgroundColor = "#232323";
    squareBox[5].style.backgroundColor = "#232323";
}

easyButton.addEventListener("click", function(){
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    resetButton.classList.remove("selected");

    h1Display.style.backgroundColor = "#18b4b9";
    messageDisplay.textContent = "";

    colors = generateRandomColor(3);
    pickedColor = colorPicked();
    //displayNone();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    for(i= 0; i < squareBox.length; i++){
        if(colors[i]){
            
           squareBox[i].style.display = "block";
            squareBox[i].style.background = colors[i];
        }
        else{
            
           squareBox[i].style.display = "none";
        }
    
    };
    // if(pickedColor){
    //     displayNone();
    // }
});



hardButton.addEventListener("click", function(){
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    resetButton.classList.remove("selected");

    h1Display.style.backgroundColor = "#18b4b9";
    messageDisplay.textContent = "";

    colors = generateRandomColor(6);
    pickedColor = colorPicked();
    resetButton.textContent = "New Colors";
    
    colorDisplay.textContent = pickedColor;

    for(i= 0; i < squareBox.length; i++){
        squareBox[i].style.display = "block";
        squareBox[i].style.backgroundColor = colors[i];
        
    };
    // displayNone = !displayNone;
});