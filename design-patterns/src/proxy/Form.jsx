import React, { useState } from 'react'
import { message, userProxy } from './proxy'

const Form = () => {
    const [age, setAge] = useState(userProxy.age);
    const [username, setUsername] = useState(userProxy.username);
    const [messages,setMessages] = useState([]);        
    const onSubmit = () => {
        userProxy.username = username;
        userProxy.age = age
        console.log(message,'================');
        setMessages(message);
    }
    return (
        <div>
            <p>proxy</p>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            <button onClick={onSubmit}>submit</button>
            {
                messages.length > 0 && messages.map((item,index) => <p key={index}>{item.message}</p>)
            }
        </div>
    )
}

export default Form