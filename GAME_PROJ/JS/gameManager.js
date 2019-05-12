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
        player = new Player(character, 80, 0, 50, 200, 50);
        break;
      case "Trunks":
        player = new Player(character, 200, 0, 200, 80, 70);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = "<img src='Assets/" + character + ".jpg' class='img-avatar'><div><h3>"+ character +"</h3><p>HEALTH:  "+ player.health + " </p><p>KI:  "+ player.ki + " </p><p>STRENGTH:  "+ player.strength + " </p><p>AGILITY:  "+ player.agility + " </p><p>SPEED:  "+ player.speed+ " </p></div>"; //Adding a section where it shows character along with its stats
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

    let enemy00 = new Enemy("saibamen");


  }
}
