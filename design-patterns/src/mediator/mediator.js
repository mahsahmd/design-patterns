export class Chatroom{
    logMessage(user,message){
        const sender = user.getName();
        console.log(sender,message);

    }
}

class User {
    constructor(name,chatroom){
        this.name = name;
        this.chatroom = chatroom;
    }
    getName(){
        return this.name;
    }
    send(message){
        this.chatroom.logMessage(this,message)
    }
}

const chatroom = new Chatroom();

const user1 = new User('mahsa',chatroom);
const user2 = new User('hmd',chatroom);

user1.send('hi');
user2.send('hiii');