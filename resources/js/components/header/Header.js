import React from 'react';
import ReactDOM from 'react-dom';

function Header() {
    return (
        <div className="container">
          header part
        </div>
    );
}

export default Header;

if (document.getElementById('root')) {
    ReactDOM.render(<Header />, document.getElementById('root'));
}
