import React from 'react'
import ToggleButton from './components/ToggleButton'
import ThemeProvider from './ThemeProvider'

const Provider = () => {
    return (
        <ThemeProvider>
            <p>provider pattern</p>
            <ToggleButton></ToggleButton>
        </ThemeProvider>
    )
}


export default Provider