const student = {
  name: "ali",
  daysAttented: ["sat", "sun", "mon"],
  getName: function () {
    return this.name;
  },
  getNumDaysAttented: function () {
    return this.daysAttented.length;
  },
  addAttendanceDay: function (day) {
    this.daysAttented.push(day);
    return this.daysAttented;
  },
};

console.log(this);
console.log(student.getName());
console.log(student.getNumDaysAttented());
console.log(student.addAttendanceDay("tue"));
console.log(student.getNumDaysAttented());

const boundStudent = student.getName.bind({ name: "hassan" });
console.log(boundStudent());
console.log(
  student.getNumDaysAttented.bind({
    name: "hassan",
    daysAttented: ["sat", "sun", "mon"],
  })()
);

const arr = [1, 2, 3, 100];
console.log(Math.max(...arr));
// apply takes the arguments as an array
console.log(Math.max.apply(null, arr));
// call has the default behavior
console.log(Math.max.call(null, ...arr));

const car = {
  color: "black",
  position: [0, 0],
  move: function (x, y) {
    this.position = [x, y];
    return this.position;
  },
};

console.log(car.position);
console.log(car.move(10, 2));
console.log(car.position);

console.log(car.move.call({ position: [30, 30] }, 10, 20));
console.log(car.move.apply({ position: [30, 30] }, [10, 20]));

console.log(car.position);

const call = {
  caller: "mom",
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

console.log(call.says());
