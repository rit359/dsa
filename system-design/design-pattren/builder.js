
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


//Example 2 by Pulkit

class Pizza{
    
    private isTamato:boolean;
    private isCheese:boolean;
    private size: string;
    
    static Builder = class {
        private isTamato: boolean = false;
        private isCheese: boolean = false;
        private size: string;
        
        constructor(size:string){
            this.size = size;
        }
        
        addCheese(isAdd){
            this.isCheese = isAdd;
            return this;
        }
        
         addTamato(isAdd){
            this.isTamato = isAdd;
            return this;
        }
        
        build(){
            const pizza = new Pizza();
            pizza.size = this.size;
            pizza.isTamato = this.isTamato;
            pizza.isCheese = this.isCheese;
            return pizza;
        }
    }
}

const pizza = new Pizza.Builder('large').addCheese(true).addTamato(true).build();
console.log(pizza);
