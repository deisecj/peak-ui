import './Company.css';
import Layout from '../components/layout';
import { StarIcon } from '@heroicons/react/outline';
import Rating from '../components/rating';
import CharacteristicRating from '../components/characteristicRating';
import TraditionalCharacteristic from '../components/traditionalCharacteristic';
import { singleCompany } from '../apis/companyAPI';
import { getCharacteristics } from '../apis/characteristicAPI';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

/*const experienceRatings = [
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
*/
const Company = () => {
  const [companyInfo, setCompanyInfo] = useState(undefined);
  const [characteristicWorkplace, setCharacteristicWorkplace] = useState();
  const [characteristicPersonal, setCharacteristicPersonal] = useState();
  const [characteristicTraditional, setCharacteristicTraditional] = useState();
  const characteristicWorkplaceData = [];
  const characteristicPersonalData = [];
  const characteristicTraditionalData = [];
  
  const params = useParams();

  const getCompanyInfo = async () => {
    const companyID = params.id;
    const companyData = await singleCompany(companyID);
    setCompanyInfo(companyData);
  }

  const getCharacteristicData = async () => {
    const dataDB = await getCharacteristics();
    const characteristicsData = dataDB.allCharacteristics;
    const ratingData = companyInfo.ratings;
    characteristicsData.forEach(element => {
      const companyRating = ratingData.find(ratingElement => ratingElement.characteristic_id === element.id);
      if (element.type === 'Workplace Experience') {
        characteristicWorkplaceData.push(
          {
            characteristicID: element.id,
            group: element.group,
            type: element.type,
            name: element.name,
            rating: companyRating?.rating,
          });
      } else if (element.type === 'Personal Growth') {
        characteristicPersonalData.push(
          {
            characteristicID: element.id,
            group: element.group,
            type: element.type,
            name: element.name,
            rating: companyRating?.rating,
          });
      } else {
        characteristicTraditionalData.push(
          {
            characteristicID: element.id,
            group: element.group,
            type: element.type,
            name: element.name,
            rating: companyRating?.rating,
          });
      }
    });    
    setCharacteristicWorkplace(characteristicWorkplaceData);
    setCharacteristicPersonal(characteristicPersonalData);
    setCharacteristicTraditional(characteristicTraditionalData);
  }

  useEffect(() => {
    getCompanyInfo();
  },[]);

  useEffect(() => {
    if (companyInfo != undefined) {
      getCharacteristicData();
    }
  }, [companyInfo])

  return (
    <Layout>
      <div className="company-container">
        <div className="company-card">
          <img src="/images/company-image.svg" className="company-image" />
          <p className="link-about-company">About this company</p>    
        </div>
        <div className="company-information-container">
          <p className="company-name-section">{companyInfo?.companydb?.name}</p>
          <div className="company-rating">
            <div className="company-rating-stars">
              <Rating rating={companyInfo?.average_rating}/>
            </div>
            <div className="company-rating-text">
              <p>{companyInfo?.average_rating}/5 average rating</p>
            </div>
          </div>
          <div className="company-review-total">
            <p>Total Reviews: {companyInfo?.total_reviews}</p>
          </div>
          <button type="button" className="rate-this-company-button">
            <StarIcon className="icon-button-rate-company" aria-hidden="true" />
            Rate this company
          </button>
        </div>
      </div>
      <div className="cultural-characteristics-container">
        <h1 className="title-characteristics">Cultural workplace characteristics</h1>
        {characteristicWorkplace && <CharacteristicRating characteristic="WORKPLACE EXPERIENCE" ratings={characteristicWorkplace} />}
        {characteristicPersonal && <CharacteristicRating characteristic="PERSONAL GROWTH" ratings={characteristicPersonal} /> }
      </div>
      {characteristicTraditional && <TraditionalCharacteristic ratings={characteristicTraditional}/>}
      <div className="question-company mt-14 sm:mt-16 sm:mt-20">
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
