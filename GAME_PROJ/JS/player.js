let player;

function Player(character, health, ki, strength, agility, speed){
  this.character = character;
  this.health = health;
  this.ki = ki;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

let PlayerMoves = {
  calcAttack: function(){
    //determins the first attacker
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    //player will attack
  let playerAttack = function(){
    let calcBaseDamage;

    if (player.ki > 0){
      calcBaseDamage = player.strength * player.ki / 1000;
    }
    else{
      calcBaseDamage = player.strength * player.agility / 1000;
    }
    let offsetDamage = Math.floor(Math.random * Math.floor(10));
    let calcOutputDamage = calcBaseDamage + offsetDamage;
    //The amount of attacks
    let numberOfHits = Math.floor(Math.random * Math.floor(player.agility / 10) / 2 + 1);
    
    let attackValues = [calcOutputDamage, numberOfHits];
    return attackValues;
  }
  //Enemy will attack
  let enemyAttack = function(){
    let calcBaseDamage;

    if (enemy.ki > 0){
      calcBaseDamage = enemy.strength * enemy.ki / 1000;
    }
    else{
      calcBaseDamage = enemy.strength * enemy.agility / 1000;
    }
    let offsetDamage = Math.floor(Math.random * Math.floor(10));
    let calcOutputDamage = calckBaseDamage + offsetDamage;
    //The amount of attacks
    let numberOfHits = Math.floor(Math.random * Math.floor(enemy.agility / 10) / 2 + 1);
    
    let attackValues = [calcOutputDamage, numberOfHits];
    return attackValues;
  }
  //getting the player and enemy's health
  let getPlayerHealth = document.querySelector('.health-player');
  let getEnemyHealth = document.querySelector('.health-enemy');
  //Initiate atack order
  if (getPlayerSpeed >= getEnemySpeed){
    let playerAttackValues = playerAttack();
    let totalDamage = playerAttackValues[0] * playerAttackValues[1];
    enemy.health = enemy.health - totalDamage;
    alert ("you hit" + playerAttackValues[0] +"damage"+playerAttackValues[1]+"times");
    if (enemy.health <= 0){
      alert("you win! if you want to play again refresh the browser");
      getPlayerHealth.innerHTML = "HEALTH:" + player.health;
      getEnemyHealth.innerHTML = "HEALTH: 0";
    }
    else {
      getEnemyHealth.innerHTML = "HEALTH:" + enemy.health;
      //Enemy will attack
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      alert ("Enemy hit"+enemyAttackValues[0]+"damage"+enemyAttackValues[1]+"times");
      if (player.health <= 0){
        alert("you win! if you want to play again refresh the browser");
        getPlayerHealth.innerHTML = "HEALTH: 0";
        getEnemyHealth.innerHTML = "HEALTH:" + enemy.health;
      }
      else{
        getPlayerHealth.innerHTML = "HEALTH:" + player.health;
      }
    }
  }  
  }
   
}