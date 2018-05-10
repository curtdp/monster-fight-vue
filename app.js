new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack() {
      this.monsterHealth -= this.calculateDamage(3, 10);;

      if (this.monsterHealth <= 0) {
        alert('Вы победили!');
        this.gameIsRunning = false;
        return; // Сразу же выходим из функции чтобы монстр нас не бил когда мы уже победили
      }

      this.playerHealth -= this.calculateDamage(5, 12);

      if (this.playerHealth <= 0) {
        alert('Вы проиграли!');
        this.gameIsRunning = false;
      }
    },
    specialAttack() {

    },
    heal() {

    },
    giveUp() {

    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    }
  }
});