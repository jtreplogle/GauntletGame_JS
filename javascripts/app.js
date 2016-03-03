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
    e.preventDefault();
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
    console.log("you picked mage");
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
  e.preventDefault()
  currentWeaponName = $(event.currentTarget).children(".btn__weapon__text").html()
    console.log("currentWeaponName", currentWeaponName);
  })



  $("#fight_button").click(function() {
    console.log("FIGHT!!!!");
    console.log("currentWeaponName", currentWeaponName);
    fightScreen();
    switch(currentWeaponName) {
      case "Dagger":
         player1.weapon = new Dagger();
          console.log("player1", player1);
          fightScreen();
          break;
      case "Broad Sword":
            player1.weapon = new BroadSword();
            console.log("player1", player1);
            fightScreen();
            break;
      case "War Axe"key: "value", 
            player1.weapon = new WarAxe();
            console.log("player1", player1);
            fightScreen();
            break;
      case "Sphere":
            player1.weapon = new Gauntlet.SpellBook.Sphere();
            console.log("player1", player1);
            fightScreen();
            break;
      case "Avada Kedavra":
            player1.weapon = new Gauntlet.SpellBook.DeathSpell();
            console.log("player1", player1);
            fightScreen();
            break;
      case  "Attack Dog":
            player1.weapon = new Gauntlet.SpellBook.Pet();
            console.log("player1", player1);
            fightScreen();
            break;
      case "Lightning": 
            player1.weapon = new Gauntlet.SpellBook.RaidensPower();
            console.log("player1", player1);
            fightScreen();
            break;
      case "Noah's Flood": 
            player1.weapon = new Gauntlet.SpellBook.NoahsArk();
            console.log("player1", player1);
            fightScreen();
            break;
      case "Gaia's Revenge": 
            player1.weapon = new Gauntlet.SpellBook.Gaia();
            console.log("player1", player1);
            fightScreen();
            break;            
    }
  })

  function fightScreen() { 
    console.log(player1.health);

    var orc = new Gauntlet.Combatants.Orc();
    orc.setWeapon(new BroadSword());
    orc.generateClass();
    orc.playerName = "MyNameOrc";
    console.log(orc.toString());
          
    // var player1 = new Gauntlet.Combatants.Human();
    // player1.class = Gauntlet.GuildHall.Warrior;
    // console.log("player1", player1);
  };

  $(".attack-button").click(function fight() { 
      // (".characterImg").addClass("spell")
  
  
  // $("#spell").removeClass("hide");

  // var IntID = setInterval(moveCircle, 1);
  // var leftOffset = 400;
  // function moveCircle() {
  //    $("#spell").offset({ left: leftOffset });
  //     leftOffset = leftOffset + 5;
  //     if (leftOffset > 1000) {
  //       $(".battleground").effect( "highlight", "fast" );
  //       $(".enemyStat").effect( "bounce", "fast" );
  //       $("#spell").addClass("hide");
  //       clearInterval(IntID);
  //     }
  // };    
  // clearInterval(moveCircle);
  


  var characterInter = setInterval(moveCharacter, 1);
  var leftOffset = 0;
  function moveCharacter() {
     $(".characterImg").offset({ left: leftOffset });
      leftOffset = leftOffset + 5;
      if (leftOffset > 700) {
      
        $(".enemyStat").effect( "bounce", "fast" );
        $(".battleground").effect( "shake", "fast" );
       $(".characterImg").animate({left: "-=700"}, 1);
        clearInterval(characterInter);
      }
  };        

// // var enemySetTimeOut = setTimeout(code, [delay]);
//   var monsterInter = setInterval(moveMonster, 1);
//   var rightOffset = 0;
//   function moveMonster() {
//      $(".enemyImg").offset({ left: rightOffset });
//       rightOffset = rightOffset - 5;
//       if (rightOffset < -700) {
      
//         $(".battleground").effect( "shake", "fast" );
//         $(".playerStat").effect( "bounce", "fast" );

//        $(".enemyImg").animate({left: "+=700"}, 1);
//         clearInterval(monsterInter);
//       }
//   };        
//   clearInterval(moveMonster);


  })



  // var warrior = new Gauntlet.Combatants.Human();
  // warrior.setWeapon(new WarAxe());
  // warrior.generateClass();  // This will be used for "Surprise me" option
  // console.log(warrior.toString());

  // console.log("warrior", warrior);

  // var orc = new Gauntlet.Combatants.Orc();
  // orc.setWeapon(new BroadSword());
  // orc.generateClass();
  // console.log(orc.toString());

  /*
    Test code to generate a spell
   */
  // var spell = new Gauntlet.SpellBook.Sphere();
  // console.log("spell: ", spell.toString());


 
    /*
      Show the initial view that accepts player name
     */
    $("#player-setup").show();

    /*
      When any button with card__link class is clicked,
      move on to the next view.
     */
    $(".card__link").click(function(e) {
      e.preventDefault();;
      var nextCard = $(this).attr("next");
      var moveAlong = false;

      switch (nextCard) {
        case "card--class":
          moveAlong = ($("#player-name").val() !== "");
          break;
        case "card--weapon":
          moveAlong = ($("#player-name").val() !== "");
          break;
        case "card--battleground":
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

  