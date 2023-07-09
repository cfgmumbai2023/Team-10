import React from 'react';
import './Student.css';

const Student = () => {
  return(
<>
<main className="container">
  <div className="card">
    <img
      src="https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"
      alt="User image"
      className="card__image"
    />
    <div className="card__text">
      <h2>Rani kumar</h2>
      <p>Rani@gmail.com</p>
      <p>91XXXXXXXXXX</p>
    </div>
    <ul className="card__info">
      <li>
        <span className="card__info__stats">72</span>
        <span>viewed</span>
      </li>
      <li>
        <span className="card__info__stats">7</span>
        <span>watch later</span>
      </li>
      <li>
        <span className="card__info__stats">20</span>
        <span>evaluation</span>
      </li>
    </ul>
    {/* <div className="card__action">
      <button className="card__action__button card__action--follow">
        follow
      </button>
      <button className="card__action__button card__action--message">
        message
      </button>
    </div> */}
  </div>
</main>

</>
  )
  ;
};

export default Student;
