let monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

let tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

let tasks = monday.concat(tuesday);

const hourlyRate = 42.45;

const hourDurations = tasks.map(task => task.duration / 60 );
const shortDurations = hourDurations.filter(duration => duration < 2);
const amounts = shortDurations.map(duration => duration * hourlyRate);

let total = 0;
amounts.forEach(amount =>  total += amount);

console.log(`Maartje has earned €${total.toFixed(2)}`);
Raw
 
// ...

let tasks = monday.concat(tuesday);

const hourlyRate = 42.45;

let total = 0;

tasks
  .map(task => task.duration / 60)
  .filter(duration => duration < 2)
  .map(duration => duration * hourlyRate)
  .forEach(amount => total += amount);

console.log(`Maartje has earned €${total.toFixed(2)}`);


// ...

let tasks = monday.concat(tuesday);

const hourlyRate = 42.45;

const total = tasks
  .map(task => task.duration / 60)
  .filter(duration => duration < 2)
  .map(duration => duration * hourlyRate)
  .reduce((wage, amount) => wage + amount, 0)
  .toFixed(2);

console.log(`Maartje has earned €${total}`);

// ...

let tasks = monday.concat(tuesday);

const hourlyRate = 42.45;
const toHours = task => task.duration / 60;
const lessThanTwo = num => num < 2;
const timesRate = rate => duration => duration * rate;
const add = (wage, amount) => wage + amount;

const total = tasks
  .map(toHours)
  .filter(lessThanTwo)
  .map(timesRate(hourlyRate))
  .reduce(add, 0)
  .toFixed(2);

console.log(`Maartje has earned €${total}`);
