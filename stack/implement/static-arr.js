class myStack {
   
    
           constructor(){
    	this.arr = [];
   	 this.top = -1;
    	this.capacity = 100;
}
	
	push(value){
	    if(this.arr.length < this.capacity){
	    this.top = this.top+1;
	    this.arr.push(value)
	    }
	   
	}
	
	pop(){
	    if(this.top >=0){
	    this.top = this.top-1;
	    this.arr.pop()
	    }
	   
	}
	
	isEmpty(){
	    return this.top <0;
	}
	
	pick(){
	    return this.arr[this.top]
	}
	size(){
	    return this.top+1;
	}
}

const stack = new myStack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pick());
stack.pop();
console.log(stack.pick());
console.log(stack.isEmpty());
console.log(stack.size())
