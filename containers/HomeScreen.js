import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPokemonsAction } from "../actions/pokemon-actions"
import { getGenerationsAction } from "../actions/game-actions"
import CategoryList from "../components/CategoryList";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    componentWillMount() {
        this.refresh()
    }

    refresh = () => {
        const {getPokemons, getGenerations} = this.props
        getPokemons()
        getGenerations()
    }

    render() {
        const { generations, pokemons, isLoading } = this.props
        return (
            <CategoryList
                generations={generations}
                pokemons={pokemons}
                handleNavigation={this.handleNavigation}
                handleRefresh={this.refresh}
                isLoading={isLoading}
            />
        );
    }

    handleNavigation = (routeName, params) => {
        const { navigation } = this.props
        navigation.navigate(routeName, params)
    }

}

// Together with connect(), expose required parts of the Redux store as props.
const mapStateToProps = ({ pokemonState, gameState }) => ({
    pokemons: pokemonState.pokemons,
    generations: gameState.generations,
    isLoading: pokemonState.isLoading && gameState.isLoading
})

// Together with connect(), have the action creators bound to dispatch and exposed as props.
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getPokemons: getPokemonsAction,
        getGenerations: getGenerationsAction
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
