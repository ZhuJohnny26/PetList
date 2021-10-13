import axios from 'axios'

//Action types
const GET_PETS = 'GET_PETS'
const FILTER_PETS = 'FILTER_PETS'

const getPets = pets => ({
    type: GET_PETS,
    pets
})

const filterPets = pets => ({
    type: FILTER_PETS,
    pets
})

export const getPetsThunk = () => async (dispatch, getState ) => {
    try {
        let result = await axios('http://eulerity-hackathon.appspot.com/pets')
        dispatch(getPets(result.data))
    } catch (error) {
        console.error('error in getpetsthunk', error)
    }
}

export const filterPetsThunk = (filter) => (dispatch, getState) => {
    let pets = getState()
    filter = filter.toLowerCase()
    pets = pets.filter(pet => pet.description.toLowerCase().includes(filter) || pet.title.toLowerCase().includes(filter) )
    console.log(pets, filter)
    dispatch(filterPets(pets))
}

export default function petsReducer(state = [], action){
    switch(action.type){
        case GET_PETS:
            return action.pets
        case FILTER_PETS:
            return action.pets
        default:
            return state
    }
}