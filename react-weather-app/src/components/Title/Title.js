import React from "react";

import cssClass from "./Title.css";

const title = () => {
    return (
        <div className={cssClass.TitleBlock}>
            <p className={cssClass.heading}>Weather Finder</p>
            <p className={cssClass.subheading}>A Simple ReactJS Weather App</p>
        </div>
    );
};

export default title;
