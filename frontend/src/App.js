import React from 'react';
import Header from './components/Header';
import List from './components/List';
import axios from 'axios';
import { API_KEY } from './constants/keys';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listings: [
                {
                    name: "4BHK Raw house",
                    address: "HSR Layout",
                    city: "Bengaluru",
                    price: "17,000",
                    type: "Rental"
                },
                {
                    name: "2BHK Flat",
                    address: "Electronic City Phase 1",
                    city: "Bengaluru",
                    price: "17,00,000",
                    type: "Sale"
                },
            ]
        }
    }

    updateCity = (cityName) => {
        axios.post(API_KEY, {
            cityName
        }).then(resp => {
            if(resp.data.status === 1) {
                this.setState({
                    listings: resp.data.listings
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
