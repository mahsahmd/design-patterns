import React, { useState } from 'react'

const Input = (props) => {
    const [value, setValue] = useState('')
    return (
        <>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Temp"
            />
            {props.children(value)}
        </>
    )
}
const Klevin = ({ value = 0 }) => {
    return <div>{Number(value) + 273.15}k</div>
}
const Fahrenheit = ({ value = 0 }) => {
    return <div>{(Number(value) * 9) / 5 + 32} Fk</div>
}
const RenderProps = () => {
    return (
        <div>
            <h1>Temperature conventer</h1>
            <Input
            >
                {value => (
                    <>
                        <Klevin value={value} />
                        <Fahrenheit value={value} />
                    </>
                )}
            </Input>
        </div>
    )
}

export default RenderProps