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
import ModalRating from '../components/modalRating';

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
  const [isOpen, setIsOpen] = useState(false);
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

  const handleOpenModal = () => {
    setIsOpen(true);
  }
  
  const getCharacteristicData = async () => {
    const dataDB = await getCharacteristics();
    const characteristicsData = dataDB;
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
            fullDescription: element.full_description
          });
      } else if (element.type === 'Personal Growth') {
        characteristicPersonalData.push(
          {
            characteristicID: element.id,
            group: element.group,
            type: element.type,
            name: element.name,
            rating: companyRating?.rating,
            fullDescription: element.full_description
          });
      } else {
        characteristicTraditionalData.push(
          {
            characteristicID: element.id,
            group: element.group,
            type: element.type,
            name: element.name,
            rating: companyRating?.rating,
            fullDescription: element.full_description
          });
      }
    });    
    setCharacteristicWorkplace(characteristicWorkplaceData);
    setCharacteristicPersonal(characteristicPersonalData);
    setCharacteristicTraditional(characteristicTraditionalData);
  }

  useEffect(() => {
    getCompanyInfo();
  },[params.id]);

  useEffect(() => {
    if (companyInfo != undefined) {
      getCharacteristicData();
    }
  }, [companyInfo])

  return (
    <Layout>
      <div className="company-container">
        <div className="company-card">
          <img src="/images/company-generic-image.svg" className="company-image"/>    
          {/* <p className="link-about-company">About this company</p> */}
        </div>
        <div className="company-information-container">
          <p className="company-name-section">{companyInfo?.company?.name}</p>
          <div className="company-rating">
            <div className="company-rating-stars">
              <Rating rating={Math.round(companyInfo?.averageCharacteristicRating)}/>
            </div>
            <div className="company-rating-text">
              <p>{Math.round(companyInfo?.averageCharacteristicRating)}/5 average rating</p>
            </div>
          </div>
          <div className="company-review-total">
            <p>Total Reviews: {companyInfo?.totalReviews}</p>
          </div>
          <button onClick={handleOpenModal} type="button" className="rate-this-company-button">
            <StarIcon className="icon-button-rate-company" aria-hidden="true" />
            Rate this company
          </button>
        </div>
      </div>
      <div className="cultural-characteristics-container">
        <h1 className="title-characteristics">Cultural workplace characteristics</h1>
        {characteristicWorkplace && <CharacteristicRating characteristic="WORKPLACE EXPERIENCE" ratings={characteristicWorkplace} company={companyInfo?.company?.id}/>}
        {characteristicPersonal && <CharacteristicRating characteristic="PERSONAL GROWTH" ratings={characteristicPersonal} company={companyInfo?.company?.id} /> }
      </div>
      {characteristicTraditional && <TraditionalCharacteristic ratings={characteristicTraditional} company={companyInfo?.company?.id}/>}
      <div className="question-company mt-14 sm:mt-16 sm:mt-20">
        <h1 className="title-question-section">Do you work at {companyInfo?.company?.name}?</h1>
        <p className="text-question-section">Your company rating makes an impact with a community of job hunters just like you.</p>
        <p className="text-question-section">Share relatable experiences without including your location or position, unless you want to.</p>
        <button onClick={handleOpenModal} type="button" className="rate-this-company-button">
          <StarIcon className="icon-button-rate-company" aria-hidden="true" />
          Rate this company
        </button>
        {isOpen && <ModalRating openModal={isOpen} closeModal={() => setIsOpen(false)}/>}
      </div>
    </Layout>
  );
}

export default Company;
