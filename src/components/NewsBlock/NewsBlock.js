import React from 'react';

const NewsBlock = (props) => {
  console.log(props.article)
  return (
    <div className="news-block">
      <img src={props.article.Banner} />
      <h3> {props.article.Title} </h3>
    </div>
  );
}

export default NewsBlock;