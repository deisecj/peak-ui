import RatingReview from "./ratingReview";

const ModalCulturaRatings = () => {

  const handleNext = () => {
    
  }

  return (
    <div>
      <div className="mt-14 mb-10">  
          <h4 className="mb-1 text-2xl font-semibold leading-8 text-neutral-900">Cultural workplace characteristics</h4>   
          <p className="mb-5 text-base font-normal leading-6 text-neutral-600">Rate the characteristics that apply to your situation or that you feel comfortable to rate.  Written comments are also optional.</p> 
          <p className="text-sm font-normal leading-5 text-neutral-500">Don’t forget, it’s completely anonymous, but please be respectful and follow our community <ins className="text-blue-700">guidelines</ins>.</p>
      </div>
      <div className="border-t border-neutral-300">
        <div className="flex justify-items-start">
          <div>
          <p className="pt-6 mb-2.5 text-lg font-semibold leading-6 text-neutral-900">Work-life balance</p>
          </div>
          <div className="mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          </div>
        </div>
        <p className="mb-6 text-base font-normal leading-6 text-neutral-600">The amount of time I spend doing my job compared with the amount of time I spend with family and friends and doing things I enjoy.</p>
        <div className="h-14 rounded-md shadown-xl bg-white">
          <RatingReview />
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
            rows={4}
            name="comment"
            id="comment"
            className="placeholder:text-neutral-400 placeholder:text-base placeholder:font-normal shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Additional comments (Optional)"
            defaultValue={''}
          />
          <p className="text-xs text-neutral-400 text-right">0/200</p>
        </div>
      </div>
      <div className="border-t border-neutral-300 mt-12 mb-12 flex justify-between">
        <div className="pt-10">
          <button onClick={() => {}} type="button" className="mt-5 inline-flex justify-self-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-5 mr-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
          </button>
        </div>
        <div className="pt-10">
          <button onClick={handleNext} type="button" className="mt-5 inline-flex justify-self-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-5 ml-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

}

export default ModalCulturaRatings;