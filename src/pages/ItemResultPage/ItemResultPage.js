import React, { Component } from 'react';
import xivAPI from '../../api/xiv-api';
import { Link } from 'react-router-dom';
import './ItemResultPage.css';

class ItemResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketData: {
        ID: this.props.match.params.itemID,
        itemName: '',
        currentPrices: [],
        priceHistory: []
      }
    };
  }

  componentDidMount(){
    xivAPI.fetchCurrentPrices('Adamantoise', this.state.marketData.ID)
    .then(currentPricesJson => this.setState({
      marketData: {
        itemName: currentPricesJson.Item.Name,
        currentPrices: currentPricesJson.Prices
      }
    }))
    .catch(error => console.log(error));

    xivAPI.fetchPriceHistory('Adamantoise', this.state.marketData.ID)
      .then(priceHistoryJSON => this.setState({
        marketData: {
          priceHistory: priceHistoryJSON
        }
      }))
      .catch(error => console.log(error));
  }



  render() {
    console.log(this.state)
    return (
      <div className="item-result-page">
        <p> Showing market data for: <span className='render-status primary-color'> {this.state.marketData.itemName ? this.state.marketData.itemName : '...Loading'} </span></p>

        <div className="market-data-container">


        </div>
      </div>
    );
  }
}

export default ItemResultPage;
/* YOU LEFT OFF ON THIS PAGE, TRY TO FIGURE OUT A TEMPORARY DATA VIZ SOLUTION */