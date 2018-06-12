import React, { PureComponent } from "react";
import axios from "axios";

import SearchResults from "../../components/SearchResult/SearchResult";
import cssClass from "./SearchForm.css";

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
            .get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.countryCode}&appid=${this.state.apiKey}&units=metric`)
            .then(response =>
                this.setState({
                    result: response.data,
                    showResult: true
                })
            )
            .catch(error => {
                this.setState({
                    result: null,
                    showResult: false
                });
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <input
                    className={cssClass.input}
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={this.searchTextHandler}
                    value={this.state.city}
                />
                <br />
                <input
                    className={cssClass.input}
                    type="text"
                    name="countryCode"
                    placeholder="Country Code"
                    onChange={this.searchTextHandler}
                    value={this.state.countryCode}
                />
                <br />
                <button
                    className={cssClass.SearchButton}
                    onClick={this.apiCallHandler}
                >
                    Search
                </button>
                {/* Show Result */
                this.state.showResult ? (
                    <SearchResults result={this.state.result} />
                ) : null}
            </div>
        );
    }
}

export default SearchForm;
