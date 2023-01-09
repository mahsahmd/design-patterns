import React from 'react'
import styled from 'styled-components'
import useThemeContext from '../useThemeContext';

const ToggleButton = () => {
    const { theme, toggleTheme } = useThemeContext();
    return (
        <>
            <Button theme={theme} onClick={() => toggleTheme()}>
                {theme}
            </Button>
        </>
    )
}

const Button = styled.div`
    width: 50px;
    height: 50px;
    background-color:${props => props.theme === 'dark' ? 'blue' : 'red'};
    color:${props => props.theme === 'dark' ? '#FFF' : '#000'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin-top: 16px;
    cursor: pointer;

`;
export default ToggleButton