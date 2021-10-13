import styled from'styled-components'
import {StyledImage} from './StyledImage'
import {Link} from 'react-router-dom'

function PetContainer(props){
    let pet = props.pet
    return (
        <div className={props.className} >
            { props.images[pet.title] ? <input type='checkbox' name='checkbox'  className={'checkboxes'} onClick={(event) => props.select(pet.title, pet.url, event.target.checked)} defaultChecked={true} autoComplete="off" />
                : <input type='checkbox' name='checkbox'  className={'checkboxes'} onClick={(event) => props.select(pet.title, pet.url, event.target.checked)} autoComplete="off"  />
            }
            <Link to={`/pets/` + props.index} className='links' >
            <StyledImage src={pet.url} alt={pet.description}  ></StyledImage>
            <h3>{pet.title}</h3>
            </Link>
        </div>

    )
}

export const StyledPetContainer = styled(PetContainer)`
    inline-size: 342px;
    height: 400px;
    width: 354px;
    overflow-wrap: break-word;
    background-color: rgb(224, 195, 162);
    display:flex;
    text-align: center;
    flex-direction: column;
    margin:12px;
    border-radius: 5px;
    border: 1px darkblue solid;
    word-wrap: normal;
    
`