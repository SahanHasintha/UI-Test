import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Products from './products/products';
import Team from './Team/Team';
import Tweet from './Tweet/Tweet';
import Service from './Service/Service';
import Testimony from './Testimony/Testimony';
import Pricing from './Pricing/Pricing';
import Quote from './Quote/Quote';
import Footer from './Footer/Footer';

const App = () => {
    return (
        <div>
            <Home />
            <About />
            <Team />
            <Service />
            <Products />
            <Tweet/>
            <Testimony />
            <Pricing />
            <Quote />
            <Contact/>  
            <Footer />
        </div>
    )
}

export default App;
