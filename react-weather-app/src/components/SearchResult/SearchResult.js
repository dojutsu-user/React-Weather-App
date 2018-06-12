import React from "react";

import cssClass from "./SearchResult.css";

const searchResult = props => {
    return (
        <div className={cssClass.bg}>
            <br />
            Location: {props.result.name}, {props.result.sys.country}
            <br />
            Temperature: {props.result.main.temp}° C
            <br />
            Humidity: {props.result.main.humidity}
            <br />
            Condition: {props.result.weather[0].main}
            <br />
        </div>
    );
};

export default searchResult;
