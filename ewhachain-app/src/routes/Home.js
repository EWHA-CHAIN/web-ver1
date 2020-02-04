import React from 'react';
import Slide from "../components/Slide";
import About from "../components/About";

class Home extends React.Component {
    render(){
        return(
            <div>
                <div className="home.slide">
                    <Slide />
                </div>
            <div classname="home.about">
                <About />
            </div>
            </div>


        );
    }
}

export default Home;