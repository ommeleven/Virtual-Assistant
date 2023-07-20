import React from 'react';

const ContentCreatorCard = ({ name, url, description, imageURL }) => {
  return (
    <div className="content-creator-card">
      {imageURL && <img src={imageURL} alt={name} />}
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Visit Profile</a>
    </div>
  );
};

export default ContentCreatorCard;
