import React from "react";

import cssClass from "./Footer.css";

const footer = () => {
    return (
        <div className={cssClass.Color}>
            Made With ❤️ By{" "}
            <a className={cssClass.Name} href="https://github.com/dojutsu-user">
                Vaibhav Gupta
            </a>{" "}
            |{" "}
            <a className={cssClass.Github} href="https://github.com/dojutsu-user/React-Weather-App">
                <i class="fab fa-github fa-1x" />
            </a>
        </div>
    );
};

export default footer;
