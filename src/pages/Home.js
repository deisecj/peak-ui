import './Home.css';
import { StarIcon } from '@heroicons/react/outline';
import SearchSelect from '../components/searchSelect/Index';
import Footer from '../components/footer/Index';

const Home = () => {
  return (
      <div id="home" className="lg:container mx-auto">
      <div className="first-section">
        <div className="header-section">
          <img
            className=""
            src="./images/happy-jobs-logo.svg"
            alt=""
          />
        </div>
        <div className="title-section">
          <h1 className="title-text">REAL. HONEST. VERIFIED.</h1>
        </div>        
      </div>
      <div className="second-section grid justify-items-center">
        <div className="search-section">
          <div className="">
            <p className="sub-title-text">Explore the companies that interest you.</p>
          </div>
          <div className="search-item">
              <SearchSelect/>
            </div>
            <div className="information-section flex gap-x-8">
              <div className="information-section-item">
                <p>Get in-depth information about company culture shared by verified employees.</p>
              </div>
              <div className="information-section-item">
                <p>Discover company ratings to ensure you will find your happy place in the work place.</p>
              </div>
            </div>        
        </div>
      </div>
      <div className="third-section grid justify-items-center">
        <div className="rate-section flex gap-x-8">
          <div className="rate-section-item">
            <img
                className="w-full"
                src="./images/rate-employer.svg"
                alt=""
              />
          </div>
          <div className="rate-section-item lg:mt-16">
            <p className="mb-10 mr-6">Contribute to a growing community and help others reach new heights in their career.</p>
            <button
              type="button"
              className="mt-5 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <StarIcon className="-ml-1 mr-2 h-5 w-5 bg-200" aria-hidden="true" />
              Rate my employer
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
