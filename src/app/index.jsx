import React from 'react';
import { render } from "react-dom";


class App extends React.Component {
    render() {
        const style = {
            textAlign: "center",
            fontSize: "24px"
        };
        return <div style={style}>Hello World</div>;
    }
}

render(<App/>, document.getElementById("app"))
