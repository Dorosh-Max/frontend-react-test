import React from "react";
import ReactDOM from "react-dom";

const link = React.createElement("a", { href: "https://www.google.com" },
    "посилання на гугл"
);

ReactDOM.render(link, document.getElementById("root"));