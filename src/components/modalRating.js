import { Fragment, useEffect, useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { getCharacteristics } from '../apis/characteristicAPI';
import UserVerification from './userVerification';
import ModalCompanyDetails from "./modalCompanyDetails";
import ModalCulturaRatings from './modalCulturalRatings';
import ModalPersonalRatings from './modalPersonalRatings';
import ModalTraditionalRatings from './modalTraditionalRatings';
import ModalConfirmationReview from './modalConfirmationReview';
import { createReview } from '../apis/reviewAPI'; 

const ModalRating = ({ openModal, closeModal }) => {
  const modalFocusOnTop = useRef();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState(undefined);
  const [companyDetailsStep, setCompanyDetailsStep] = useState({});
  const [characteristics, setCharacteristics] = useState([]);
  const [culturalRatingsStep, setCulturalRatingsStep] = useState(new Map());
  const [personalRatingsStep, setPersonalRatingsStep] = useState(new Map());
  const [traditionalRatingsStep, setTraditionalRatingsStep] = useState(new Map());

  const nextStep = (step) => {
    setStep(step);
  }

  const backStep = (step) => {
    setStep(step);
  }

  const getEmail = (email) => {
    setEmail(email);
  }

  const getCompanyStepData = (companyData) => {
    setCompanyDetailsStep(companyData);
  }

  const getCulturalRatingsStep = (culturalRatingsData) => {
    setCulturalRatingsStep(culturalRatingsData);   
  }

  const getPersonalRatingsStep = (personalRatingsData) => {
    setPersonalRatingsStep(personalRatingsData);   
  }

  const getTraditionalRatingsStep = (traditionalRatingsData) => {
    setTraditionalRatingsStep(traditionalRatingsData);   
  }

  const populateCharacteristicsData = async () => {
    const characteristicsData = await getCharacteristics();
    //const characteristicsData = dataDB.allCharacteristics;
    setCharacteristics(characteristicsData);
  }

  const convertMapToReviews = (ratingMap) => {
    const reviews = [];
    ratingMap.forEach((value, key) => {
      reviews.push({ characteristic_id: key, rating: value.rating, review_text: value.comment });
    });

    return reviews;
  }

  const onCompleteTraditionalRatingStep = async (traditionalRatingsData) => {
    setTraditionalRatingsStep(traditionalRatingsData); 

    const culturalRatings = convertMapToReviews(culturalRatingsStep);
    const personalRatings = convertMapToReviews(personalRatingsStep);
    const traditionalRatings = convertMapToReviews(traditionalRatingsData);

    const reviewBody = {
      company: companyDetailsStep.company,
      user: { email, job_location: companyDetailsStep.location, job_position: companyDetailsStep.position },
      reviews: culturalRatings.concat(personalRatings).concat(traditionalRatings)
    }

    try {
      const response = await createReview(reviewBody);
      if (response.status === 200) {
        nextStep(6);
      } else {
        const body = await response.json();
        setNotification(body.message);
      }
    } catch (e) {
      setNotification('Oops, something went wrong, please contact us.');
    }
  }

  // open the modal
  useEffect(() => {
    if (openModal) {
      populateCharacteristicsData();
    }
  }, [openModal])

  useEffect(() => {
    setTimeout(() => modalFocusOnTop.current?.scrollIntoView());
  }, [step])

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
            <Dialog.Panel className="max-w-sm sm:max-w-2xl xl:w-full xl:max-w-3xl transform overflow-hidden rounded-2xl bg-neutral-50 p-6 text-left align-middle shadow-xl transition-all">
                <div ref={modalFocusOnTop} className="sm:mx-24">
                  <div className="grid justify-items-end mt-3">
                    <button onClick={closeModal} type="button" className="bg-neutral-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-2">
                    {step === 1 && <UserVerification onCompleteStep={() => nextStep(2)} saveEmail={getEmail} initialValue={email}/>}
                    {step === 2 && <ModalCompanyDetails onCompleteStep={() => nextStep(3)} onBackStep={() => backStep(1)} saveCompanyDetails={getCompanyStepData} initialValue={companyDetailsStep}/>}
                    {step === 3 && <ModalCulturaRatings initialValues={culturalRatingsStep} characteristics={characteristics.filter(characteristic => characteristic.type === 'Workplace Experience')} onCompleteStep={() => nextStep(4)} onBackStep={() => backStep(2)} saveCulturalRatings={getCulturalRatingsStep}/>}
                    {step === 4 && <ModalPersonalRatings initialValues={personalRatingsStep} characteristics={characteristics.filter(characteristic => characteristic.type === 'Personal Growth')} onCompleteStep={() => nextStep(5)} onBackStep={() => backStep(3)} savePersonalRatings={getPersonalRatingsStep}/>}
                    {step === 5 && <ModalTraditionalRatings notification={notification} initialValues={traditionalRatingsStep} characteristics={characteristics.filter(characteristic => characteristic.type === 'Traditional')} onCompleteStep={onCompleteTraditionalRatingStep} onBackStep={() => backStep(4)}/>}
                    {step === 6 && <ModalConfirmationReview />}
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

export default ModalRating;