import './Company.css';
import Layout from '../components/layout';
import { StarIcon } from '@heroicons/react/outline';
import Rating from '../components/rating';
import CharacteristicRating from '../components/characteristicRating';

const experienceRatings = [
  { name: 'Work-life balance' },
  { name: 'Remote flexibility' },
  { name: 'Diversity' },
  { name: 'Inclusive environment' },
  { name: 'Trust' },
  { name: 'Young & fun environment' },
];

const personalRatings = [
  { name: 'Growth opportunies' },
  { name: 'Mentorship' },
  { name: 'Work Satisfaction' },
  { name: 'Team support' },
  { name: 'Managerial Support' },
  { name: 'Collaborative environment' },
  { name: 'Diverse leadership' },
];

const traditionalRatings = [
  { name: 'Compensation' },
  { name: 'Benefits & perks' },
  { name: 'Personal/ vacation time' },
  { name: 'Job security' },
  { name: 'Executive team' },
  { name: 'Interview process' },
];

const Company = () => {
  return (
    <Layout>
      <div className="company-container">
        <div className="company-card">
          <img src="/images/company-image.svg" className="company-image" />
          <p className="link-about-company">About this company</p>    
        </div>
        <div className="company-information-container">
          <p className="company-name-section">IBM North America</p>
          <div className="company-rating">
            <div className="company-rating-stars">
              <Rating />
            </div>
            <div className="company-rating-text">
              <p>5/5 average rating</p>
            </div>
          </div>
          <div className="company-review-total">
            <p>Total Reviews: 147</p>
          </div>
          <button type="button" className="rate-this-company-button">
            <StarIcon className="icon-button-rate-company" aria-hidden="true" />
            Rate this company
          </button>
        </div>
      </div>
      <div className="cultural-characteristics-container">
        <h1 className="title-characteristics">Cultural workplace characteristics</h1>
        <CharacteristicRating characteristic="WORKPLACE EXPERIENCE" ratings={experienceRatings} />
        <CharacteristicRating characteristic="PERSONAL GROWTH" ratings={personalRatings} />
      </div>
      <div className="traditional-characteristics-container rounded-lg py-8 px-3 xl:py-9 xl:px-12 mt-14">
        <h1 className="title-characteristics">Traditional workplace characteristics</h1>
        <CharacteristicRating ratings={traditionalRatings} />
      </div>
      <div className="question-company mt-16 sm:mt-20">
        <h1 className="title-question-section">Do you work at IBM North America?</h1>
        <p className="text-question-section">By honestly rating your company, you can help other job seekers.  Our system is completely anoymous after email verification.</p>
        <button type="button" className="rate-this-company-button">
          <StarIcon className="icon-button-rate-company" aria-hidden="true" />
          Rate this company
        </button>
      </div>
    </Layout>
  );
}

export default Company;
