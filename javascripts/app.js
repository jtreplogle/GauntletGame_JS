'use strict';

$(document).ready(function() {

  /*
    Test code to generate a human player and an orc player
   */

   // var currentPlayerName = "";

  $("#class_button").on("click", function() {
    var currentPlayerName = $("#player-name").val(); 
    // console.log("button clicked", currentPlayerName);
    
    Gauntlet.Combatants.Player.playerName = currentPlayerName;
    console.log(Gauntlet.Combatants.Player.playerName);
  })


  var currentClassName;

  $(".class__link").on("click", function(e) {
    currentClassName = $(event.currentTarget).children(".btn__text").html()
  })



  $("#weapon_button").click(function() {
    //switch statement to decide which playerClass selected
    console.log(currentClassName);
    
  });

    // var player1 = new Gauntlet.Combatants.Human();
    // player1.class = Gauntlet.GuildHall.Warrior;
    // console.log("player1", player1);


  var warrior = new Gauntlet.Combatants.Human();
  warrior.setWeapon(new WarAxe());
  warrior.generateClass();  // This will be used for "Surprise me" option
  console.log(warrior.toString());

  console.log("warrior", warrior);

  var orc = new Gauntlet.Combatants.Orc();
  orc.setWeapon(new BroadSword());
  orc.generateClass();
  console.log(orc.toString());

  /*
    Test code to generate a spell
   */
  var spell = new Gauntlet.SpellBook.Sphere();
  console.log("spell: ", spell.toString());


  $(document).ready(function() {
    /*
      Show the initial view that accepts player name
     */
    $("#player-setup").show();

    /*
      When any button with card__link class is clicked,
      move on to the next view.
     */
    $(".card__link").click(function(e) {
      var nextCard = $(this).attr("next");
      var moveAlong = false;

      switch (nextCard) {
        case "card--class":
          moveAlong = ($("#player-name").val() !== "");
          break;
        case "card--weapon":
          moveAlong = ($("#player-name").val() !== "");
          break;
      }

      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show();
      }
    });

    /*
      When the back button clicked, move back a view
     */
    $(".card__back").click(function(e) {
      var previousCard = $(this).attr("previous");
      $(".card").hide();
      $("." + previousCard).show();
    });

  });
})
  