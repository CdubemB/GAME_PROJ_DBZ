let GameManager = {
  setGameStart: function(character){
    this.resetPlayer(character);
    this.setPreFight();
  },
  resetPlayer: function(character){
    switch (character){
      case "Vegeta":
        player = new Player(character, 200, 0, 200, 100, 50);
        break;
      case "Goku":
        player = new Player(character, 100, 0, 100, 150, 200);
        break;
      case "Frieza":
        player = new Player(character, 80, 200, 50, 200, 50);
        break;
      case "Trunks":
        player = new Player(character, 200, 0, 200, 80, 70);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = "<img src='Assets/" + character + ".jpg' class='img-avatar'><div><h3>"+ character +"</h3><p class='health-player'>HEALTH:  "+ player.health + " </p><p>KI:  "+ player.ki + " </p><p>STRENGTH:  "+ player.strength + " </p><p>AGILITY:  "+ player.agility + " </p><p>SPEED:  "+ player.speed+ " </p></div>"; //Adding a section where it shows character along with its stats
  },
  setPreFight: function(){

    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    //Collecting content from HTML
    getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
    getArena.style.visibility = "visible";
    //Adding text to these content and making them visible
  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    // Create enemy!

    let enemy00 = new Enemy("saibamen", "100", "0", "50", "100", "100");
    let enemy01 = new Enemy("grunt", "200", "0", "150", "80", "150");

    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnemy){
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
    }
   getHeader.innerHTML = '<p>Task: choose your move </p>';
   getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()"> Attack!</a>';
   getEnemy.innerHTML = '<img src="Assets/'+  enemy.enemyType + '.jpg" alt=" '+ enemy.enemyType +'" class="img-avatar"><div><h3>' + enemy.enemyType +  ' </h3><p class="health-enemy">Health: ' + enemy.health + '</p> <p class="ki-enemy">Ki: ' + enemy.ki + '</p><p class="strength-enemy">Strength: ' + enemy.strength + '</p><p class="agility-enemy">Agility: ' + enemy.agility + '</p><p class="health-enemy">Speed: ' + enemy.speed + ' </p></div> ';
  } 
  //Initiate attack order

}
 
