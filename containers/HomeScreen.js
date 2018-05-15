import React from "react"
import GenerationList from "../components/GenerationList"
import { getGenerations } from "../api/GameApi"
import {StyleSheet} from "react-native"

class HomeScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            generations: [],
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
    }

    render() {
        return (
            <GenerationList
                generations={this.state.generations}
            />
        );
    }


}

export default HomeScreen
