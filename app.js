/********************************************************
*                   JavaScript Objects                  *
* Objects           Properties              Methods     *
* car               car.name = Fiat         car.start() *
*                   car.model = 500         car.drive() *
*                   car.weight = 850kg      car.brake() *
*                   car.color = white       car.stop()  *
* All cars have the same properties, but the property   *
* values differ from car to car.                        *
* All cars have the same methods, but the methods are   *
* performed at different times.                         *
*********************************************************/
var car = "Fiat";
document.getElementById("demo").innerHTML = car;

/********************************************************
*               Objects are variables too.              * ********************************************************/
var car = {
  type:   "Fiat",
  model:  "500",
  color:  "white"
};

document.getElementById("car-type").innerHTML = car.type;

/********************************************************
*                  Objects Definition                   * ********************************************************/
var person = {
  firstName:  "John",
  lastName:   "Doe",
  age:        50,
  eyeColor:   "blue"
};

document.getElementById("person").innerHTML =
person.firstName + " is " + person.age + " years old.";
