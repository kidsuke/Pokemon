import React from "react"
import { getGenerations } from "../api/GameApi"
import { getPokemons } from "../api/PokemonApi"
import CategoryList from "../components/CategoryList";

class HomeScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            generations: [],
            pokemons: []
        }
    }

    componentDidMount() {
        getGenerations()
            .then(data => {
                this.setState({ generations: data.results })
                console.log(data)
                console.log(this.state)
            })
            .catch(error => console.log(error))

        getPokemons()
            .then(data => {
                this.setState({ pokemons: data.results })
                console.log(data)
                console.log(this.state)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <CategoryList
                generations={this.state.generations}
                pokemons={this.state.pokemons}
            />
        );
    }


}

export default HomeScreen
