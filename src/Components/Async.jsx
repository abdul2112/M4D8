import {Component} from 'react'

let URL = "https://www.omdbapi.com/?apikey=2bcd7b88&s="

class Async extends Component {



    componentDidMount = async () => {
        const response = await fetch(URL + "spiderman")
        const results = await response.json()

        console.log(results)
    }

    render() {
        return
    }
}

export default Async