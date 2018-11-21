import React from 'react';
import Moment from 'moment';
import './MarketSale.css';

const renderTime = (unixTimeStamp) => {
  let test = Moment.unix(unixTimeStamp).format("dddd, MMMM Do YYYY, h:mm:ss a")

  /* let date = new Date(unixTimeStamp * 1000),
      hours = date.getHours(),
      minutes = `0${date.getMinutes()}`,
      seconds = `0${date.getSeconds()}`; */

  return test;
}

const MarketSale = (props) => {
  return (
    <div className="market-sale">
      <div className="row time-row">
        <h3>Purchase Date: </h3> <p> {renderTime(props.sale.PurchaseDate)} </p>
      </div>
      <div className="row">
        <h3>Quantity: </h3> <p> {props.sale.Quantity} </p>
      </div>
      <div className="row">
        <h3>Individual Price: </h3> <p> {props.sale.PricePerUnit}/ea </p>
      </div>
      <div className="row">
        <h3>Total Price: </h3> <p> {props.sale.PriceTotal} </p>
      </div>

    </div>
  );
}

export default MarketSale;