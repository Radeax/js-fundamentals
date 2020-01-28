// 1 - Original Code
console.log(hello);
var hello = 'world';

// 1 - Hoisted Code
var hello;
console.log(hello);
hello = 'world';

// 2 - Original Code
var needle = 'haystack';
test();
function test() {
  var needle = 'magnet';
  console.log(needle);
}

// 2 - Hoisted Code
var needle;
function test() {
  var needle = 'magnet';
  console.log(needle);
}
needle = 'haystack';
test();

// 3 - Original Code
var brendan = 'super cool';
function print() {
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);

// 3 - Hoisted Code
var brendan;
function print() {
  brendan = 'only okay';
  console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

// 4 - Original Code
var food = 'chicken';
console.log(food);
eat();
function eat() {
  food = 'half-chicken';
  console.log(food);
  var food = 'gone';
}

// 4 - Hoisted Code
var food;
function eat() {
  var food;
  food = 'half-chicken';
  console.log(food);
  food = 'gone';
}
food = 'chicken';
console.log(food);
eat();

// 5 - Original Code
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
}
console.log(food);

// 5 - Hoisted Code
var mean;
mean();
console.log(food);
mean = function () {
  var food;
  food = "chicken";
  console.log(food);
  food = "fish";
  console.log(food);
}
console.log(food);

// 6 - Original Code
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);

// 6 - Hoisted Code
var genre;
function rewind() {
  var genre;
  genre = "rock";
  console.log(genre);
  genre = "r&b";
  console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

// 7 - Original Code
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

// 7 - Hoisted Code
function learn() {
  var dojo;
  dojo = "seattle";
  console.log(dojo);
  dojo = "burbank";
  console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

// 8 - Original Code
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  }
  else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}

// 8 - Hoisted Code
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  }
  else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
