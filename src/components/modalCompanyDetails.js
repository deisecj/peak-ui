import { useState } from "react";
import SearchSelect from '../components/searchSelect';

const ModalCompanyDetails = ({ onCompleteStep, onBackStep, saveCompanyDetails, initialValue }) => {
  const [companyEmpty, setCompanyEmpty] = useState(false);
  const [inputName, setInputName] = useState(false);
  const [companyName, setCompanyName] = useState(initialValue.company);
  const [inputPosition, setInputPosition] = useState(initialValue.position);
  const [inputLocation, setInputLocation] = useState(initialValue.location);
  const [companyDetailsStep, setCompanyDetailsStep] = useState({}); 

  const handleNext = () => {
    if (companyName) {
      const updatedDetailsStep = { company: companyName, position: inputPosition || undefined, location: inputLocation || undefined };
      setCompanyDetailsStep(updatedDetailsStep)
      saveCompanyDetails(updatedDetailsStep)
      onCompleteStep();
    } else {
      setCompanyEmpty(true);
    }
  }

  const handleBack = () => {
    onBackStep();
  }
  
  const handleInputPosition = (event) => {
    setInputPosition(event.target.value);
  }

  const handleInputLocation = (event) => {
    setInputLocation(event.target.value);
  }

  const handleCompanyInput = (company) => {   
     setCompanyName(company);
  }

  return (
    <div>
      <div className="mt-14">
        <p className="text-lg font-semibold leading-7 text-neutral-900">Please provide your full company name.</p>
      </div>
      <div className="mt-3 relative rounded-md shadow-sm">
        <SearchSelect
          className="w-full focus:ring-indigo-500 focus:border-indigo-500 rounded-md border-brand-500 px-4 py-2.5 text-gray-900 placeholder:text-neutral-400 placeholder:text-base placeholder:font-normal sm:text-sm"
          classNameSearchIcon="hidden"
          placeHolderText="Full company name"
          createEnable={() => {setInputName(true)}}
          onSelect={handleCompanyInput}
          value={companyName}
        />
      </div>
      {!companyEmpty && <p className="mt-2 text-sm text-rose-600" id="email-error">*Required</p>}
      {companyEmpty && <p className="mt-2 text-sm text-rose-600" id="input-error">*The full company name is required to proceed.</p>}        
      <div className="mt-14">
        <p className="text-base font-semibold leading-6 text-neutral-500">OPTIONAL INFORMATION.</p>
      </div>
      <div className="mt-1">
        <p className="text-lg font-normal leading-7 text-neutral-900">Please answer the below questions only if you feel safe to do so.</p>
      </div>
      <div className="mt-10 grid justify-items-right">
        <div>
          <label htmlFor="position" className="block text-lg font-normal leading-7 text-neutral-700">
            What is your current position?
          </label>
          <div className="mt-2 relative rounded-md shadow-sm">
            <input
              value={inputPosition}
              onChange={handleInputPosition}
              type="text"
              name="position"
              id="position"
              className="block w-full pr-10 border-brand-500 text-brand-200 placeholder:text-neutral-400 placeholder:text-base placeholder:font-normal focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm rounded-md"
              placeholder="Junior content writer"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="office" className="block text-lg font-normal leading-7 text-neutral-700">
            What is the location of your current office?
          </label>
          <div className="mt-2 relative rounded-md shadow-sm">
            <input
              value={inputLocation}
              onChange={handleInputLocation}
              type="text"
              name="office"
              id="office"
              className="block w-full pr-10 border-neutral-400 text-brand-200 placeholder:text-neutral-400 placeholder:text-base placeholder:font-normal focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm rounded-md"
              placeholder="New York City, NY"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-300 mt-12 mb-12 flex justify-between">
        <div className="pt-10">
          <button onClick={handleBack} type="button" className="mt-5 h-11 inline-flex justify-self-center px-4 py-2.5 border border-transparent shadow-sm text-sm font-semibold rounded-md text-neutral-900 bg-indigo-300 hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-5 mr-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
          </button>
        </div>
        <div className="pt-10">
          <button onClick={handleNext} type="button" className="mt-5 h-11 inline-flex justify-self-center px-4 py-2.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500">
            Cultural ratings
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-5 ml-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCompanyDetails;