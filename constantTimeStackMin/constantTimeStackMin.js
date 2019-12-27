/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  class Stack{

  	constructor(){
  		this.storage = {};
  		this._size = 0;
  		this._min = null
  	}

 // add an item to the top of the stack
    push (value) {
    	if(this._min != null)
    	   { if(value < this.storage[this._size-1])
              this._min = value;
    	}else{
    		this._min =value ;
    	}
    	this.storage[this._size] = value ;
    	this._size++;
    };

  // remove an item from the top of the stack
   pop() {

   	  delete this.storage[this._size];
   	  this._size--
    };

  // return the number of items in the stack
    size() {
    	return this._size;
    };
  
  // return the _minimum value in the stack
    min() {
       return this._min;
    };

  }
 

