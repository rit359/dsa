/**
 Factory Design Pattern - is a creational design pattern that provides a way to create objects without exposing the creation logic to the client.
Instead of using the new keyword directly, the client calls a factory method, which decides which subclass or object to create.
*/

class Vichle {
    move(){
    } 
}

class Car implements Vichle{
     move(){
         console.log("moving car");
    }
}

class Bike implements Vichle{
     move(){
         console.log("moving Bike");
    }
}

class vichleFactory{
    
    static getVichle(type){
        switch(type){
            case 'car':
                return new Car();
            case 'bike':
                return new Bike();
            default:
            return null;
        }
    }
}

const vichle = vichleFactory.getVichle("bike");
console.log(vichle.move());
