import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function Index() {
    return (
        <div className="container">
      
		<Header />
		<Home />

		<Footer />
        </div>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
