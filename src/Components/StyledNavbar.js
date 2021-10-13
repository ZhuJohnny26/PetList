import styled from'styled-components'
import {StyledButton} from './StyledButton'

function Navbar(props){
    return (
        <div className={props.className} >
            <input name='input' onChange={props.handleChange} ></input>
            <StyledButton onClick={props.setFilter} >Filter</StyledButton>
            <StyledButton onClick={props.reset} >Reset</StyledButton>
            <StyledButton onClick={props.download} >download</StyledButton>
            <StyledButton onClick={props.selectAll} >Select All</StyledButton>
            <StyledButton onClick={props.clear} >Clear</StyledButton>
        </div>
    )
}

export const StyledNavbar = styled(Navbar)`

    background-color: rgb(177, 161, 117);
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-content: space-between;
    
`