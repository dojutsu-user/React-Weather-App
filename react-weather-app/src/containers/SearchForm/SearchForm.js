import React, { PureComponent } from "react";
import axios from "axios";

import SearchResults from "../../components/SearchResult/SearchResult";

class SearchForm extends PureComponent {
    state = {
        city: "",
        countryCode: "",
        apiKey: "10b3f273e1f35bf786b02ac28b9814b0",
        result: null,
        showResult: false
    };

    searchTextHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    apiCallHandler = () => {
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.countryCode}&appid=${this.state.apiKey}`
            )
            .then(response =>this.setState({
                    result: response.data,
                    showResult: true
                })
            )
            .catch(error => console.log("Error"));
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={this.searchTextHandler}
                    value={this.state.city}
                />
                <input
                    type="text"
                    name="countryCode"
                    placeholder="Country Code"
                    onChange={this.searchTextHandler}
                    value={this.state.countryCode}
                />
                <button onClick={this.apiCallHandler}>Search</button>
                {this.state.showResult ? (
                    <SearchResults result={this.state.result} />
                ) : null}
            </div>
        );
    }
}

export default SearchForm;
