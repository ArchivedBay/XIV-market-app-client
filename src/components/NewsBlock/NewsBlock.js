import React from 'react';

const NewsBlock = (props) => {
  return (
    <div className="news-block">
      <img src={props.article.Banner} alt='news event for ffxiv' />
      <h3> {props.article.Title} </h3>
    </div>
  );
}

export default NewsBlock;