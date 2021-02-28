import React from 'react';
import Header from './components/Header';
import List from './components/List';
import axios from 'axios';
import { API_KEY } from './constants/keys';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listings: []
        }
    }

    updateCity = (cityName) => {
        axios.get(API_KEY+"?city="+cityName).then(resp => {
            if(resp.status === 200) {
                this.setState({
                    listings: resp.data
                })
            }
        }).catch(err => {
            console.error("City fetch APi error", err)
        })
    }

    componentDidMount() {
        this.updateCity("");
    }

    render() {
        return (
            <div className="App">
                <Header updateCity={this.updateCity} />
                <List listings={this.state.listings} />
            </div>
        );
    }
}

export default App;
