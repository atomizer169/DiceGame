// var randomNumber1 = 0;

function setImgPath() {
    var randomNumber1 = Math.floor(Math.random() * 6);
    var randomNumber2 = Math.floor(Math.random() * 6);
    var images = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
    
    var setPath1 = "./images/" + images[randomNumber1];
    var setPath2 = "./images/" + images[randomNumber2];

    document.querySelector(".dice .img1").setAttribute("src", setPath1);
    document.querySelector(".dice .img2").setAttribute("src", setPath2);

    if (randomNumber1 === randomNumber2)
    {
        document.querySelector(".container h1").innerHTML = "It's a Draw!!!";
        document.querySelector(".container h1").style.color = "#d1cc30";
        
    }
    else if (randomNumber1 >= randomNumber2)
    {
        document.querySelector(".container h1").innerHTML = " Player 1 Wins !!!";
        document.querySelector(".container h1").style.color = "#deb887";
    }
    else if (randomNumber1 <= randomNumber2)
    {
        document.querySelector(".container h1").innerHTML = " Player 2 Wins !!!";
        document.querySelector(".container h1").style.color = "#7fffd4";
    }
    else
    {
        alert("Problem with the code.. contact Admin..");
    }
}

//h1.onClick = setImgPath;

