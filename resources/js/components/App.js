import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

function App() {
    return (
        <div className="container">

         <Header ></Header>

          <Footer> </Footer>

        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
