// JavaScript function that wraps everything
$(document).ready(function () {

    // Gets Link for Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/images/star_wars song.mp3");

    // Theme Button
    $(".theme-button").on("click", function () {
        audioElement.play();
    });

    $(".pause-button").on("click", function () {
        audioElement.pause();
    });


    //Health starts out their numbers
    let chew = {
        health: 100,
        attack: 8,
        counter: 20,

    }

    let darth = {
        health: 150,
        counter: 20
    }

    let storm = {
        health: 180,
        counter: 25
    }

    let dark = {
        health: 100,
        counter: 5
    }

    // Move Clicks to arena
    $(document).ready(function () {
        var player1,
            player2;

        var counter = 0


        // hook up move image down action
        $("#moveOne img").click(function () {
            if (counter = 0) {
                player1 = chew
                counter++;
            } else if (counter = 1) {
                player2 = chew;

            }



            $("#moveOne").animate({
                top: '200px'
            });
        });

        $("#moveTwo img").click(function () {
            player1 = darth;

            $("#moveTwo").animate({
                bottom: '200px'
            });
        });

        $("#moveThree img").click(function () {
            player2 = storm;

            $("#moveThree").animate({
                top: '200px'
            });
        });

        $("#moveFour img").click(function () {
            player1 = dark;

            $("#moveFour").animate({
                bottom: '200px'
            });
        });


        var points = 8;
        points = chew.attack * points
        // 1st onlick = player1 , 2nd click = player2




        //hook up attack button action
        $("#attack-button").click(function () {


            // if player1 or player 2 = chew , attack equals 8 to the power of.

            if (player1 == chew || player2 == chew) {

            } else if (player1 !== chew || player2 !== chew) {
                chew.attack = 8 * points;
                console.log(chew.attack)
            }

            if (counter = 0)
                userChar

            //Player 1 attacks opposite player 
            //power decreases by counter attack power, when chew attacks oppenants power decreases 8,16,24
            console.log(player1.health, player2.health);

            player1.health = player1.health - player2.counter
            player2.health = player2.health - player1.counter
            console.log(player1.health, player2.health);

            document.getElementById("chew-health").innerText = player1.health;
            document.getElementById("storm-health").innerText = player2.health;
            document.getElementById("darth-health").innerText = player2.health;
            document.getElementById("dark-health").innerText = player2.health;


            if (player1.health <= 0 || player2.health <= 0) {
                alert("Game over, Believe in the Force")
            }




            //reassign variable, then target the id ie "chew-health",= player1 or player 2 health

        })

    })

    const printToScreen = () => {
        document.getElementById("chew-health").innerText = chew.health;


        document.getElementById("darth-health").innerText = darth.health;


        document.getElementById("storm-health").innerText = storm.health;


        document.getElementById("dark-health").innerText = dark.health;
    }

    printToScreen();

})