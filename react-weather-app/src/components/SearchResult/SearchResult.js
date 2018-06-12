import React from "react";

const searchResult = props => {
    return (
        <div>
            <br />
            Location: {props.result.name}, {props.result.sys.country}
            <br />
            Temperature: {props.result.main.temp}
            <br />
            Humidity: {props.result.main.humidity}
            <br />
            Condition: {props.result.weather[0].main}
            <br />
        </div>
    );
};

export default searchResult;
