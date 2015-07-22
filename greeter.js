function Greeter() {
  this.greet = "Hello world";

  this.exec = function() {
    console.log(this.greet);
  };
}

module.exports = Greeter;
