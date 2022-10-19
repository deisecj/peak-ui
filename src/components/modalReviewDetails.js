import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { getAllReviews } from '../apis/reviewAPI';
import Rating from "./rating";
import { StarIcon } from '@heroicons/react/outline';
import { Tooltip } from './Tooltip';
import ReactTooltip from 'react-tooltip';


const ModalReviewDetails = ({ openModal, closeModal, company, characteristicRating, handleOpenModalRate }) => {
  const [reviewsData, setReviewsData] = useState([]);
  
  const getReviewsData = async () => {
    const reviews = await getAllReviews(company);
    //const reviews = dataDB;
    const reviewByCharacteristic = reviews.filter((item) => {
      return item.characteristic.id === characteristicRating.characteristicID;   
    })
    setReviewsData(reviewByCharacteristic);
  }
    console.log('reviews db', reviewsData)

  const formatDate = (date) => {
    const createdAt = new Date(date);
    const options = { year: 'numeric', month: 'short' };
    if (typeof createdAt === 'object' && createdAt !== null && 'toLocaleDateString' in createdAt) {
      const result = createdAt.toLocaleDateString('en-US', options);
      return result;
    }
  }
  
  useEffect(() => {
    if (openModal) {
      getReviewsData();
    }
  }, [openModal])


  return (
    <Transition appear show={openModal} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={() => {}}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-indigo-300 bg-opacity-50" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-center justify-center px-4 py-16 sm:p-20 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="max-w-sm sm:max-w-2xl xl:w-full xl:max-w-3xl transform overflow-hidden rounded-2xl bg-neutral-50 p-3 sm:p-6 text-left align-middle shadow-xl transition-all">
                <div className="sm:mx-0">
                  <div className="grid justify-items-end sm:mt-3">
                    <button onClick={closeModal} type="button" className="bg-neutral-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="sm:mx-12">
                    <div>
                      <div className="mt-1 flex justify-between">
                        <div className="mt-6 flex">
                          <p className="mb-2.5 sm:text-lg font-semibold leading-6 text-neutral-900">{characteristicRating.name}</p>
                            {/* Tooltip {characteristicRating.fullDescription}*/}
                           {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                               </svg> */}
                        </div>
                        <div className='mt-6'>
                        <Rating rating={Math.round(characteristicRating.rating)}/>
                          <p className="text-xs text-neutral-800 leading-4 mt-2">Total reviews: {reviewsData.length}</p>
                        </div>
                      </div>
                      
                      {!reviewsData.find((review) => review.reviewText && review.reviewText !== '' ) && (
                         <div className='mt-10'>
                          <p className='text-neutral-800 leading-6 italic text-base'>Sorry, there are no written reviews for this workplace characteristic.  Care to leave a review for the community?</p>
                          </div>
                        )}
                     
                      {reviewsData.find((review) => review.reviewText && review.reviewText !== '' ) && (
                        <div className="mt-4 sm:mt-12 border-b border-neutral-300">
                          <p className='text-base text-neutral-700 italic leading-6 mb-1'>WRITTEN REVIEWS</p>
                        </div>
                        )}
                      
                      {reviewsData.map(review => (
                         <div key={`mwr-${reviewsData.id}`}>
                          {review.reviewText && (
                            <>
                              <div className="mt-4 mb-2 flex justify-between">
                                <div className="text-base sm:text-lg text-neutral-500 leading-7">{formatDate(review.createdAt)}</div>
                                <Rating rating={review.rating} />
                              </div>
                              <div className='mb-8'>
                               {review.user.jobPosition && review.user.jobLocation && (<p className='text-base sm:text-lg text-neutral-600 leading-7 mb-1'>{review.user.jobPosition} - {review.user.jobLocation}</p>)}
                               {!review.user.jobPosition && (<p className='text-base sm:text-lg text-neutral-600 leading-7 mb-1'>{review.user.jobPosition} {review.user.jobLocation}</p>)}
                                <p className='text-base sm:text-lg text-neutral-900 leading-7 border-t border-neutral-300 py-2'>{review.reviewText}</p>
                              </div>
                            </>
                          )}                    
                       </div>
                      ))}
                    </div>
                    <div className="border-t border-neutral-300 mt-1 sm:mt-6 mb-1 sm:mb-12 flex justify-center">
                      <button onClick={handleOpenModalRate} type="button" className="px-2 py-2 mt-3 sm:mt-12 inline-flex justify-self-center border border-transparent shadow-sm rounded-md text-base font-semibold text-neutral-900 bg-indigo-300 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200">
                        <StarIcon className="ml-1 mr-1 h-5 w-5 mt-1" aria-hidden="true" />
                        Rate this company
                      </button>
                    </div>              
                  </div>           
                </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  )
}

export default ModalReviewDetails;