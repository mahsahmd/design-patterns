let counter = 0;
let instance;
class Count{
    constructor() {
        if(instance){
            throw new Error('already exist')
        }else{
            instance = this 
        }
    }
    getInstance(){
        return this;
    }
    getCount(){
        return this.count;
    }
    increament(){
        return ++counter;
    }
    decreament(){
        return --counter;
    }
}

export const singletonCounter = Object.freeze(new Count());