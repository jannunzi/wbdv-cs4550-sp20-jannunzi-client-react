import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";

const Page1 = () =>
    <div>
        <h1>Page 1</h1>
        <Link to="/page2">
            Page 2
        </Link>
    </div>

export default Page1
