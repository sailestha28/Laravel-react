import React from 'react';
import ReactDOM from 'react-dom'

function Footer() {
    return (
        <div className="container">
        Footer part
		</div>
    );
}
export default Footer;
if (document.getElementById('root')) {
    ReactDOM.render(<Footer />, document.getElementById('root'));
}
