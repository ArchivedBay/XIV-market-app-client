import React, { Component } from 'react';
import xivAPI from '../../api/xiv-api';
import MarketSale from '../../components/MarketSale/MarketSale';
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
    xivAPI.fetchPriceHistory('Adamantoise', this.props.match.params.itemID)
      .then( priceHistoryJSON => this.setState({ priceHistory: priceHistoryJSON }))
      .then(_priceHistoryJSON => xivAPI.fetchCurrentPrices('Adamantoise', this.props.match.params.itemID) )
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

  // 

  render() {
    return (
      <div className="item-result-page">
        <p> 
          Showing market data for: 
          <span className='render-status primary-color'> {this.state.priceHistory.Item ? this.state.priceHistory.Item.Name : '...Loading'} </span>
          on: 
          <span className='primary-color'> Adamantoise</span>
        </p>

        <div className="market-data-container">
          {this.renderSales()}
        </div>
      </div>
    );
  }
}

export default ItemResultPage;