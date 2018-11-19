import React, { Component } from 'react';
import xivAPI from '../../api/xiv-api';
import NewsBlock from '../../components/NewsBlock/NewsBlock'
import './NewsPage.css'

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      news: []
    };
  }

  // load the latest news on each initial render.
  componentDidMount(){
    xivAPI.fetchLatestNews()
      .then( lodestoneNewsJSON => this.setState({ news: lodestoneNewsJSON }) )
      .catch( error => console.log(error) )
  }

  renderArticles = () => {
    if(this.state.news.length > 0){
      return this.state.news.map((article, index) => {
        return <NewsBlock key={index+1} article={article} /> 
      });
    }
  }


  render() {
    return (
      <div id="home-page">
        <h1>Home Page</h1>
        {this.renderArticles()}
      </div>
    );
  }
}

export default NewsPage;