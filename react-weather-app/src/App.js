import React, { Component } from "react";

import cssClass from "./App.css";
import Title from "./components/Title/Title";
import SearchForm from "./containers/SearchForm/SearchForm";
import Footer from "./components/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div className={cssClass.App}>
                <Title />
                <SearchForm />
                <Footer />
            </div>
        );
    }
}

export default App;
