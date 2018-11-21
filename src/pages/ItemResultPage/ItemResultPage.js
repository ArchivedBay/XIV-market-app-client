import React, { Component } from 'react';
import xivAPI from '../../api/xiv-api';
import MarketSale from '../../components/MarketSale/MarketSale';
import PieChart from '../../components/PieChart/PieChart';
import './ItemResultPage.css';

class ItemResultPage extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      currentPrices: [],
      priceHistory: [],
      isLoaded: false
    }

  }

  componentDidMount() {
    // updates state, causes 2 re-renders, 1 for each api call
    xivAPI.fetchPriceHistory(this.props.match.params.serverName, this.props.match.params.itemID)
      .then( priceHistoryJSON => this.setState({ priceHistory: priceHistoryJSON }))
      .then(_priceHistoryJSON => xivAPI.fetchCurrentPrices(this.props.match.params.serverName, this.props.match.params.itemID) )
      .then( currentPricesJSON => this.setState({ currentPrices: currentPricesJSON.Prices  }))
      .catch( error => console.log(error) );
      
  }

  renderSales = () => {
    let history = this.state.priceHistory

    // if there is data in state from the API
    if(history.History){
      //return a block for each sale
      return history.History.map( (sale, index) => {
        return (
          <MarketSale key={index+1} sale={sale} />
        );
      });
    }
  }

  renderPieChart = () => {
    let history = this.state.priceHistory;

    if(history.History) return <PieChart historyData={history.History} />
  }

  // NOTE: Instead of calling the XIV API here eventually I'm going
  // to move this to use my own backend instead.
  render() {
    return (
      <div className="item-result-page">
        <p> 
          Showing market data for: 
          <span className='render-status primary-color'> {this.state.priceHistory.Item ? this.state.priceHistory.Item.Name : '...Loading'} </span>
          on: 
          <span className='primary-color'> {this.props.match.params.serverName} </span>
        </p>

        <div className="market-data-container">
          <div className="market-sale-history">
            {this.renderSales()}
          </div>

          <div className="market-sale-graphs">

            <div className="pie-chart">
              {this.renderPieChart()}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ItemResultPage;