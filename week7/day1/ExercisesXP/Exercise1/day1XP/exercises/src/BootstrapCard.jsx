import React from 'react';

export default function BootstrapCard({ celebrities }) {
    const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ];

  return (
    <div className="d-flex flex-wrap ">
      {celebrities.map((celeb, index) => (
        <div className="card m-3" style={{ width: '18rem' }} key={index}>
          <img className="card-img-top" src={celeb.imageUrl} alt={celeb.title} />
          <div className="card-body">
            <h5 className="card-title">{celeb.title}</h5>
            <p className="card-text">{celeb.description}</p>
            <a href={celeb.buttonUrl} className="btn btn-primary">
              {celeb.buttonLabel}
            </a>
          </div>
           <ul className="list-group">
           
           {planets.map((planet,index)=>(
            <li key={index} className="list-group-item">{planet}</li>
      ))}
            </ul>
        </div>
      ))}
    </div>
  );
}
