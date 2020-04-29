import React from 'react';
import { Link } from 'react-router-dom';

import { urlFormatter, imageFormatter } from 'utils';

import './Card.scss';

const Card = ({
  id,
  title,
  content,
  imageUrl,
  postDate,
  companyName,
  openInNewTab,
}) => {
  return (
    <Link
      to={urlFormatter(id, title)}
      rel="noopener"
      target={openInNewTab ? '_blank' : ''}
      className="news-container"
    >
      <div
        style={{ backgroundImage: `url(${imageFormatter(imageUrl)})` }}
        className="news-image"
      />
      <section className="news-section">
        <article className="news-article">
          <h2 className="news-title">{title}</h2>
        </article>
        <footer className="news-footer">
          <p className="news-companyName">by {companyName} - {postDate}</p>
        </footer>
      </section>
    </Link>
  );
};

export default Card;
