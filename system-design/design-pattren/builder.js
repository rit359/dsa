
class Burger {
    
    constructor(){
        this.size = null;
        this.cheese = false;
        this.tamato = false;
        this.topping = false;
    }
    
    
}

class BurgerBuilder {
    
    constructor() {
        this.burger  = new Burger();
    }
    
    setSize(size){
        this.burger.size = size;
        return this;
    }
    
    addCheese(){
        this.burger.cheese = true;
        return this;
    }
    
    addTamato(){
        this.burger.tamato = true;
        return this;
    }
    
    addTopping (){
         this.burger.topping = true;
         return this;
    }
    
     build() {
    return this.burger;
  }

    
    
}

const burger = new BurgerBuilder().setSize("large").addTamato().addTopping().build();

//output
// Burger { size: 'large', cheese: false, tamato: true, topping: true }




console.log(burger);
