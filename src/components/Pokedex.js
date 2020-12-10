import { Component} from 'react';
import Axios from 'axios';


class Pokedex extends Component {
    constructor() {
        super()
        this.state = {
            pokemonName: 'pikachu',
            pokemonImage: ''
        }
    }

    componentDidMount() {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`)
        .then((res) => {
            this.setState({
                pokemonImage: res.data.sprites.front_default
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.pokemonName === '') {
            return
        } 

        if(prevState.pokemonName === this.state.pokemonName){
            return
        }
        
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`)
        .then((res) => {
            console.log('success')
            this.setState({
                pokemonImage: res.data.sprites.front_default
            })
        })
        .catch((err) => {
            console.log('failure')
            this.setState({
                pokemonImage: ''
            })
    })
}


render() {
    return(
        <div>
            {/* input component

                state to govern the input component

                state to hold the image; this will be a URL string that 
                will become the src of the img tag.

                img tag that references the image stored in state

            */}
            <h1>Fisher-Price My First Pokedex</h1>
            <input value={this.state.pokemonName} onChange={(e) => 
            {this.setState({pokemonName: e.target.value.toLowerCase()})}}
            />
            <br />
            <img src={this.state.pokemonImage} alt="Pokemon"></img>
            
        </div>
    )
}
}


export default Pokedex;