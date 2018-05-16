import React from "react"
import { getGenerations } from "../api/GameApi"
import { getPokemons, getPokemonByUrl } from "../api/PokemonApi"
import CategoryList from "../components/CategoryList";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    constructor(props) {
        super(props);

        this.state = {
            generations: [],
            pokemons: []
        }
    }

    componentDidMount() {
        getGenerations()
            .then(response => this.setState({ generations: response.results }))
            .catch(error => console.log(error))

        getPokemons()
            .then(response => {
                const promises = response.results.map(result => getPokemonByUrl(result.url))
                return Promise.all(promises)
            })
            .then(pokemons => this.setState({ pokemons: pokemons }))
            .catch(error => console.log(error))
    }

    render() {
        const { generations, pokemons } = this.state
        return (
            <CategoryList
                generations={generations}
                pokemons={pokemons}
                handleNavigation={this.handleNavigation}
            />
        );
    }

    handleNavigation = (routeName, params) => {
        const { navigation } = this.props
        navigation.navigate(routeName, params)
    }

}

export default HomeScreen
