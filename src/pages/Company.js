import './Company.css';
import Layout from '../components/layout';
import { StarIcon } from '@heroicons/react/outline';

const Company = () => {
  return (
    <Layout>
      <div className="company-container flex justify-between">
        <div className="company-card">
          <img src="/images/company-image.svg" className="company-image" />
          <p className='company-name-section'>IBM North America</p>
          <div className="company-rating">
            <div className="company-rating-stars">
              <p>Stars</p>
            </div>
            <div className="company-rating-text">
              <p>Number average rating</p>
            </div>
          </div>
          <div className="company-review-total">
            <p>Total Reviews</p>
          </div>
        </div>
        <div className="company-information-container">
            <p>International Business Machines Corporation (IBM) is an American multinational technology corporation headquartered in Armonk, New York, with operations in over 171 countries. IBM produces and sells computer hardware, middleware and software, and </p>
            <button type="button" className="mt-5 inline-flex justify-self-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <StarIcon className="-ml-1 mr-2 h-5 w-5 bg-200" aria-hidden="true" />
              Rate this company
            </button>
        </div>
      </div>
    </Layout>
  );
}

export default Company;
