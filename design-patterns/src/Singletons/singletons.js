// let counter = 0;
// let instance;
// class Count{
//     constructor() {
//         if(instance){
//             throw new Error('already exist')
//         }else{
//             instance = this 
//         }
//     }
//     getInstance(){
//         return this;
//     }
//     getCount(){
//         return counter;
//     }
//     increament(){
//         return ++counter;
//     }
//     decreament(){
//         return --counter;
//     }
// }

// export const singletonCounter = Object.freeze(new Count());

// the code above is overkill can easily  use objects
export let count = 0;
const counter = { 
    increament() {
      return ++count;
    },
    decreament() {
      return  --count;
    }
}

export const singletonCounter = Object.freeze(counter)