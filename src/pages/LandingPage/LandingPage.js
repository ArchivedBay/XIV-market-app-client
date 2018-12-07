import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {


  render() {
    return (
      <div id="landing-page">
        <header>
          <h2>Welcome to the FFXIV market-tracker!</h2>
        </header>

        <section className='info-section' id='what'>
          <h3>What it is</h3>

          <p> This app is an information tracker that connects to the XIV API and grabs market data from the game itself </p>
          <p> 
            The API is based on the Companion App for Final Fantasy XIV which was recently released to allow monitoring of this type of
            game information, albeit on a much smaller scale, and under stricter requirements. 
          </p>
          <p>
            The XIVAPI is an open source project to use the companion app, and
            take a lot of the hassle that comes with using the original app, out, leaving easy-to use endpoints.
          </p>
          <p> THIS app, is an extention of the XIVAPI, that specifically targets market data, and uses Chart.js to render 
            a visual representation of an item's liquidity.
          </p>
        </section>

        <section className='info-section' id='why'>
          <h3>Why I built it</h3>
          <p> I built this for two primary reasons:</p>
          <ul>
            <li>I love visual information!! That is, seeing data being represented in a way that's easy to understand.</li>
            <li>
              I wanted to experiment with technology I'd never used before, namely chart.js, 
              and soon to be Node.js / Express.js to allow for the ability to pull from a longer time frame.
              This is an ongoing project for me and if you have any feedback or suggestions, submit a PR to
              <a href='https://github.com/SkyelahBay/XIV-market-app-client'>the repo</a> and I will look them over!
            </li>
          </ul>  
        </section>

        <section className='info-section' id='how'>
          <h3>How it works</h3>
          <p>
            The app in its current stage is simple: at the top right is a search link that takes you to a page where you can input an
            item name from the game, and the API will return all items that match that query. For instance if you know you want some kind of hat
            but don't know what it's called, simply typing 'hat' will return every item containing the word 'hat'

            I am currently using React.js with plans within the near future to add Node / Express combined with MongoDB to get around the 20 result limit for
            search results. The idea is if I periodically ping the XIVAPI at certain times of the day, I can check whether or not an item has had new sales.
            I would then add any new sales as new entries into the database, and simply change the chart to render based on THAT collection instead of the XIVAPI one.
            I can DO this by using the unix timestamp associated with the sale as sort of a unique identifier for that item, and then checking whether or not that timestamp has already been
            added.
          </p>
        </section>

        <section className='info-section' id='known-problems'>
          <h3>Known issues</h3>
          <ul>
            <li>
              As the API itself is still being developed and updated regularly, this might mean some instability, or even loss of functionality 
              at times depending on the state of the game / the API.
            </li>

            <li>
              The companion app by default only returns the 20 most RECENT transactions for an item. While this is fine for items that have low fluidity,
              it causes the chart to be meaningless for items that sell multiple times a day. My solution for this problem is to store new transactions 
              in the database at set times, then pull from that instead.
            </li>

            <li>
              Due to how many items the game has, it would not be practical to store every item as its own entry in the database, as that has already been done by the API,
              and their usage rules strictly prohibit scraping the entire market for this very reason. Because of that, the database solution would be limited strictly to
              items that have very high fluidity. "high" being >= 20 transactions in a single day.
            </li>
            
          </ul>
        </section>

        <section className='info-section' id='known-problems'>
          <h3>Future plans</h3>
          <p> Below is a list of things I want to add as I have time / gain more experience</p>
          <ul>
            <li>Bar chart showing average price of item over x timeframe</li>
            <li>"Best time to sell" based off price & number of sales versus average sale time (perhaps a heat map might be useful here?) </li>
            <li>Other data visualizations that try to find patterns / correlation in the market</li>

          </ul>
        </section>
      </div>
    );
  }
}

export default LandingPage;