import './layout.css'
import Footer from './footer';
import { StarIcon } from '@heroicons/react/outline';
import SearchSelect from './searchSelect';
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleRateMyEmployer = () => {
    navigate('/companies/');
  }

  return (
    <div>
      <div className="subpage-bg-header">
        <div className="subpage-container">
          <div className="subpage-header">
            <img
              className="subpage-logo"
              src="/images/happy-jobs-logo.svg"
              alt=""
            />
            <div className="subpage-rate-search-section">
              <div>
                <button onClick={handleRateMyEmployer} type="button" className="subpage-rate-button">
                  <StarIcon className="-ml-1 mr-2 h-5 w-5 bg-200" aria-hidden="true" />
                  Rate my employer
                </button>
              </div>
              <div className="subpage-search">
                <SearchSelect className="subpage-search-select" classNameSearchIcon="subpage-search-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>      
      <div className="subpage-container">
        <div className="subpage-title">
          <div>
            <h1>REVIEWS.</h1>
          </div>
          <div>
            <h1>REAL. HONEST. VERIFIED.</h1>
          </div>
        </div>
        <main className="subpage-main">{children}</main>
        <Footer menuClassName="subpage-menu-section" footerClassName="subpage-footer"/>
      </div>
    </div>
  )
}

export default Layout;
