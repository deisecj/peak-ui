import { useState } from 'react';

const RatingReview = ({ initialValue, rateSelected }) => {
  const [rating, setRating] = useState(initialValue);
  const [savedRating, setSavedRating] = useState(initialValue);

  const emptyStar = (
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-8 sm:w-10 h-8 sm:h-10 mt-2 mr-3.5 sm:mr-6 ml-4 sm:ml-9 text-indigo-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
    </svg>
  )

  const fullStar = (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 sm:w-10 h-8 sm:h-10 mt-2 mr-3.5 sm:mr-6 ml-4 sm:ml-9 text-indigo-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
  );

  const handleOnMouseOver = (rate) => {
    setRating(rate);
  }

  const handleOnMouseLeave = () => {
    setRating(savedRating);
  } 

  const handleOnClick = (rate) => {
    setSavedRating(rate);
    setRating(rate);
    if (rateSelected) {
      rateSelected(rate);
    }
  }
  
  const star = (rate) => {
     return <li key={`star-${rate}`} onMouseOver={() => handleOnMouseOver(rate)} onMouseLeave={() => handleOnMouseLeave()} onClick={() => handleOnClick(rate)}>{rating >= rate ? fullStar : emptyStar}</li> 
  }
 
  const starList = [star(1), star(2), star(3), star(4), star(5)];
 
  return (
    <ul className="flex">
      {starList.map(star => star)}
    </ul>
  )
}

export default RatingReview;