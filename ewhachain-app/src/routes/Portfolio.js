import React from 'react';
import PortfolioHeader from "../components/portfoilo/PortfolioHeader";
import PortfolioNav from "../components/portfoilo/PortfolioNav";
import PortfolioContent from '../components/portfoilo/PortfoiloContent';

class Portfolio extends React.Component {
    render(){
        return(
            <div>
                <PortfolioHeader/>
                <PortfolioNav/>
                <PortfolioContent />
            </div>

        );
    }
}

export default Portfolio;