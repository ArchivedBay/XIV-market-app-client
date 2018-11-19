const fetchLatestNews = () => {
  return fetch('https://xivapi.com/lodestone/news')
    .then( res => res.json() )
    .catch( error => console.log(error) )
}

const itemSearch = (itemString) => {
  return fetch(`https://xivapi.com/search?indexes=item&string=${itemString}`)
    .then( xivData => xivData.json() )
    .catch( error => console.log(error) )
}

const fetchCurrentPrices = (server, itemID) => {
  return fetch(`https://xivapi.com/market/${server}/items/${itemID}`)
    .then( xivData => xivData.json() )
    .catch( error => console.log(error) )
}

const fetchPriceHistory = (server, itemID) => {
  return fetch(`https://xivapi.com/market/${server}/items/${itemID}/history`)
    .then( xivData => xivData.json() )
    .catch( error => console.log(error) )
}

// process.env.REACT_APP_FFXIV_API_KEY
// this.props.match.params.itemID - 9027

export default {
  fetchLatestNews: fetchLatestNews, // grab the latest news from the lodestone
  itemSearch: itemSearch,           // search the db for an item & get back a list of results.
  fetchCurrentPrices: fetchCurrentPrices,
  fetchPriceHistory: fetchPriceHistory
}


