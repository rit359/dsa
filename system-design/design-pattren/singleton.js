/**
The Singleton Design Pattern is a creational design pattern that ensures only one instance of a class is created throughout the application and provides a global point of access to that instance.
*/

class Config {
  constructor() {
    // if instance already exists, return it
    if (Config.instance) {
      return Config.instance;
    }

    // otherwise initialize
    this.config = { appName: "Test" };

    // store instance
    Config.instance = this;
  }
}

const config1 = new Config();
const config2 = new Config();

console.log(config1 === config2); // true
console.log(config1.config); // { appName: 'Test' }

