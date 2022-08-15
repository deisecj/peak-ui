import './layout.css'
import Footer from './footer';
import { StarIcon, XIcon, MenuIcon } from '@heroicons/react/outline';
import SearchSelect from './searchSelect';
import { useNavigate } from "react-router-dom";
import { Disclosure } from '@headlessui/react';

const menu = [
  { name: 'About' , url: '#' },
  { name: 'Privacy policy' , url: '#' },
  { name: 'Terms of use', url: '#' },
  { name: 'Rating and review guidelines', url: '#' }
];

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleRateMyEmployer = () => {
    navigate('/companies/');
  }

  return (
    <div>
      <div className="subpage-bg-header">
        <div className="subpage-container">
          <Disclosure className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="subpage-header">
                  <img
                    className="subpage-logo"
                    src="/images/happy-jobs-logo.svg"
                    alt=""
                  />
                  <div className="flex">
                    <div className="subpage-rate-search-section">
                      <div>
                        <button onClick={handleRateMyEmployer} type="button" className="subpage-rate-button">
                          <StarIcon className="ml-1 mr-2 h-5 w-5 bg-200" aria-hidden="true" />
                          Rate my employer
                        </button>
                        <button onClick={handleRateMyEmployer} type="button" className="subpage-rate-button-mobile">
                          <StarIcon className="w-6 bg-200" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="subpage-search">
                        <SearchSelect className="subpage-search-select" classNameSearchIcon="subpage-search-icon" />
                      </div>
                    </div>
                    <div className="relative z-10 flex items-center sm:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
                <Disclosure.Panel className="subpage-navbar-menu">
                  <div className="subpage-navbar-menu-content">
                    {menu.map(item => (
                      <Disclosure.Button key={`menu-${item.name}`} as="a" href={item.href} className="border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>

              </>
            )}
          </Disclosure>     
        </div>       
      </div>
        
      <div className="subpage-container">
        <div className="subpage-title">
          <div className="">
            <h1>REVIEWS.</h1>
          </div>
          <div>
            <h1 className="subpage-subtitle">REAL. HONEST. VERIFIED.</h1>
          </div>
        </div>
        <main className="subpage-main">{children}</main>
        <div className="subpage-footer-bg">
          <Footer menuClassName="subpage-menu-section" footerClassName="subpage-footer" />
        </div>
      </div>
    </div>
  )
}

export default Layout;
