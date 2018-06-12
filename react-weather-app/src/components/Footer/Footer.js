import React from "react";

import cssClass from "./Footer.css";

const footer = () => {
    return (
        <div className={cssClass.Color}>
            Made With ❤️ By{" "} 
            <a className={cssClass.Name} href="https://github.com/dojutsu-user">
                Vaibhav Gupta
            </a>
        </div>
    );
};

export default footer;
