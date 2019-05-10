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
        player = new Player(character, 200, 0, 200, 100, 50);
        break;
      default:
    }
  },
  setPreFight: function(){

  }
}
