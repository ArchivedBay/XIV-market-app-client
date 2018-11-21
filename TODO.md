# TODO
 - implement a backend to pull data from the API as opposed to doing it entirely on the front-end
    - the reason being that the api is limited to the most recent 20 sales. Since we want to grab consistent data over a longer period, say a month, we need to regularly update our database with new data from the API so our front-end has a larger pool of data to grab from.

    - what this might look like is having your backend ping the FFXIV API and pull the most recent transactions for an item, then, since each transaction has a unix timestamp, we can use that as the "check" to find duplicates, so only NEW items get added.

    - the api will then output this in a format easy for the react chart to parse.

    - note this introduces a secondary delay in information so not only is there a delay from the FFXIV API itself, but you get a delay from the call made to the rails endpoint, so having up-to-date and accurate results is pretty much impossible for items that sell incredibly fast.

  - ~~Add a feature on the front end to allow the user to select their server instead of having to hard code it like it is now.~~ Done
    - Could also add a seperate metrics page to show the sale history of an item on each server.