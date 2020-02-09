import React from 'react';
import PortfolioHeader from "../components/portfoilo/PortfolioHeader";
import PortfolioBody_4 from "../components/portfoilo/PortfolioBody_4";
import PortfolioBody_3 from "../components/portfoilo/PortfolioBody_3";
import PortfolioBody_2 from "../components/portfoilo/PortfolioBody_2";
import PortfolioBody_1 from "../components/portfoilo/PortfolioBody_1";
import PortfolioNav from "../components/portfoilo/PortfolioNav";

import { BrowserRouter, Route } from 'react-router-dom';


class Portfolio extends React.Component {
    render(){
        return(
            <div>
                <PortfolioHeader />
                <PortfolioNav />
            <BrowserRouter>
                <Route path="/Portfolio/fourth" component={PortfolioBody_4} />
                <Route path="/Portfolio/third" component={PortfolioBody_3} />
                <Route path="/Portfolio/second" component={PortfolioBody_2} />
                <Route path="/Portfolio/first" component={PortfolioBody_1} />
            </BrowserRouter>
            </div>

        );
    }
}

export default Portfolio;