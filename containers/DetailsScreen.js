import React from "react"
import PokemonDetails from "../components/PokemonDetails"
import { capitalize } from '../common/utils/StringUtils'

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        console.log(params)
        return {
            title: params ? capitalize(params.name) : 'Details',
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.navigation.state.params
        }
    }

    render() {
        const { data } = this.state
        return (
            <PokemonDetails data={data}/>
        );
    }

}

export default DetailsScreen