import RatingReview from "./ratingReview";
import { useEffect, useState } from 'react';

const ModalPersonalRatings = ({ characteristics, initialValues, onCompleteStep, onBackStep, savePersonalRatings }) => {
  const [ratingsPersonal, setRatingsPersonal] = useState(initialValues);

  const getInitialRatingReview = (characteristicID) => {
    const currentRating = ratingsPersonal.get(characteristicID);
      return currentRating?.rating;
  }

  const getInitialRatingComment = (characteristicID) => {
    const currentRating = ratingsPersonal.get(characteristicID);
      return currentRating?.comment;
  }

  const handleComment = (event, characteristicID) => {
    const ratingComment = event.target.value;
    const ratingSearch = ratingsPersonal.get(characteristicID);
    
    if (ratingSearch) {    
      ratingSearch.comment = ratingComment;
      ratingsPersonal.set(characteristicID, ratingSearch)
      setRatingsPersonal(ratingsPersonal);
    } else {
      ratingsPersonal.set(characteristicID, { comment: ratingComment });
      setRatingsPersonal(ratingsPersonal);
    }
  }

  const handleRatingStar = (ratingSaved, characteristicID) => {
    const ratingSearch = ratingsPersonal.get(characteristicID);

    if (ratingSearch) {
      ratingSearch.rating = ratingSaved;
      ratingsPersonal.set(characteristicID, ratingSearch)
      setRatingsPersonal(ratingsPersonal);
    } else {
      ratingsPersonal.set(characteristicID, { rating: ratingSaved });
      setRatingsPersonal(ratingsPersonal);
    }  
  }

  const handleNext = () => {
    savePersonalRatings(ratingsPersonal);
    onCompleteStep();
  }

  useEffect(() => {
    console.log("personal rating temporarly", ratingsPersonal)
  }, [ratingsPersonal])

  const handleBack = () => {
    onBackStep();
  }

  return (
    <div>
      <div className="mt-14">  
          <h4 className="mb-1 text-2xl font-semibold leading-8 text-neutral-900">Personal growth characteristics</h4>   
      </div>
      {characteristics.map(characteristic => (
        <div key={`mw-${characteristic.id}`} className="border-t border-neutral-300 mt-10">
        <div className="flex">
          <div>
            <p className="pt-6 mb-2.5 text-lg font-semibold leading-6 text-neutral-900">{characteristic.name}</p>
          </div>
          <div className="mt-5">
            <svg data-tooltip-target="tooltip-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <div id="tooltip-dark" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Tooltip content
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          </div>
        </div>
        <p className="mb-6 text-base font-normal leading-6 text-neutral-600">{characteristic.short_description}</p>
        <div className="h-14 rounded-md shadown-xl bg-white">
          <RatingReview initialValue={getInitialRatingReview(characteristic.id)} rateSelected={(ratingSaved) => handleRatingStar(ratingSaved, characteristic.id)}/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <p className="text-sm text-neutral-400 italic">Strongly disagree</p>
          </div>
          <div>
            <p className="text-sm text-neutral-400 italic">Strongly agree</p>
          </div>
        </div>
        <div className="mt-3">
          <textarea
            onChange={(event) => handleComment(event, characteristic.id)}
            rows={4}
            name="comment"
            id="comment"
            className="placeholder:text-neutral-400 placeholder:text-base placeholder:font-normal shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Additional comments (Optional)"
            defaultValue={''}
            maxLength="200"
            value={getInitialRatingComment(characteristic.id)}
          />
         { /* <div className="text-xs text-neutral-400 text-right">0/200</div> */}
        </div>
      </div> ))}
      <div className="border-t border-neutral-300 mt-12 mb-12 flex justify-between">
        <div className="pt-10">
          <button onClick={handleBack} type="button" className="mt-5 inline-flex justify-self-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-5 mr-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
          </button>
        </div>
        <div className="pt-10">
          <button onClick={handleNext} type="button" className="mt-5 inline-flex justify-self-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Traditional ratings
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-5 ml-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPersonalRatings;