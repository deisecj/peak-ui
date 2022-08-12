import './layout.css'
import Footer from './footer';
import { StarIcon } from '@heroicons/react/outline';
import SearchSelect from './searchSelect';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="subpage-bg-header">
        <div className="subpage-container">
          <div className="subpage-header flex justify-between">
            <img
              className="subpage-logo"
              src="/images/happy-jobs-logo.svg"
              alt=""
            />
            <div className="flex gap-4 xl:gap-10">
              <div>
                <button type="button" className="inline-flex justify-self-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
        <div className="subpage-title flex justify-between">
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
