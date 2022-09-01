import { useState } from "react"

const UserVerification = ({ onCompleteStep, saveEmail, initialValue }) => {
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [inputEmail, setInputEmail] = useState(initialValue);

  const handleSubmit = () => {
    const validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (inputEmail === '') {
      setEmailEmpty(true);
    } else if (inputEmail.match(validRegex)) {
      saveEmail(inputEmail);
      onCompleteStep();
      //pending: also check business email 
    } else {
      setEmailInvalid(true);
      setEmailEmpty(false);
    }
  }
  
  const HandleInputEmail = (event) => {
    setInputEmail(event.target.value);
  }

  return (
    <div>
      <div className="mt-14">
        <p className="text-2xl font-semibold leading-8">Thank you for reviewing your current employer.</p>
      </div>
      <div className="mt-4">
        <p className="text-lg font-normal leading-7 text-neutral-500">By honestly rating your company, you can help other job seekers.  Our system is completely anoymous after email verification.</p>
      </div>
      <div className="mt-14">
        <p className="text-lg font-normal leading-7 text-neutral-600">Please provide your work email to authenticate your current employer. This process is completely confidential and your email will be discarded after verification for complete anonymity.</p>
      </div>
      <div className="mt-14 grid justify-items-center">
        <div>
          <label htmlFor="email" className="block text-sm font-normal text-neutral-600">
            Work email address
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              value={inputEmail}
              onChange={HandleInputEmail}
              type="email"
              name="email"
              id="email"
              className="block w-80 pr-10 border-brand-500 text-brand-200 placeholder-brand-200 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm rounded-md"
              placeholder="johndoe@corporation.com"
              aria-invalid="true"
              aria-describedby="email-error"
            />
          </div>
          {emailEmpty && <p className="mt-2 text-sm text-rose-600" id="email-error">
            *Required to continue
          </p>}
          {emailInvalid && <p className="mt-2 text-sm text-rose-600" id="email-error">
            *Please enter valid employer email
          </p>}
        </div>
      </div>
      <div className="mt-14 mb-10 sm:mb-20 grid justify-items-center">
        <button onClick={handleSubmit} type="button" className="mt-5 h-11 inline-flex justify-self-center px-4 py-2.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
      </div>
    </div>
  );
}

export default UserVerification;


