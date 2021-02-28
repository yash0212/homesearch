import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateCity(this.state.city);
    }

    render() {
        return (
            <nav className="nav p-4 text-2xl flex justify-between bg-green-500">
                <div className="brand text-white">HomeSearch</div>
                <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.city} onChange={this.handleChange} placeholder="Search by city" className="border-gray-50 text-lg px-2 py-1 rounded focus:outline-none" />
                </form>
                </div>
            </nav>
        )
    }
}

export default Header;