
import './App.css';

import React from 'react'
import {StyledPetContainer} from './Components/StyledPetContainer'
import {StyledContainer} from './Components/StyledContainer'
import { saveAs } from "file-saver";
import { connect } from 'react-redux';
import {getPetsThunk, filterPetsThunk} from './Store/pets'
import {StyledNavbar} from './Components/StyledNavbar'

class PetList extends React.Component{
  constructor(){
    super()
    this.state = {
      input: '',
      images: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.setFilter = this.setFilter.bind(this)
    this.reset = this.reset.bind(this)
    this.handleImage = this.handleImage.bind(this)
    this.download = this.download.bind(this)
    this.selectAll = this.selectAll.bind(this)
    this.clear = this.clear.bind(this)
  }

async componentDidMount(){
  if(this.props.pets.length === 0){
    this.props.getPets()  
  }
}
setFilter(){
  this.props.filterPets(this.state.input)
}
reset(){
  this.props.getPets()
  this.setState({input: ''})
  document.getElementsByTagName('input')[0].value = ''

}
handleChange(event){
  this.setState({[event.target.name] : event.target.value})
}
handleImage(title, url, checked){
  if(checked){
    let obj = {...this.state.images, [title] : url}
    this.setState({images: obj})
  }
  else{
    let obj = {...this.state.images}
    delete obj[title]
    this.setState({images: obj})
  }
}
download(){
  for(let key in this.state.images){
    saveAs(this.state.images[key], `${key}.jpeg`)
  }
}
selectAll(){
  let obj = {...this.state.images}
  let pets = this.props.pets
  for(let i = 0; i < pets.length; i++){
    if(!obj[pets[i].title]){
      obj[pets[i].title] = pets[i].url
    }
  }
  this.setState({images: obj})
  //checks all the boxes
  let checkboxes = document.getElementsByName('checkbox')
  for(let i = 0;i<checkboxes.length;i++) {
    checkboxes[i].checked = true;
  }
}
clear(){
  this.setState({images: {}})
  let checkboxes = document.getElementsByName('checkbox')
  for(let i = 0;i<checkboxes.length;i++) {
    checkboxes[i].checked = false;
  }
}

  render(){
    let pets = this.props.pets
    return (
        <div>
          <StyledNavbar handleChange={this.handleChange} setFilter={this.setFilter} reset={this.reset} download={this.download} selectAll={this.selectAll} clear={this.clear} />
          <StyledContainer>
            {pets.map((pet, index) => (
                    <StyledPetContainer pet={pet} select={this.handleImage} index={index} key={pet.title + index} images={this.state.images} ></StyledPetContainer>
            ))}
          </StyledContainer>
        </div>
    )
  }
}

const mapStateToProps = state => (
  {
  pets: state
})

const mapDispatchToProps = dispatch => ({
  getPets: (input) => dispatch(getPetsThunk(input)),
  filterPets: (input) => dispatch(filterPetsThunk(input))
})


export default connect(mapStateToProps, mapDispatchToProps)(PetList);
