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

      case "Thief":
       player1.class = new Gauntlet.GuildHall.Thief();
          break;

      case "Ninja":
       player1.class = new Gauntlet.GuildHall.Ninja();
          break;

      case "Assassin":
       player1.class = new Gauntlet.GuildHall.Assassin();
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
      case "War Axe":
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

$(".attack-button").click(function fight() { 
      // (".characterImg").addClass("spell")
  
  player1.health -= orc.weapon.damage;
  orc.health -= player1.weapon.damage;
  
    console.log("Orc.weapon.damage", orc.weapon.damage);
    console.log("Orc.weapon.damage", orc.health);
    console.log("player1.weapon.damage", player1.weapon.damage);
    console.log("player1.weapon.damage", player1.health);
    var playerOutput = "";
    var enemyOutput = "";
    // $(".playerStat").html("")

    playerOutput = `<p>${player1.playerName} the ${player1.class}</p>` +
                   `<div class="health">Health: ${player1.health}</div>`;
    $(".playerStat").html(playerOutput);

    enemyOutput = `<p>${orc.monsterName}</p>` +
                  `<div class="health">Health: ${orc.health}</div>`;
    $(".enemyStat").html(enemyOutput);

    if (player1.health <=0 && player1.health < orc.health) {
      alert(`${player1.playerName}` + " LOOSES!");
      $(".attack-button").addClass("hide");
    }
    if (orc.health <= 0 && orc.health < player1.health) {
      alert(`${player1.playerName}` + " WINS!");
      $(".attack-button").addClass("hide");
    }

  // if (currentWeaponName === "Sphere" || "Avada Kedavera" || "Attack Dog" || "Lightning" || "Noah's Flood" || "Gaia's Revenge") {

    $("#spell").removeClass("hide");

    var IntID = setInterval(moveCircle, 1);
    var leftOffset = 400;
    function moveCircle() {
       $("#spell").offset({ left: leftOffset });
        leftOffset = leftOffset + 5;
        if (leftOffset > 1000) {
          $(".battleground").effect( "highlight", "fast" );
          $(".enemyStat").effect( "bounce", "fast" );
          $("#spell").addClass("hide");
          clearInterval(IntID);
        }
    };    
    clearInterval(moveCircle);
    
    // }

    // else if (currentWeaponName === "Broad Sword" || "War Axe" || "Dagger") {

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
  // }


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





var orc;
  function fightScreen() { 
    console.log("My health",player1.health);
    console.log("What is my name?", player1.playerName);
    console.log("Player Class", player1.class);
    
    orc = new Gauntlet.Combatants.Orc();
    orc.setWeapon(new BroadSword());
    orc.generateClass();
    orc.playerName = "MyNameOrc";
    console.log(orc.toString());
    var playerOutput = "";
    var enemyOutput = "";
    // $(".playerStat").html("")

    playerOutput = `<p>${player1.playerName} the ${player1.class}</p>` +
                   `<div class="health">Health: ${player1.health}</div>`;
    $(".playerStat").html(playerOutput);

    enemyOutput = `<p>${orc.monsterName}</p>` +
                  `<div class="health">Health: ${orc.health}</div>`;
    $(".enemyStat").html(enemyOutput);

};
// Plant.prototype.decreaseHeight = function(shrinkage){
//   // 7 -- decreaseHeight should decrease the value of the height property by the amount passed in as an argument.
//   this.height -= shrinkage;
// };

var player1Health = function() {
  console.log("player1.health", player1.health);
  return player1.health; 
}





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

  