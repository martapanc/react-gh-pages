import React from "react";

function NotFound() {
    return <section className="p3 p-lg-3">
        <h1>Whoopsie :(</h1>
        <div>
            <p>Sorry, the page you're looking for wasn't found on this site.</p>
            <p>Go back to the <a href="/">homepage</a>.</p>
        </div>
    </section>;
}

export default NotFound;
