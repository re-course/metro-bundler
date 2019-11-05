import * as React from 'react';
import * as ReactDOM from 'react-dom';

function HelloWorld() {
    return (
        <h1>TypeScript works !!!</h1>
    );
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);