// 挑戰使用物件的寫法

objMain();

function objMain() {
  const race = {
    turtle: {
      distance: 1000,
      speed: 0.28,
      reach: function () {
        return this.distance / this.speed;
      },
    },

    rabbit: {
      distance: 1000,
      speed: 20,
      reach() {
        let Time = 0;
        let beginDistance = 0;

        while (beginDistance < this.distance) {
          if (Time % 5 === 0) {
            beginDistance = beginDistance + this.speed - 1;
            Time += 1 + 1 / this.speed;
          } else {
            beginDistance += this.speed;
            Time += 1;
          }
        }

        return Time;
      },
    },
  };

  const result = race.turtle.reach() - race.rabbit.reach();

  console.log("這隻兔子可以偷懶" + Math.floor(result) + "秒");
}
