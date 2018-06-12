import React, { Component } from "react";

import "./App.css";
import Title from "./components/Title/Title";
import SearchForm from "./containers/SearchForm/SearchForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Title />
                <SearchForm />
            </div>
        );
    }
}

export default App;
