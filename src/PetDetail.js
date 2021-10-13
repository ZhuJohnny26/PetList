import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {DetailedContainer} from './Components/DetailedContainer'
import {DetailedImage} from './Components/DetailedImage'

function PetDetail (props){
    console.log(props.pet)
    let pet = props.pet
    return (
        <div>
            <Link id='back-arrow' to={'/'}>⤶</Link>
            <DetailedContainer>
                <DetailedImage src={pet.url} ></DetailedImage>
                <h2>{pet.title}</h2>
                <p><b>Description:</b> {pet.description}</p>
                <p><b>URL: </b>{pet.url}</p>
                <p><b>Date created: </b>{pet.created}</p>
            </DetailedContainer>
        </div>
    )
}

const mapStateToProps = state => {
    let index = window.location.href
    index = index.split('/')
    index = index[index.length - 1] 

    return {
        pet: state[index]
    }
}

export default connect(mapStateToProps, null)(PetDetail)