import React from 'react';
import { render } from 'react-dom';

const appStyle = {
    textAlign: 'center',
    fontSize: '24px',
};

function App() {
    return <div style={appStyle}>Hello World</div>;
}

render(<App />, document.getElementById('app'));
