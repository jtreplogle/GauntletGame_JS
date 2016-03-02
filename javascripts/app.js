'use strict';

$(document).ready(function() {

  /*
    Test code to generate a human player and an orc player
   */

   var currentPlayerName = "";

  $("#class_button").on("click", function() {
    currentPlayerName = $("#player-name").val(); 
    // console.log("button clicked", currentPlayerName);
    
    // Gauntlet.Combatants.Player.playerName = currentPlayerName;
    // console.log(Gauntlet.Combatants.Player.playerName);
  })

  var currentClassName;

  $(".class__link").on("click", function(e) {
    currentClassName = $(event.currentTarget).children(".btn__text").html()
  })

var player1;

  $("#weapon_button").click(function() {
    //switch statement to decide which playerClass selected
    console.log(currentClassName);
    console.log(currentPlayerName);
    
    player1 = new Gauntlet.Combatants.Player();
    player1.playerName = currentPlayerName;
    console.log("player1", player1);

    switch(currentClassName) {

      case "Warrior":
       player1.class = new Gauntlet.GuildHall.Warrior();
          break;

      case "Valkyrie":
       player1.class = new Gauntlet.GuildHall.Valkyrie();
          break;

      case "Berserker":
       player1.class = new Gauntlet.GuildHall.Berserker();
          break;

      case "Monk":
       player1.class = new Gauntlet.GuildHall.Monk();
          break;

      case "Wizard":
       player1.class = new Gauntlet.GuildHall.Wizard();
          break;

      case "Sorcerer":
       player1.class = new Gauntlet.GuildHall.Sorcerer();
          break;

      case "Shaman":
       player1.class = new Gauntlet.GuildHall.Shaman();
          break;

      case "Conjurer":
       player1.class = new Gauntlet.GuildHall.Conjurer();
          break;

      case "Surprise Me":
       // player1.generateClass();
          break;    
      default:
        
        // console.log(alert("Please select a Character"));
        
    }
})

    //Creating Weapons Options
    //Fighter: Daggar, Broad Sword, War Axe
    //Mage: Spell

$("#weapon_button").click(function () {
  console.log(currentClassName);
  if (currentClassName === "Warrior" || currentClassName === "Valkyrie" || currentClassName === "Berserker" || currentClassName === "Monk") {
    console.log("you picked figher");
    $("#mage_spell").addClass("hidden");
  }

  if (currentClassName === "Shaman" || currentClassName === "Wizard" || currentClassName === "Conjurer" || currentClassName === "Sorcerer") {
    console.log("you picked mege");
    $("#fighter_weapon").addClass("hidden");
  }

  if (currentClassName === "Thief" || currentClassName === "Ninja" || 
    currentClassName === "Assassin") {
    console.log("you picked stealth");
    $("#mage_spell").addClass("hidden");
  }

})

var currentWeaponName;

 $(".weapon__link").on("click", function(e) {
    currentWeaponName = $(event.currentTarget).children(".btn__weapon__text").html()
    console.log("currentWeaponName", currentWeaponName);
  })



  $("#fight_button").click(function() {
    console.log("FIGHT!!!!");
    console.log("currentWeaponName", currentWeaponName);
    switch(currentWeaponName) {

      case "Dagger":
         player1.weapon = new Dagger();
          console.log("player1", player1);
          break;
      case "Broad Sword":
            player1.weapon = new BroadSword();
            console.log("player1", player1);
            break;
      case "War Axe":
            player1.weapon = new WarAxe();
            console.log("player1", player1);
            break;
            default:
    }
  })

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

  