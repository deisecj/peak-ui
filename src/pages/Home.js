import './Home.css';
import { StarIcon } from '@heroicons/react/outline';
import SearchSelect from '../components/searchSelect/Index';
import Footer from '../components/footer/Index';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleRateMyEmployer = () => {
    navigate('/companies/');
  }

  return (
    <div id="home" className="mx-auto max-w-screen-2xl h-full">
      <div className="hero-section">
        <div className="hero-header-navbar">
          <div className="hero-header">
            <img
              className="hero-logo"
              src="./images/happy-jobs-logo.svg"
              alt=""
            />
          </div>
        </div>
        <div className="hero-content">
          <h1 className="title-text">REAL. HONEST. VERIFIED.</h1>
          <img src="./images/hero-image.svg" className="hero-image" />
        </div>
      </div>
      <div className="explore-section">
        <div className="search-section">
          <div className="">
            <p className="sub-title-text">Explore the companies that interest you.</p>
          </div>
          <div className="search-item">
            <SearchSelect />
          </div>
          <div className="information-section flex justify-between gap-x-8">
            <div className="information-section-item">
              <p>Get in-depth information about company culture shared by verified employees.</p>
            </div>
            <div className="information-section-item">
              <p>Discover company ratings to ensure you will find your happy place in the work place.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contribute-section">
        <div className="contribute-content">
          <img src="./images/rate-employer.svg" alt="" className="contribute-image" />
          <div className="rate-section lg:mt-16">
            <p className="mb-10">Contribute to a growing community and help others reach new heights in their career.</p>
            <button onClick={handleRateMyEmployer} type="button" className="mt-5 inline-flex justify-self-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <StarIcon className="-ml-1 mr-2 h-5 w-5 bg-200" aria-hidden="true" />
              Rate my employer
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
